import { useContext, useMemo } from 'react'

import { normalizeTime } from 'serenity-shared'

import { ConfigContext } from '@/components/ConfigProvider/ConfigContext'

export const useQuoteUpdateInterval = (): number => {
    const configContext = useContext(ConfigContext)

    const quoteUpdateInterval = useMemo(() => normalizeTime(configContext.quoteUpdateInterval ?? 900), [configContext])

    return quoteUpdateInterval
}
