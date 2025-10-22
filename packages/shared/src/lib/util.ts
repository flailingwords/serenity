import Debug, { type Debugger } from 'debug'

import { zCoercibleNumber } from '@/schemas/common'

let debug: Debugger | null = null

export const reorder = <T>(list: T[], startIndex: number, endIndex: number): T[] => {
    const result = Array.from(list)

    const [removed] = result.splice(startIndex, 1)

    result.splice(endIndex, 0, removed)

    return result
}

export const getRandomId = (): string => Math.random().toString(36).substring(2, 9)

export const getDebugger = (namespace: string): Debugger => {
    debug ??= Debug('serenity-dashboard')

    return debug.extend(namespace)
}

export const normalizeTime = (val: unknown): number => {
    if (!zCoercibleNumber.safeParse(val).success) {
        throw new Error('Value is not coercable to number')
    }

    const timeVal = Number(val)

    return timeVal > 1000 ? timeVal : timeVal * 1000
}
