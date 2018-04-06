const key = process.env.BING_MAPS_API_KEY;

export const geocode = {
    url: "http://dev.virtualearth.net/REST/v1/Locations/",
    key: key
};

export const reverseGeocode = {
    url: "http://dev.virtualearth.net/REST/v1/Locations/US/-/-/",
    key: key
};