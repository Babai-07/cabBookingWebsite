import { Link, useLocation, useNavigate } from "react-router-dom";
import Header from "../../components/admin/Header";
import { Fragment, useEffect, useState } from "react";
import { apiCallFun } from "../../utils/fetchAPIs";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { FaEye } from "react-icons/fa";
import { bookingIdSetHandler } from "../../redux/slices/bookingIdSlice";
//previous
const Booking = () => {
  const {search} = useLocation();
  console.log(search);
  const { token } = useSelector((state) => state.auth);
  const [data, setData] = useState(null);
  const [queryStr, setQueryStr] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getData = async () => {
    const d = await apiCallFun("GET", "user/getFilterBookingList" + search, null, token);
    if (d?.status) {
      setData(d.data);
    } else {
      toast.warn(d.msg);
    }
    setQueryStr(search);
  };
console.log(queryStr);
  const handleShow = (item) =>{
    dispatch(bookingIdSetHandler(item.booking_id));
    navigate(`/admin/getbookings/${item.booking_id}`)
  };

  useEffect(() => {
    getData();
  }, [queryStr]);

  return (
    <div className="fixed-nav sticky-footer bg-dark" id="page-top">
      <Header />
      <div className="content-wrapper">
        <div className="container-fluid">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/admin">Dashboard</Link>
            </li>
            <li className="breadcrumb-item active">Booking List</li>
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
                      <th>Action</th>
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
                            <td>
                              <button
                                onClick={() => handleShow(item)}
                                type="button"
                                className="btn btn-success"
                              >
                                <i className="faEye">
                                  {" "}
                                  <FaEye />{" "}
                                </i>
                              </button>
                              {/* <button
                                type="button"
                                className="btn btn-success me-2"
                              >
                               
                              </button> */}
                              {/* <button
                                type="button"
                                className="btn btn-success me-2"
                              >
                                <i className="fa fa-pencil"></i>
                              </button> */}
                              {/* <Link to={/admin/cars/update/${item.car_id}} className="btn btn-success">
                              <i className="fa fa-pencil" ></i>
                            </Link> */}
                            </td>
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
  );
};

export default Booking;
