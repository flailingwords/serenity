FROM node:24-alpine AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

FROM base AS build
COPY . /build
WORKDIR /build
RUN apk --no-cache add wget bash
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN pnpm --filter "serenity-shared" build
RUN pnpm --filter "...^serenity-shared" build
RUN pnpm --filter "serenity-backend" deploy --prod /app

FROM base AS prod-base

RUN addgroup -g 46749 appuser && adduser -h /app -s /bin/sh -u 46749 -G appuser -D appuser

WORKDIR /app

ENV NODE_ENV=production

CMD [ "pnpm", "start" ]

EXPOSE 8787

USER 46749:46749

FROM prod-base

COPY --from=build /app/ /app/
COPY --from=build /build/packages/frontend/dist/ /app/www/
