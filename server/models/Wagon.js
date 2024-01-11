import mongoose from "mongoose";

const wagonSchema = new mongoose.Schema({
    registerNumber: {
        type: String,
        required: [true,"wagon register number required"]
    },
    capacity: {
        type: String,
        required: [true,"Wagon Capacity required"]
    },
    trackerId: {
        type: String,
        required: [true,"Tracker Id required"]
    },
    tracker: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tracker'
    },
    shipments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SubShipping'
    }]
})

const Wagon = mongoose.model('Wagon', wagonSchema)

export default Wagon