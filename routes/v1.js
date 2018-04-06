import { Router } from "express";
import {geocode, reverseGeocode} from "../providers/google";
import {formattedAddress, latlon} from "../middleware/google";

const router = Router();

router.get('/latlon/:address', latlon({url: geocode.url, key: geocode.key}), function (req, res) {
    res.send(req.mapResponse)
})

router.get('/address/:lat,:lon', formattedAddress({url: reverseGeocode.url, key: reverseGeocode.key}), function (req, res) {
    res.send(req.mapResponse)
})

export default router;