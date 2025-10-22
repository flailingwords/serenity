import { z } from 'zod'

export const zConsentStateDeclined = z.literal(-1)
export const zConsentStateUnknown = z.literal(0)
export const zConsentStateAccepted = z.literal(1)

export const zConsentTypes = z.union([zConsentStateUnknown, zConsentStateDeclined, zConsentStateAccepted])

export type ConsentTypes = z.infer<typeof zConsentTypes>

export type ConsentStateDeclined = z.infer<typeof zConsentStateDeclined>
export type ConsentStateUnknown = z.infer<typeof zConsentStateUnknown>
export type ConsentStateAccepted = z.infer<typeof zConsentStateAccepted>

export const isConsentStateDeclined = (inp?: unknown): inp is ConsentStateDeclined => zConsentStateDeclined.safeParse(inp).success
export const isConsentStateUnknown = (inp?: unknown): inp is ConsentStateUnknown => zConsentStateUnknown.safeParse(inp).success
export const isConsentStateAccepted = (inp?: unknown): inp is ConsentStateAccepted => zConsentStateAccepted.safeParse(inp).success
