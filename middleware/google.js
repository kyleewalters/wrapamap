import request from "request";

export function formattedAddress(options) {
    return function (req, res, next) {
        request({
            uri: options.url + req.params.lat + ',' + req.params.lon + '&key=' + options.key
        }, function (err, res, body) {
            req.mapResponse = JSON
                .parse(body)
                .results[0]
                .formatted_address
            next()
        })
    }
};

export function latlon(options) {
    return function (req, res, next) {
        request({
            uri: options.url + req.params.address + '&key=' + options.key
        }, function (err, res, body) {
            req.mapResponse = JSON
                .parse(body)
                .results[0]
                .geometry
                .location
            next()
        })
    }
};