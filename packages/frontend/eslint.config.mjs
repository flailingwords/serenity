/* eslint-disable import/no-unresolved -- ESM... */
import { globalIgnores } from 'eslint/config'

import { cjs, mjs, ts, tsx, storybookConfig, jestConfig, globalsConfig, miscConfig } from '../../eslint.config.mjs'

export default [globalIgnores(['dist/']), ...cjs, ...mjs, ...ts, ...tsx, ...storybookConfig, ...jestConfig, ...globalsConfig, ...miscConfig]
