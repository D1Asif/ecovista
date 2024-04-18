import NoLocationInfo from '@/components/NoLocationInfo';
import TemperatureComponent from '@/components/TemperatureComponent'
import { getResolvedLatLong } from '@/lib/location-info';
import React from 'react'

export default async function TemperaturePage({ params: { location }, searchParams: { latitude, longitude } }) {
    const resolved = await getResolvedLatLong(location, latitude, longitude);
    if (resolved?.lat && resolved?.lon) {
        return (
            <TemperatureComponent lat={resolved.lat} lon={resolved.lon} />
        )
    }
    return (
        <NoLocationInfo location={location} />
    )
}
