import { createSlice } from "@reduxjs/toolkit";

export const bookingId = createSlice({
    name: "bookingId",
    initialState:{
        booking_id:null,  
    },
    reducers:{
        bookingIdSetHandler: (state, action) => {
            state.booking_id=action.payload;
        },
        bookingIdDeleteHandler: (state) => {
            state.booking_id = null;
        }
    }
});

export const {bookingIdSetHandler,  bookingIdDeleteHandler} = bookingId.actions;

export default bookingId.reducer;