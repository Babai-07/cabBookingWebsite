import { Link } from "react-router-dom";
import Header from "../../components/admin/Header";
import { Fragment, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { apiCallFun } from "../../utils/fetchAPIs";
import { useSelector } from "react-redux";

const ShowBooking = () => {
  const { token } = useSelector((state) => state.auth);
  const { booking_id } = useSelector((state) => state.bookingId);
  // console.log(booking_id);
  const [data, setData] = useState(null);

  const getData = async () => {
    const d = await apiCallFun(
      "GET",
      `user/getbooking/${booking_id}`,
      null,
      token
    );
    if (d?.status) {
      setData(d.data);
    } else {
      toast.warn(d.msg);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="fixed-nav sticky-footer bg-dark" id="page-top">
        <Header />
        <div className="content-wrapper">
          <div className="container-fluid">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/admin">Booking</Link>
              </li>
              <li className="breadcrumb-item active">Full Information</li>
            </ol>

            <div className="card mb-3 overflow">
              <div className="card-body">
                <div className="table-responsive">
                  <table
                    className="table table-bordered"
                    id="dataTable"
                    width="100%"
                    cellSpacing="0"
                  >
                    <thead className="text-center">
                      <tr>
                        <th>Booker User Id</th>
                        <th>Model</th>
                        <th>Passengers</th>
                        <th>Type</th>
                        <th>Distance</th>
                        <th>Pickup Location</th>
                        <th>Drop Location</th>
                        <th>Fare</th>
                        <th>Driver Age</th>
                        <th>Pickup Date</th>
                        <th>Pickup Time</th>
                      </tr>
                    </thead>
                    <tbody className="text-center">
                      {data &&
                        data.map((item, i) => (
                          <Fragment key={i}>
                            <tr>
                              <td>{item?.user_id}</td>
                              <td>{item?.model}</td>
                              <td>{item?.passengers}</td>
                              <td>{item?.type}</td>
                              <td>{item?.distance}</td>
                              <td>{item?.pick_up}</td>
                              <td>{item?.drop_off}</td>
                              <td>{item?.fare}</td>
                              <td>{item?.driver_age}</td>
                              <td>{item?.pick_up_date}</td>
                              <td>{item?.pick_up_time}</td>
                            </tr>
                          </Fragment>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="card-footer small text-muted">
                Updated yesterday at 11:59 PM
              </div>
            </div>
          </div>

          <footer className="sticky-footer">
            <div className="container">
              <div className="text-center">
                <small>Copyright © Babai</small>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default ShowBooking;
