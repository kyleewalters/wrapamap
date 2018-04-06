import { Router } from "express";
import {geocode, reverseGeocode} from "../providers/bing";
import {formattedAddress, latlon} from "../middleware/bing";

const router = Router();

router.get('/latlon/:address', latlon({url: reverseGeocode.url, key: reverseGeocode.key}), function (req, res) {
    res.send(req.mapResponse)
})

router.get('/address/:lat,:lon', formattedAddress({url: geocode.url, key: geocode.key}), function (req, res) {
    res.send(req.mapResponse)
})

export default router;