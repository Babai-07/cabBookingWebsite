import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/admin/Header";
import { Fragment, useEffect, useRef, useState } from "react";
import { apiCallFun } from "../../utils/fetchAPIs";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { carIdSetHandler } from "../../redux/slices/carIdSlice";

export const CarList = () => {
  const { searchValue } = useRef(null);
  const { token } = useSelector((state) => state.auth);
  const [data, setData] = useState(null);
  const [inputText, setInputText] = useState("");
  const [filterData, setFilterData] = useState(null);

  const navigate = useNavigate();

  const [isDelete, setIsDelete] = useState(false);
  // const [isUpdate, setIsUpdate] = useState(false);
  const dispatch = useDispatch();

  const getData = async () => {
    const d = await apiCallFun("GET", "admin/getAllVehicle", null, token);
    if (d?.status) {
      setData(d.data);
      setFilterData(d?.data);
    } else {
      toast.warn(d.msg);
    }
  };

  const handleDelete = async (item) => {
    // const res = await apiCallFun("DELETE", admin/deleteVehicle/${item.car_id}, null, token);
    const res = await apiCallFun(
      "DELETE",
      "admin/deleteVehicle/" + item.car_id,
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
    dispatch(carIdSetHandler(item.car_id));
    navigate(`/admin/cars/update/${item.car_id}`);
  };

  const handleInput = async (e) => {
     setInputText(e.target.value);
    console.log(inputText);
    const searchData = data?.filter((item) => {
      const { model, license_no, capacity, type, color, fare } = item;
      return (
        model.toLowerCase().startsWith(inputText?.toLowerCase())  ||
        fare.toString().toLowerCase().includes(inputText?.toLowerCase())  ||
        license_no.toLowerCase() === inputText?.toLowerCase() ||
        capacity.toString().toLowerCase() === inputText?.toLowerCase() ||
        type.toLowerCase() === inputText?.toLowerCase() ||
        color.toLowerCase() === inputText?.toLowerCase()
      );
    });
    console.log(searchData);
    setFilterData(searchData);
    if (!inputText) {
      getData();
    }
  };
  // const handleSearch = () => {
  //   const searchData = data?.filter((item) => {
  //     const { model, license_no, capacity, type, color, fare } = item;
  //     return (
  //       model.toLowerCase() === inputText?.toLowerCase() ||
  //       fare.toString().toLowerCase() === inputText?.toLowerCase() ||
  //       license_no.toLowerCase() === inputText?.toLowerCase() ||
  //       capacity.toString().toLowerCase() === inputText?.toLowerCase() ||
  //       type.toLowerCase() === inputText?.toLowerCase() ||
  //       color.toLowerCase() === inputText?.toLowerCase()
  //     );
  //   });
  //   setFilterData(searchData);
  //   if (!inputText) {
  //     getData();
  //   }
  // };
  useEffect(() => {
    getData();
  }, [isDelete]);

  return (
    <div className="fixed-nav sticky-footer bg-dark" id="page-top">
      <Header />
      <div className="content-wrapper">
        <div className="container-fluid">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/admin">Dashboard</Link>
            </li>
            <li className="breadcrumb-item active">CarList</li>
          </ol>

          <div className="card mb-3 overflow">
            <div className="card-header">
              <Link to={"/admin/cars/add"} className="btn btn-primary">
                Add New &nbsp; <i className="fa fa-plus" aria-hidden="true"></i>
              </Link>
              <form className="form-inline my-2 my-lg-0 mr-lg-2">
                <div className="input-group">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Search for..."
                    // onChange={(e) => setInputText(e.target.value)}
                    onChange={handleInput}
                    ref={searchValue}
                  />
                  <span className="input-group-append">
                    <button
                      className="btn btn-primary"
                      type="button"
                      // onClick={handleSearch}
                    >
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
                      <th>Model</th>
                      <th>Image</th>
                      <th>Type</th>
                      <th>Capacity</th>
                      <th>Color</th>
                      <th>Fare</th>
                      <th>License No.</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tfoot>
                    <tr>
                      <th>Model</th>
                      <th>Image</th>
                      <th>Type</th>
                      <th>Capacity</th>
                      <th>Color</th>
                      <th>Fare</th>
                      <th>License No.</th>
                      <th>Action</th>
                    </tr>
                  </tfoot>
                  <tbody className="text-center">
                    {filterData &&
                      filterData.map((item, i) => (
                        <Fragment key={i}>
                          <tr>
                            <td>{item?.model}</td>
                            <td className="max_200">
                              <img
                                src={`${import.meta.env.VITE_BACKEND_FILEPATH}${
                                  item?.car_image
                                }`}
                                alt={`${item?.car_image}`}
                                className="w-100"
                              />
                            </td>
                            <td>{item?.type}</td>
                            <td>{item?.capacity}</td>
                            <td>{item?.color}</td>
                            <td>{item?.fare}</td>
                            <td>{item?.license_no}</td>
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
  );
};
