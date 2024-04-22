import { createSlice } from "@reduxjs/toolkit";

export const driverId = createSlice({
    name: "driverId",
    initialState:{
        user_id:null,

    },
    reducers:{
        driverIdSetHandler: (state, action) => {
            state.user_id=action.payload;
        }, 
        driverIdDeleteHandler: (state) => {
            state.user_id = null;
        }
    }
});

export const { driverIdSetHandler, driverIdDeleteHandler } = driverId.actions;

export default driverId.reducer;