/* eslint-disable @typescript-eslint/no-unnecessary-type-parameters -- Fuck it */


import { zValidator } from '@hono/zod-validator'
import { HTTPException } from 'hono/http-exception'

import type { ValidationTargets } from 'hono'

export const zValidatorWrapper = <Target extends keyof ValidationTargets, T extends Parameters<typeof zValidator>['1']>(
    target: Target,
    schema: T
): ReturnType<typeof zValidator> =>
    zValidator(target, schema, (result) => {
        if (!result.success) {
            throw new HTTPException(400, { cause: result.error })
        }
    })
