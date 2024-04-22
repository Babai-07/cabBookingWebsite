import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  userRole: null,
};

export const loginStage = createSlice({
  name: "loginStage",
  initialState,
  reducers: {
    loginHandler: (state, action, value) => {
      console.log(action, value);
      state.token = action.payload.token;
      state.userRole = action.payload.userRole;
    },
    logoutHandler: (state) => {
      state.token = null;
      state.userRole = null;
    },
  },
});

export const { loginHandler, logoutHandler } = loginStage.actions;

export default loginStage.reducer;

// useDispatch, useSelector



// const initialState = {
//   admintoken: null,
//   drivertoken: null,
//   usertoken: null,
// };

// export const loginStage = createSlice({
//   name: "loginStage",
//   initialState,
//   reducers: {
//     loginHandler: (state, action) => {
//       console.log(action);
//     if(action.payload === 'admin'){state.admintoken = action.payload};
//     if(action.payload === 'driver'){state.drivertoken = action.payload};
//     if(action.payload === 'user'){state.usertoken = action.payload}; 
//     },
//     logoutHandler: (state) => {
//       if(action.payload === 'admin'){state.admintoken = null};
//       if(action.payload === 'driver'){state.admintoken = null};
//       if(action.payload === 'user'){state.admintoken = null};
//     },
//   },
// });