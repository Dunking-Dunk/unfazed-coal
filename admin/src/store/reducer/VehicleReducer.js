import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import api from '../../api/axios'

export const getAllVehicle = createAsyncThunk('vehicle/getAllVehicle', async (body, thunkAPI) => {
    try {
        const vehicles = await api.get('/vehicles')
        const data = vehicles.data;
        return data;
    } catch (err) {
        if (err) {
            return thunkAPI.rejectWithValue({error: err.response.data})
        }
    }
})

export const getVehicle = createAsyncThunk('vehicle/getVehicle', async (body, thunkAPI) => {
    try {
        const vehicle = await api.get(`/vehicles/${body}`)
        const data = vehicle.data;
        return data;
    } catch (err) {
        if (err) {
            return thunkAPI.rejectWithValue({error: err.response.data})
        }
    }
})

export const createVehicle = createAsyncThunk('vehicle/createVehicle', async (body, thunkAPI) => {
    try {
        const vehicle = await api.post('/vehicles', body)
        const data = vehicle.data;
        return data;
    } catch (err) {
        if (err) {
            return thunkAPI.rejectWithValue({error: err.response.data})
        }
    }
})

export const updateVehicle = createAsyncThunk('vehicle/updateVehicle', async (body, thunkAPI) => {
    try {
    
        const vehicle = await api.put(`/vehicles/${body.id}`, body.data)
        const data = vehicle.data;
        return data;
    } catch (err) {
        if (err) {
            return thunkAPI.rejectWithValue({error: err.response.data})
        }
    }
})

export const deleteVehicle = createAsyncThunk('vehicle/deleteVehicle', async (body, thunkAPI) => {
    try {
        await api.delete(`/vehicles/${body}`)
        return body;
    } catch (err) {
        if (err) {
            return thunkAPI.rejectWithValue({error: err.response.data})
        }
    }
})

export const getVehicleShipment =  createAsyncThunk('vehicle/getVehicleShipment', async (body, thunkAPI) => {
    try {
        const shipments = await api.get(`/shipments/vehicle/${body}`)
        const data = shipments.data
        return data;
    } catch (err) {
        if (err) {
            return thunkAPI.rejectWithValue({error: err.response.data})
        }
    }
})

export const getVehiclesStats = createAsyncThunk('vehicle/getVehiclesStats', async (body, thunkAPI) => {
    try {
        const stats = await api.get(`/vehicles/stats`)
        const data = stats.data
        return data;
    } catch (err) {
        if (err) {
            return thunkAPI.rejectWithValue({error: err.response.data})
        }
    }
})

export const getAllWagons = createAsyncThunk('vehicle/getAllWagons', async (body, thunkAPI) => {
    try {
        const wagons = await api.get(`/wagons`)
        const data = wagons.data
        return data;
    } catch (err) {
        if (err) {
            return thunkAPI.rejectWithValue({error: err.response.data})
        }
    }
})

export const getWagon = createAsyncThunk('vehicle/getWagon', async (body, thunkAPI) => {
    try {
        const wagon = await api.get(`/wagons/${body}`)
        const data = wagon.data
        return data;
    } catch (err) {
        if (err) {
            return thunkAPI.rejectWithValue({error: err.response.data})
        }
    }
})

export const createWagon = createAsyncThunk('vehicle/createWagon', async (body, thunkAPI) => {
    try {
        const wagon = await api.post(`/wagons`,body)
        const data = wagon.data
        return data;
    } catch (err) {
        if (err) {
            return thunkAPI.rejectWithValue({error: err.response.data})
        }
    }
})

const VehicleReducer = createSlice({
    name: 'vehicle',
    initialState: {
        vehicles: [],
        trucks: [],
        trains: [], 
        ships: [],
wagons: [],
        wagon: null,
        vehicle: null,
        loading: false,
        stats: null
    },
    reducers: {
        setTracker: (state,action) => {
            state.vehicles[state.vehicles.findIndex((track) => track._id === action.payload._id)] = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getAllVehicle.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(getAllVehicle.fulfilled, (state, action) => {
            state.vehicles = action.payload.vehicles
            state.trains = action.payload.vehicles.filter((vehicle) => vehicle.type === 'train')
            state.trucks = action.payload.vehicles.filter((vehicle) => vehicle.type === 'truck')
            state.ships = action.payload.vehicles.filter((vehicle) => vehicle.type === 'ship')
            state.loading = false
        })
        builder.addCase(getAllVehicle.rejected, (state, action) => {
            state.loading = false
        })
        builder.addCase(getVehicle.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(getVehicle.fulfilled, (state, action) => {
            state.vehicle = action.payload.vehicle
            state.loading = false
        })
        builder.addCase(getVehicle.rejected, (state, action) => {
            state.loading = false
        })
        builder.addCase(getVehicleShipment.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(getVehicleShipment.fulfilled, (state, action) => {
            state.vehicle = {...state.vehicle, shipments: action.payload.shipments}
            state.loading = false
        })
        builder.addCase(getVehicleShipment.rejected, (state, action) => {
            state.loading = false
        })
        
        builder.addCase(createVehicle.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(createVehicle.fulfilled, (state, action) => {
            state.vehicles.push(action.payload.vehicle)
            state[`${action.payload.vehicle.type}s`].push( action.payload.vehicle)
            state.loading = false
        })
        builder.addCase(createVehicle.rejected, (state, action) => {
            state.loading = false
        })
        builder.addCase(deleteVehicle.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(deleteVehicle.fulfilled, (state, action) => {
            state.vehicles = state.vehicles.filter((vehicle) => vehicle._id !== action.payload)
            state.trucks = state.trucks.filter((vehicle) => vehicle._id !== action.payload)
            state.ships = state.ships.filter((vehicle) => vehicle._id !== action.payload)
            state.trains = state.trains.filter((vehicle) => vehicle._id !== action.payload)
            state.loading = false
        })
        builder.addCase(deleteVehicle.rejected, (state, action) => {
            state.loading = false
        })
        builder.addCase(updateVehicle.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(updateVehicle.fulfilled, (state, action) => {
            state.vehicles[state.vehicles.findIndex((vehicle) => vehicle._id === action.payload.vehicle._id)] = action.payload.vehicle
            state[`${action.payload.vehicle.type}s`][state[`${action.payload.vehicle.type}s`].findIndex((vehicle) => vehicle._id === action.payload.vehicle._id )] = action.payload.vehicle
            state.loading = false
        })
        builder.addCase(updateVehicle.rejected, (state, action) => {
            state.loading = false
        })
        builder.addCase(getVehiclesStats.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(getVehiclesStats.fulfilled, (state, action) => {
            state.stats = action.payload
            state.loading = false
        })
        builder.addCase(getVehiclesStats.rejected, (state, action) => {
            state.loading = false
        })
builder.addCase(getWagon.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(getWagon.fulfilled, (state, action) => {
            state.wagon = action.payload.wagon
            state.loading = false
        })
        builder.addCase(getWagon.rejected, (state, action) => {
            state.loading = false
        })
        builder.addCase(getAllWagons.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(getAllWagons.fulfilled, (state, action) => {
            state.wagons = action.payload.wagons
            state.loading = false
        })
        builder.addCase(getAllWagons.rejected, (state, action) => {
            state.loading = false
        })
        builder.addCase(createWagon.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(createWagon.fulfilled, (state, action) => {
            state.wagons.push(action.payload.wagon)
            state.loading = false
        })
        builder.addCase(createWagon.rejected, (state, action) => {
            state.loading = false
        })
    }
})

export const { setTracker } = VehicleReducer.actions

export default VehicleReducer.reducer