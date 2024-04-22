import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutHandler } from "../../redux/slices/loginSlice";
import { FaCarSide, FaUserTie } from "react-icons/fa";
// import { FaUserPen } from "react-icons/fa6";
// import { BsPeopleFill } from "react-icons/bs";
import { IoMdLogOut } from "react-icons/io";

const DriverHeader = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  console.log(token);
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

            <li className="nav-item">
              <Link className="nav-link" to="/admin/bookings">
                <i className="fa fa-fw fa-table"></i>
                <span className="nav-link-text"> Bookings </span>
              </Link>
            </li>
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
                  navigate("/driver");
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

export default DriverHeader;
