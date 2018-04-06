const geocodeKey = process.env.GOOGLE_MAPS_API_KEY;

export const reverseGeocode = {
    url: "https://maps.googleapis.com/maps/api/geocode/json?latlng=",
    key: geocodeKey
};
export const geocode = {
    url: "https://maps.googleapis.com/maps/api/geocode/json?address=",
    key: geocodeKey
};