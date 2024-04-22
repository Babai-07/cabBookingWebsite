import { useRef, useState } from "react";
import Header from "../../components/admin/Header";
import { handleFileChange, inputChange } from "../../Helper/smallFun";
import { toast } from "react-toastify";
import { apiCallFun } from "../../utils/fetchAPIs";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function AddDriver() {
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);
  const inputRef = useRef(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  console.log(form);
  const addDriverHandler = async () => {
    const { name, email, phone, password } = form;
    if (
      name === "" ||
      email === "" ||
      phone === "" ||
      password === ""
    ) {
      return toast.warn("Please enter all required fields!");
    }
    // let data = new FormData();

    // data.append("name", name);
    // data.append("email", email);
    // data.append("phone", phone);
    // data.append("password", password);

    // console.log(data);

    const res = await apiCallFun(
      "POST",
      "admin/driverRegistration",
      form,
      token
    );
    if (res.status) {
      toast.success("Driver added successfully!");
      setForm({
        name: "",
        email: "",
        phone: "",
        password: "",
      });
      inputRef.current.value = null;
    } else {
      toast.warn(res?.msg);
    }

    // return navigate("/admin/drivers");
  };

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
              <li className="breadcrumb-item active">Add Vehicle</li>
            </ol>
            <div className="mb_100 center_btn">
              <div className="row mb-4 align-items-end">
                <div className="col-md-6">
                  <div className="form-floating  mb-3 ">
                    <input
                      type="text"
                      name="name"
                      className="form-control  box_shadow "
                      id="floatingInput"
                      placeholder=""
                      value={form?.name}
                      onChange={(e) => inputChange(e, form, setForm)}
                    />
                    <label htmlFor="floatingInput">Name</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating mb-3 w-100">
                    <input
                      type="text"
                      name="email"
                      className="form-control box_shadow "
                      id="floatingInput"
                      placeholder=""
                      value={form?.email}
                      onChange={(e) => inputChange(e, form, setForm)}
                    />
                    <label htmlFor="floatingInput">Email</label>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-floating mb-3 w-100">
                    <input
                      type="text"
                      name="phone"
                      className="form-control box_shadow"
                      id="floatingInput"
                      placeholder=""
                      value={form?.phone}
                      onChange={(e) => inputChange(e, form, setForm)}
                    />
                    <label htmlFor="floatingInput">Phone</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating mb-3 w-100">
                    <input
                      type="text"
                      name="password"
                      className="form-control box_shadow"
                      id="floatingInput"
                      placeholder=""
                      value={form?.password}
                      onChange={(e) => inputChange(e, form, setForm)}
                    />
                    <label htmlFor="floatingInput">Password</label>
                  </div>
                </div>
               
              </div>

              <button
                type="button"
                className="btn btn-primary m_Auto"
                onClick={addDriverHandler}
              >
                Add Driver
              </button>
            </div>
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

export default AddDriver;
