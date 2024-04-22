import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutHandler } from "../../redux/slices/loginSlice";
import { FaCarSide, FaUserTie } from "react-icons/fa";
import { FaUserPen } from "react-icons/fa6";
import { BsPeopleFill } from "react-icons/bs";
import { IoMdLogOut } from "react-icons/io";
import { useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const [isBooking, setIsBooking] = useState(false);
  console.log(token);

  const handleClick = () => {
    setIsBooking(!isBooking);
    // setIsBooking(true);
  };
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"
        id="mainNav"
      >
        <Link className="navbar-brand" to="/admin">
          DASHBOARD
        </Link>
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav navbar-sidenav" id="exampleAccordion">
            <li className="nav-item">
              <Link className="nav-link" to="/admin">
                <i className="fa fa-fw fa-dashboard"></i>
                <span className="nav-link-text">Dashboard</span>
              </Link>
            </li>

            <li className="nav-item" onClick={handleClick}>
              <Link className="nav-link" to="">
                <i className="fa fa-fw fa-table"></i>
                <span className="nav-link-text"> Bookings </span>
              </Link>
            </li>

            {isBooking && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/admin/bookings?status=Completed">
                    {/* <i className=""></i> */}
                    <span className="nav-link-text ms-4">
                      {" "}
                      Previous Bookings{" "}
                    </span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/admin/upcomingbookings?status=Upcoming">
                    {/* <i className="FaCarSide">
                  <FaCarSide />
                </i> */}
                    <span className="nav-link-text ms-4">
                      {" "}
                      Upcoming Booking
                    </span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/admin/cancelledbookings?status=Cancelled">
                    {/* <i className="FaCarSide">
                  <FaCarSide />
                </i> */}
                    <span className="nav-link-text ms-4">
                      {" "}
                      Cancelled Booking
                    </span>
                  </Link>
                </li>
              </>
            )}
            <li className="nav-item">
              <Link className="nav-link" to="/admin/cars">
                <i className="FaCarSide">
                  <FaCarSide />
                </i>
                <span className="nav-link-text"> Cars</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin/drivers">
                <i className="FaUserTie">
                  <FaUserTie />
                </i>
                <span className="nav-link-text"> Drivers </span>
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/admin/">
                <i className="BsPeopleFill">
                  <BsPeopleFill />
                </i>
                <span className="nav-link-text"> Users </span>
              </Link>
            </li> */}
            <li className="nav-item">
              <button
                className="nav-link"
                onClick={() => {
                  dispatch(logoutHandler());
                  navigate("/admin");
                }}
              >
                <i className="IoMdLogOut">
                  <IoMdLogOut />
                </i>
                <span className="nav-link-text"> Logout</span>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
