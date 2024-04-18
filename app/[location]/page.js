import LocationInfo from '@/components/LocationInfo'
import NoLocationInfo from '@/components/NoLocationInfo';
import { getResolvedLatLong } from '@/lib/location-info';
import React from 'react'

export default async function Page({params: {location}, searchParams: {latitude, longitude}}) {
  const resolved = await getResolvedLatLong(location, latitude, longitude);
    if (resolved?.lat && resolved?.lon) {
        return (
            <LocationInfo lat={resolved.lat} lon={resolved.lon} />
        )
    }
    return (
        <NoLocationInfo location={location} />
    )
}
