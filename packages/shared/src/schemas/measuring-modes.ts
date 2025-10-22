import { z } from 'zod'

export const zImperialMeasurementMode = z.literal('freedom')
export const zMetricMeasurementMode = z.literal('federation')

export const zMeasurementsModes = z.union([zImperialMeasurementMode, zMetricMeasurementMode])

export type ImperialMeasurementMode = z.infer<typeof zImperialMeasurementMode>
export type MetricMeasurementMode = z.infer<typeof zMetricMeasurementMode>

export type MeasurementsModes = z.infer<typeof zMeasurementsModes>

export const isImperialMeasurementMode = (inp?: unknown): inp is ImperialMeasurementMode => zImperialMeasurementMode.safeParse(inp).success
export const isMetricMeasurementMode = (inp?: unknown): inp is MetricMeasurementMode => zMetricMeasurementMode.safeParse(inp).success
export const isMeasurementMode = (inp?: unknown): inp is MeasurementsModes => zMeasurementsModes.safeParse(inp).success
