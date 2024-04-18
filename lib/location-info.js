export const getLocationData = async (lat, lon) => {
    try {
        const response = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`);
        const data = await response.json();
        return data;
    } catch (err) {
        console.error(err.message);
    }
}

export const getLocationLatLongList = async () => {
    try {
        const response = await fetch(`/api/location`);
        const data = await response.json();
        return data;
    } catch (err) {
        console.error(err.message);
    }
}

export const getLocationLatLong = async (locationName) => {
    try {
        const response = await fetch(`${process.env.API_BASE_URL}/api/location/${locationName}`);
        const data = await response.json();
        return data;
    } catch (err) {
        console.error(err.message);
    }
}

export const getResolvedLatLong = async (location, lat, lon) => {
    if (lat, lon) {
        return { lat, lon };
    }

    const locationLatLong = await getLocationLatLong(location);

    if (locationLatLong?.latitude && locationLatLong?.longitude) {
        return {
            lat: locationLatLong.latitude,
            lon: locationLatLong.longitude
        }
    }
}