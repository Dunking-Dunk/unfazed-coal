import express from 'express'

import Tracker from '../models/Tracker.js'
import Vehicle from '../models/Vehicle.js'

const router = express.Router()

router.post('/', async (req, res) => {
    const tracker = await Tracker.create(req.body) //trackerid
    console.log(req.body)
    await Vehicle.findOneAndUpdate({ trackerId: tracker.trackerId }, {
        tracker: tracker._id,
        location: {
            coordinate: tracker.location.coordinate
        },
        speed: tracker.speed,
        active: tracker.engineStatus,
        engineTemp: req.query.t ? req.query.t: req.body.t,
        co2emission: req.query.h ?req.query.h: req.body.h  ,
    })
    res.sendStatus(200)
})

export default router