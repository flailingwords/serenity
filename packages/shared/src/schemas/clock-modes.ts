import { z } from 'zod'

export const imperialTimeScale = 12
export const metricTimeScale = 24

export const zImperialTimeScale = z.union([z.literal(imperialTimeScale), z.literal(imperialTimeScale.toString())]).transform(Number)
export const zMetricTimeScale = z.union([z.literal(metricTimeScale), z.literal(metricTimeScale.toString())]).transform(Number)

export const zClockModes = z.union([zImperialTimeScale, zMetricTimeScale])

export type ImperialTimeScale = z.infer<typeof zImperialTimeScale>
export type MetricTimeScale = z.infer<typeof zMetricTimeScale>

export type ClockModes = z.infer<typeof zClockModes>

export const isImperialTimeScale = (inp?: unknown): inp is ImperialTimeScale => zImperialTimeScale.safeParse(inp).success
export const isMetricTimeScale = (inp?: unknown): inp is MetricTimeScale => zMetricTimeScale.safeParse(inp).success
export const isClockMode = (inp?: unknown): inp is ClockModes => zClockModes.safeParse(inp).success
