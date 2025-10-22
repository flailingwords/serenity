import { type GeolocatedResult, useGeolocated } from 'react-geolocated'
import { isConsentStateAccepted } from 'serenity-shared'

import { useLocationConsent } from './useLocationConsent'

export const useGeoLocation = (): GeolocatedResult => {
    const [locationConsent] = useLocationConsent()

    const geoLocated = useGeolocated({
        positionOptions: {
            enableHighAccuracy: false
        },
        userDecisionTimeout: 5000,
        suppressLocationOnMount: !isConsentStateAccepted(locationConsent)
    })

    return geoLocated
}
