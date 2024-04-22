import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Login } from "./pages/admin/Login";
import AddCar from "./pages/admin/AddCar";
import Dashboard from "./pages/admin/Dashboard";
import { useSelector } from "react-redux";
import { CarList } from "./pages/admin/CarLists";
import AddDriver from "./pages/admin/AddDriver";
import UpdateCars from "./pages/admin/UpdateCars";
import Drivers from "./pages/admin/Drivers";
import UpdateDriver from "./pages/admin/UpdateDriver";
import Booking from "./pages/admin/Booking";
import ShowBooking from "./pages/admin/ShowBooking";

// Driver
import DriverLogin from "./pages/driver/Login";
import Dashboard_driver from "./pages/driver/Dashboard_driver";
import Upcommingbooking from "./pages/admin/Upcommingbooking";
import Cancelled from "./pages/admin/Cancelled";
import { BookingUser } from "./pages/user/BookingUser";

function App() {
  const { token, userRole } = useSelector((state) => state.auth);

  console.log("token: " + token);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <>
            {token && userRole === "admin" ? (
              <>
                <Route path="/admin" element={<Dashboard />} />
                <Route path="/admin/bookings" element={<Booking />} />
                <Route
                  path="/admin/upcomingbookings"
                  element={<Upcommingbooking />}
                />
                <Route
                  path="/admin/cancelledbookings"
                  element={<Cancelled />}
                />
                <Route
                  path="/admin/getbookings/:id"
                  element={<ShowBooking />}
                />
                <Route path="/admin/cars" element={<CarList />} />
                <Route path="/admin/cars/add" element={<AddCar />} />
                <Route path="/admin/cars/update/:id" element={<UpdateCars />} />
                <Route path="/admin/drivers" element={<Drivers />} />
                <Route path="/admin/drivers/add" element={<AddDriver />} />
                <Route
                  path="/admin/drivers/update/:id"
                  element={<UpdateDriver />}
                />
                {/* user  */}
                <Route path="/user/bookings" element={<BookingUser />} />

                {/* <Route path="/driver" element={<Dashboard_driver />} /> */}
              </>
            ) : (
              <>
                <Route path="/admin" element={<Login />} />
                {/* <Route path="/driver" element={<DriverLogin />} /> */}
              </>
            )}

            {token && userRole === "driver" ? (
              <>
                <Route path="/driver" element={<Dashboard_driver />} />
              </>
            ) : (
              <>
                {/* <Route path="/admin" element={<Login />} /> */}
                <Route path="/driver" element={<DriverLogin />} />
              </>
            )}
          </>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
