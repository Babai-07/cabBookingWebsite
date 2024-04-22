const express = require("express");
const route = express.Router();
const {
  driverRegistration,
  getAllDrivers,
  updateDriver,
  deleteDriver,
  getAllDriversById,
} = require("../../controller/admin/driverRegistration");
const { upload } = require("../../controller/admin/vehicleConfigController");
const { isToken, validateToken } = require("../../controller/common/auth");
const {
  adminValidateToken,
} = require("../../controller/admin/adminValidateToken");

// route.get("/driverList", isToken, validateToken, getAllDrivers);
// route.post("/driverRegistration", isToken, validateToken, driverRegistration);
// route.patch("/updateDriver/:id",isToken,validateToken,updateDriver);
// route.delete("/updateDriver/:id",isToken,validateToken,deleteDriver);

route.get("/driverList", isToken, adminValidateToken, getAllDrivers);

route.get("/driverList/:id", isToken, adminValidateToken, getAllDriversById);

route.post(
  "/driverRegistration",
  isToken,
  adminValidateToken,
  upload.array("car_image", 2),
  driverRegistration
);
route.patch("/updateDriver/:id", isToken, adminValidateToken, updateDriver);
route.delete("/deleteDriver/:id", isToken, adminValidateToken, deleteDriver);
module.exports = route;
