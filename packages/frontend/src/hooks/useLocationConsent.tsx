import { useEffect } from 'react'

import { isConsentStateAccepted, zConsentStateAccepted, zConsentStateDeclined, zConsentStateUnknown, type ConsentTypes } from 'serenity-shared'

import { useStateMachine } from './useStateMachine'

export const useLocationConsent = (): [ConsentTypes, (val: ConsentTypes) => void] => {
    const [locationConsent, setLocationConsent] = useStateMachine<ConsentTypes>('locationConsent', zConsentStateUnknown.value)

    useEffect(() => {
        if (!isConsentStateAccepted(locationConsent) && 'permissions' in navigator) {
            navigator.permissions
                .query({ name: 'geolocation' })
                .then((result) => {
                    switch (result.state) {
                        case 'denied':
                            setLocationConsent(zConsentStateDeclined.value)
                            break
                        case 'granted':
                            setLocationConsent(zConsentStateAccepted.value)
                            break
                        default:
                            setLocationConsent(zConsentStateUnknown.value)
                            break
                    }
                })
                .catch((e: unknown) => {
                    console.error('Error updating the permissions', e)
                })
        }
    }, [])

    return [locationConsent, setLocationConsent]
}
