import type { BackendService } from '@/types'

// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-parameters -- override with custom type arg
export const isBackendService = <T extends BackendService>(inp?: unknown): inp is T =>
    typeof inp === 'object' && inp != null && !Array.isArray(inp) && 'start' in inp && 'stop' in inp
