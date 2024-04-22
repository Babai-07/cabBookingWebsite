const express = require("express");
const route = express.Router();
const {
  fareCalculate,
  bookingDetails,
  getBookingDetails,
  getBookingDetailsById,
  getFilterBookingList,
  // getPreviousBookingList,
  // getUpcomingBookingList,
  // getCancelledBookingList,
  // createOrder,
  // callBackUrl,
} = require("../../controller/user/booking");
const { isToken, validateToken } = require("../../controller/common/auth");

route.post("/fareCalculate", isToken, validateToken, fareCalculate);
// route.post("/createOrder", isToken, validateToken, createOrder);
// route.post("/callBackUrl", isToken, validateToken, callBackUrl);
route.post("/booking", isToken, validateToken, bookingDetails);
route.get("/getbooking", isToken, validateToken, getBookingDetails);
route.get("/getbooking/:id", isToken, validateToken, getBookingDetailsById );

// route.get("/getPreviousbooking", isToken, validateToken, getPreviousBookingList);
// route.get("/getUpcomingbooking", isToken, validateToken, getUpcomingBookingList);
// route.get("/getCancelledbooking", isToken, validateToken, getCancelledBookingList);
route.get("/getFilterBookingList", isToken, validateToken, getFilterBookingList);



module.exports = route;
