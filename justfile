help:
    just -l

hook-pre-commit:
    git diff --cached --name-only --diff-filter=ACMR | sed 's| |\\ |g' | xargs -r pnpm exec prettier --write --ignore-unknown
    git diff --cached --name-only --diff-filter=ACMR | sed 's| |\\ |g' | grep -E '\.tsx?$' | xargs -r pnpm exec eslint --fix
    git update-index --again

hook-pre-push:
    pnpm run build

push:
    @git push

release target:
    @just "release_{{target}}"

release_push:
    @git push --follow-tags origin main

release_version:
    @npx standard-version
