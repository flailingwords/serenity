FROM node:22-alpine AS base
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

FROM base

WORKDIR /app

ENV NODE_ENV=production

CMD [ "pnpm", "start" ]

EXPOSE 8787

COPY --from=build /app/ /app/
COPY --from=build /build/packages/frontend/dist/ /app/www/
