import React, { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { getWagon } from "../../store/reducer/VehicleReducer";
import { useDispatch, useSelector } from "react-redux";
import VehicleView from '../../components/map/VehicleView'
import socket from '../../api/socket'
import CardoverView from '@/components/OverviewCard'
import Table from '@/components/DataTable'
import { vehicleShippingColumn } from "../../lib/columns";

const ViewWagon = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const {wagon} = useSelector((state) => state.Vehicle)
    const [tracker,setTracker] = useState()

    useEffect(() => {
        dispatch(getWagon(id)).then((state) => {
                if(!state.error) {
                    socket.getVehicleLocation(state.payload.wagon.shipments[0].vehicles[0]._id,setTracker)
                }
        })
    }, [])
 
    return (
        <div className="w-full h-full space-y-4">
            <h1 className="text-3xl my-2 font-semibold">Wagon</h1>
            <div className="w-full h-[70vh]">
            {wagon && <VehicleView vehicle={wagon.shipments[0].vehicles[0]} tracker={tracker}/>}
            </div>
            <div className="flex flex-row space-x-2">
                <CardoverView title='Capacity' description='Wagon holding capacity' value={wagon?.capacity}/>
                <CardoverView title='Tracker Id' description='Wagon Tracker id related to IOT' value={wagon?.trackerId}/>
            </div>
            <div className="space-y-2">
                <h4>Shipments</h4>
                {wagon && (
                    <Table columns={vehicleShippingColumn} data={wagon?.shipments}/>
                )}              
            </div>
        </div>
    )
}

export default ViewWagon