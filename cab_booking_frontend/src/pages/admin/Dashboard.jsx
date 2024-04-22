import { Link } from "react-router-dom";
import { FaCarSide, FaUserTie } from "react-icons/fa";

import { BsFillGrid3X3GapFill, BsFillBellFill } from "react-icons/bs";

import Header from "../../components/admin/Header";
import PieCharts from "../../components/admin/PieCharts";
import Bar_chart from "../../components/admin/Bar_chart";

function Dashboard() {
 
  return (
    <>
      <div className="fixed-nav sticky-footer bg-dark" id="page-top">
        <Header />
        <div className="content-wrapper">
          <div className="container-fluid">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/admin">Dashboard</Link>
              </li>
              <li className="breadcrumb-item active">Admin panel</li>
            </ol>
            <main className="main-container">
              <div className="main-cards">
                <div className="cardx">
                  <div className="card-inner">
                    <h3>BOOKINGS</h3>
                    <BsFillGrid3X3GapFill className="card_icon" />
                  </div>
                  <h1>300</h1>
                </div>
                <div className="cardx">
                  <div className="card-inner">
                    <h3>CARS</h3>
                    <FaCarSide className="card_icon" />
                  </div>
                  <h1>12</h1>
                </div>
                <div className="cardx">
                  <div className="card-inner">
                    <h3>DRIVERS</h3>
                    <FaUserTie className="card_icon" />
                  </div>
                  <h1>33</h1>
                </div>
                <div className="cardx">
                  <div className="card-inner">
                    <h3>ALERTS</h3>
                    <BsFillBellFill className="card_icon" />
                  </div>
                  <h1>42</h1>
                </div>
              </div>
              {/* ======== recharts ========= */}
              <div className="charts">
                <PieCharts />
                <Bar_chart />
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
