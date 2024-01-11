import React from "react";
import { useSelector } from "react-redux";

import { PlaceColumn } from "../../lib/columns";
import DataTable from "../../components/DataTable";
import PlaceView from "../../components/map/PlaceView";
import CardOverview from "../../components/OverviewCard";

const Mines = () => {
    const { mines } = useSelector((state) => state.Place)

    return (
        <div className="flex flex-col space-y-4 w-full h-full">

            <h1 className="text-4xl font-bold">Mines</h1>
            <div className="flex flex-row gap-x-2">
            <div className="h-[65vh] w-4/5">
                <PlaceView places={mines} />
            </div>
            <div className="flex flex-col space-y-2 w-1/5">
                <CardOverview title='Total' description={'Total number of mines'} value={mines.length}/>
            </div>
            </div>
            <h3 className="text-4xl font-bold">Manage Mines</h3>
            <DataTable columns={PlaceColumn} data={mines} />
        </div>
    )
}

export default Mines