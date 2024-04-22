// import { useEffect, useRef, useState } from "react";
import { useEffect, useRef, useState } from "react";
import Header from "../../components/admin/Header";

import { toast } from "react-toastify";
import { apiCallFun } from "../../utils/fetchAPIs";
import { useDispatch, useSelector } from "react-redux";
import { handleFileChange, inputChange } from "../../Helper/smallFun";
import { useNavigate } from "react-router-dom";
import { driverIdDeleteHandler } from "../../redux/slices/driverIdSlice";

function UpdateDriver() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { token } = useSelector((state) => state.auth);
  const inputRef = useRef(null);
  const user_id = useSelector((state) => state.driverId.user_id);
  console.log("user id =" + user_id);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    // password: "",
  });

  const updateDriverHandler = async () => {
    const { name, email, phone } = form;
    if (!name && !email && !phone) {
      toast.warn("Make changes in atleast one field in order to update!!!!");
      return;
    }

    // Assuming you have the ID of the car you want to update stored somewhere //
    const payload = new FormData();

    form.name && payload.append("name", form.name);
    form.email && payload.append("email", form.email);
    form.phone && payload.append("phone", form.phone);
    // form.password && payload.append("password", form.password);

    const response = await apiCallFun(
      "PATCH",
      `admin/updateDriver/${user_id}`,
      payload,
      token
    );

    if (response?.status) {
      toast.success(response?.msg);
      setForm({
        name: "",
        email: "",
        phone: "",
        // password: "",
      });
      inputRef.current.value = null;
    } else {
      toast.warn(response?.msg);
    }
    dispatch(driverIdDeleteHandler());
    return navigate("/admin/drivers");
  };

  console.log(form);
//  drop down type 
const getDriverDetails = async () => {
  const res = await apiCallFun(
    "GET",
    `admin/driverList/${user_id}`,
    null,
    token
  );
  if (res?.status) {
    // toast.success(res.msg);
    setForm(res.data[0]);
    // console.log(res.data);

    // inputRef.current.value = data?.car_image;
  } else toast.warn(res.msg);
};

  useEffect(() => {
      getDriverDetails();
  }, []);

  return (
    <>
      <div className="fixed-nav sticky-footer bg-dark" id="page-top">
        <Header />
        <div className="content-wrapper">
          <div className="container-fluid">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#">Dashboard</a>
              </li>
              <li className="breadcrumb-item active">Update Vehicle</li>
            </ol>

            {form && (
              <div className="mb_100 center_btn">
                <div className="row mb-4 align-items-end">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label htmlFor="model" className="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="name"
                        value={form?.name}
                        onChange={(e) => inputChange(e, form, setForm)}
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="mb-3">
                      <label htmlFor="license_no" className="form-label">
                        Email
                      </label>
                      <input
                        type="text"
                        name="email"
                        className="form-control box_shadow"
                        id="email"
                        value={form?.email}
                        onChange={(e) => inputChange(e, form, setForm)}
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="mb-3">
                      <label htmlFor="capacity" className="form-label">
                        Phone No
                      </label>
                      <input
                        type="text"
                        name="phone"
                        className="form-control box_shadow"
                        id="capacity"
                        value={form?.phone}
                        onChange={(e) => inputChange(e, form, setForm)}
                      />
                    </div>
                  </div>
                  {/* <div className="col-md-6">
                    <div className="mb-3">
                      <label htmlFor="type" className="form-label">
                        Password
                      </label>
                      <input
                        type="text"
                        name="password"
                        className="form-control box_shadow"
                        id="password"
                        value={form?.password}
                        onChange={(e) => inputChange(e, form, setForm)}
                      />
                    </div>
                  </div> */}
                </div>

                <button
                  type="button"
                  className="btn btn-success m_Auto"
                  onClick={updateDriverHandler}
                >
                  Update Vehicle
                </button>
              </div>
            )}
          </div>

          <footer className="sticky-footer">
            <div className="container">
              <div className="text-center">
                <small>Copyright © 2024</small>
              </div>
            </div>
          </footer>

          <a className="scroll-to-top rounded" href="#page-top">
            <i className="fa fa-angle-up"></i>
          </a>
        </div>
      </div>
    </>
  );
}

export default UpdateDriver;
