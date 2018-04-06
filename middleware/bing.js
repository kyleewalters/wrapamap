import request from "request";
import { toCoordinateObject } from "../utils/coordinates"

export function formattedAddress(options) {
    return function (req, res, next) {
        request({
            uri: options.url + req.params.lat + ',' + req.params.lon + '?o=json&key=' + options.key
        }, function (err, res, body) {
            req.mapResponse = JSON
                .parse(body)
                .resourceSets[0]
                .resources[0]
                .name
            next()
        })
    }
};

export function latlon(options) {
    return function (req, res, next) {
        request({
            uri: options.url + req.params.address + '?o=json&key=' + options.key
        }, function (err, res, body) {
            let coords = JSON
            .parse(body)
            .resourceSets[0]
            .resources[0]
            .point
            .coordinates;

            req.mapResponse = toCoordinateObject(coords)
            next()
        })
    }
};