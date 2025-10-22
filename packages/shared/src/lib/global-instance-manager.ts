import type { BackendService } from '@/types'

import { isBackendService } from './validators'

declare global {
    var GlobalInstanceManagerInstance: GlobalInstanceManager // NOSONAR
}

class GlobalInstanceManager {
    _instances: Record<string, BackendService> = {}

    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-parameters -- override
    getInstance<T extends BackendService = BackendService>(type: string): T | null | undefined {
        if (isBackendService<T>(this._instances[type])) return this._instances[type]

        // @ts-expect-error -- YOLO
        return this._instances[type]
    }

    saveInstance(type: string, instance: BackendService): void {
        this._instances[type] ??= instance
    }
}

if (!('GlobalInstanceManagerInstance' in globalThis)) {
    globalThis.GlobalInstanceManagerInstance = new GlobalInstanceManager()
}

// eslint-disable-next-line @typescript-eslint/naming-convention -- Exception for globalThis instances
const { GlobalInstanceManagerInstance } = globalThis

export default GlobalInstanceManagerInstance
export { GlobalInstanceManagerInstance }
