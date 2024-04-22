import { useEffect, useRef, useState } from "react";
import Header from "../../components/admin/Header";
import { toast } from "react-toastify";
import { apiCallFun } from "../../utils/fetchAPIs";
import { useDispatch, useSelector } from "react-redux";
import { handleFileChange, inputChange } from "../../Helper/smallFun";
import { carIdDeleteHandler } from "../../redux/slices/carIdSlice";
import { useNavigate } from "react-router-dom";

function UpdateCars() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { token } = useSelector((state) => state.auth);
  const inputRef = useRef(null);
  const car_id = useSelector((state) => state.carId.car_id);
  console.log(car_id);
  const [form, setForm] = useState({
    model: "",
    license_no: "",
    capacity: "",
    type: "",
    color: "",
    fare: "",
    car_image: null,
  });

  const updateCarHandler = async () => {
    const { model, license_no, capacity, type, color, fare, car_image } = form;
    if (
      !model &&
      !license_no &&
      !capacity &&
      !type &&
      !color &&
      !fare &&
      !car_image
    ) {
      toast.warn("Make changes in atleast one field in order to update!!!!");
      return;
    }

    // Assuming you have the ID of the car you want to update stored somewhere //
    const payload = new FormData();

    form.car_image && payload.append("car_image", form.car_image);
    form.model && payload.append("model", form.model);
    form.license_no && payload.append("license_no", form.license_no);
    form.capacity && payload.append("capacity", form.capacity);
    form.type && payload.append("type", form.type);
    form.color && payload.append("color", form.color);
    form.fare && payload.append("fare", form.fare);

    const response = await apiCallFun(
      "PATCH",
      `admin/updateVehicle/${car_id}`,
      payload,
      token
    );

    if (response?.status) {
      toast.success(response?.msg);
      setForm({
        model: "",
        license_no: "",
        capacity: "",
        type: "",
        color: "",
        fare: "",
        car_image: null,
      });
      inputRef.current.value = null;
    } else {
      toast.warn(response?.msg);
    }
    dispatch(carIdDeleteHandler());
    return navigate("/admin/cars");
  };

  console.log(form);

  const getCarDetails = async () => {
    const res = await apiCallFun(
      "GET",
      `admin/getVehicle/${car_id}`,
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
    getCarDetails();
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
                        Model
                      </label>
                      <input
                        type="text"
                        name="model"
                        className="form-control"
                        id="model"
                        // placeholder={data[0].model}
                        value={form?.model}
                        onChange={(e) =>
                          inputChange(e, form, setForm)
                        }
                        // onChange={(e) => setForm({...form, model: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
      
                    <div className="mb-3">
                      <label htmlFor="license_no" className="form-label">
                        license_no
                      </label>
                      <input
                        type="text"
                        name="license_no"
                        className="form-control box_shadow"
                        id="license_no"
                        // placeholder={data[0].license_no}
                        value={form?.license_no}
                        onChange={(e) =>
                          inputChange(e, form, setForm)
                        }
                        // onChange={(e) => setForm({...form, license_no: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                   
                    <div className="mb-3">
                      <label htmlFor="capacity" className="form-label">
                        capacity
                      </label>
                      <input
                        type="text"
                        name="capacity"
                        className="form-control box_shadow"
                        id="capacity"
                        // placeholder={data[0].capacity}
                        value={form?.capacity}
                        onChange={(e) =>
                          inputChange(e, form, setForm)
                        }
                        // onChange={(e) => setData(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                   

                    <div className="mb-3">
                      <label htmlFor="type" className="form-label">
                        type
                      </label>
                      <input
                        type="text"
                        name="type"
                        className="form-control box_shadow"
                        id="type"
                        // placeholder={data[0].type}
                        value={form?.type}
                        onChange={(e) =>
                          inputChange(e, form, setForm)
                        }
                        // onChange={e => setData(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                  
                    <div className="mb-3">
                      <label htmlFor="color" className="form-label">
                        Color
                      </label>
                      <input
                        type="text"
                        name="color"
                        className="form-control box_shadow"
                        id="color"
                        // placeholder={data[0].color}
                        value={form?.color}
                        onChange={(e) =>
                          inputChange(e, form, setForm)
                        }
                        // onChange={e => setData(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="mb-3">
                      <label htmlFor="formFileMultiple" className="form-label">
                        Change Car Images
                      </label>
                      <input
                        className="form-control box_shadow"
                        type="file"
                        id="formFileMultiple"
                        name="car_image"
                        ref={inputRef}
                        onChange={(e) => handleFileChange(e, form, setForm)}
                        multiple
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                  

                    <div className="mb-3">
                      <label htmlFor="fare" className="form-label">
                        fare
                      </label>
                      <input
                        type="text"
                        name="fare"
                        className="form-control box_shadow"
                        id="fare"
                        // placeholder={data[0].fare}
                        value={form?.fare}
                        onChange={(e) =>
                          inputChange(e, form, setForm)
                        }
                        // onChange={e => setData(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="mb-3">
                      <div>
                        <img
                          style={{ maxWidth: "50%" }}
                          className="bg-white rounded box_shadow"
                          src={`${import.meta.env.VITE_BACKEND_FILEPATH}${
                            form.car_image
                          }`}
                          alt={`${form.car_image}`}
                        />
                      </div>
                      <label htmlFor="formFileMultiple" className="form-label">
                        Car Images
                      </label>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  className="btn btn-success m_Auto"
                  onClick={updateCarHandler}
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

export default UpdateCars;
