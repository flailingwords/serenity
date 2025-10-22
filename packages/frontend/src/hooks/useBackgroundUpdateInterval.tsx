import { useContext, useMemo } from 'react'

import { normalizeTime } from 'serenity-shared'

import { ConfigContext } from '@/components/ConfigProvider/ConfigContext'

export const useBackgroundUpdateInterval = (): number => {
    const configContext = useContext(ConfigContext)

    const backgroundUpdateInterval = useMemo(
        () => normalizeTime(configContext.backgroundUpdateInterval != null ? Number(configContext.backgroundUpdateInterval) : 900),
        [configContext]
    )

    console.debug(`backgroundUpdateInterval: ${backgroundUpdateInterval}`)

    return backgroundUpdateInterval
}
