import React from "react";
import DataTable from "../../components/DataTable";
import { useSelector } from "react-redux";
import { wagonColumn } from "../../lib/columns";

const Wagon = () => {
    const {wagons} = useSelector((state) => state.Vehicle)
    
    return (
        <div className="w-full h-full space-y-2">
            <h2 className="text-4xl font-semibold p-2 border-b-2">Manage Wagon</h2>
            <div className="w-full h-full">
                <DataTable columns={wagonColumn} data={wagons}/>
            </div>  
        </div>
    )
}

export default Wagon