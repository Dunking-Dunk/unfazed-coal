import express from 'express'
import Wagon from '../models/Wagon.js'
import { authenticatedUser } from '../middleware/Auth.js'

const router = express.Router()

router.post('/', authenticatedUser, async(req, res) => {
    const wagon = await Wagon.create(req.body)

    res.status(200).json({
        success: true,
        wagon
    })
})

router.get('/', authenticatedUser, async(req, res) => {
  const wagons = await Wagon.find({})
   
    res.status(200).json({
        success: true,
        wagons
    })
})


router.get('/:id', authenticatedUser, async (req, res) => {
    const { id } = req.params

    const wagon = await Wagon.findById(id).populate('shipments').populate({
        path: 'shipments', populate: {
            path: 'vehicles',
            model: 'Vehicle'
        }
    }).populate({
        path: 'shipments'
        , populate: {
        path: 'origin.place',
        model: 'Place'
        }
    }).populate({
        path: 'shipments'
        , populate: {
        path: 'destination.place',
        model: 'Place'
    }})
    
    res.status(200).json({
        success: true,
        wagon
    })
})

router.delete('/:id', authenticatedUser, async (req, res) => {
    const { id } = req.params

     await Wagon.findByIdAndDelete(id)
    
    res.status(200).json({
        success: true,
        id
    })
})


export default router