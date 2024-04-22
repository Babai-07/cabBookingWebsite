import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/admin/Header";
import { Fragment, useEffect, useState } from "react";
import { apiCallFun } from "../../utils/fetchAPIs";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { driverIdSetHandler } from "../../redux/slices/driverIdSlice";

function Drivers() {
  const { token } = useSelector((state) => state.auth);
  const [data, setData] = useState(null);

  const navigate = useNavigate();

  const [isDelete, setIsDelete] = useState(false);
  const dispatch = useDispatch();
  const getData = async () => {
    const d = await apiCallFun("GET", "admin/driverList", null, token);
    if (d?.status) {
      setData(d.data);
    } else {
      toast.warn(d.msg);
    }
  };
  
  const handleDelete = async (item) => {
    const res = await apiCallFun(
      "DELETE",
      "admin/deleteDriver/" + item.user_id,
      null,
      token
    );
    setIsDelete(!isDelete);
    if (res?.status) {
      toast.success(res.msg);
    } else {
      toast.warn(res.msg);
    }
  };

  const handleEdit = (item) => {
    dispatch(driverIdSetHandler(item.user_id));
    navigate(`/admin/drivers/update/${item.user_id}`);
  };

  useEffect(() => {
    getData();
  }, [isDelete]);

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
              <li className="breadcrumb-item active">Drivers Info</li>
            </ol>

            <div className="card mb-3 overflow">
              <div className="card-header">
                <Link to={"/admin/drivers/add"} className="btn btn-primary">
                  Add Driver &nbsp;{" "}
                  <i className="fa fa-plus" aria-hidden="true"></i>
                </Link>
                <form className="form-inline my-2 my-lg-0 mr-lg-2">
                  <div className="input-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Search for..."
                    />
                    <span className="input-group-append">
                      <button className="btn btn-primary" type="button">
                        <i className="fa fa-search"></i>
                      </button>
                    </span>
                  </div>
                </form>
              </div>
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
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        {/* <th>Password</th> */}
                      </tr>
                    </thead>
                    <tbody className="text-center">
                      {data &&
                        data.map((item, i) => (
                          <Fragment key={i}>
                            <tr>
                              <td>{item?.name}</td>
                              <td>{item?.email}</td>
                              <td>{item?.phone}</td>
                              {/* <td>{item?.password}</td> */}
                              <td>
                                {/* <button
                                type="button"
                                className="btn btn-success me-2"
                              >
                                <i className="fa fa-pencil"></i>
                              </button>
                              <button
                                type="button"
                                className="btn btn-success me-2"
                              >
                                <i className="fa fa-pencil"></i>
                              </button> */}
                                {/* <Link to={/admin/cars/update/${item.car_id}} className="btn btn-success">
                              <i className="fa fa-pencil" ></i>
                              </Link> */}

                                <button
                                  onClick={() => handleEdit(item)}
                                  type="button"
                                  className="btn btn-success"
                                >
                                  <i className="fa fa-pencil"></i>
                                </button>
                                <br />
                                <br />
                                <button
                                  onClick={() => handleDelete(item)}
                                  type="button"
                                  className="btn btn-danger"
                                >
                                  <i className="fa fa-trash"></i>
                                </button>
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
    </>
  );
}

export default Drivers;
