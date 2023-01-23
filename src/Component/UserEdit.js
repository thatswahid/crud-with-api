import { useState, useEffect } from "react";
import BaseUrl from "./BaseUrl";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useLocation } from "react-router-dom";

function UserEdit() {
  const navigate = useNavigate();
  const location = useLocation();
  console.log("location", location.state);
  const { _id, name, email, phone } = location.state;

  const [edit, setEdit] = useState({
    id: _id,
    name: name,
    email: email,
    phone: phone,
    // status: status,
    // password: password,
  });

  const onInputChange = (e) => {
    setEdit({ ...edit, [e.target.name]: e.target.value });
  };


  const submitdata = async (e) => {
    toast.success("Update Successfully");
    e.preventDefault();
    const url = BaseUrl() + `/admin/update-user/`;
    try {
      const res = await axios.put(url, edit);
      console.log("res", res);
    } catch (err) {
      console.log("err", err);
    }
    setTimeout(() => {
      navigate("/user");
    }, 1000);
  };

  return (
    <>
      <div className="container mt-5">
        <div className="w-75 mx-auto shadow p-5" style={{ backgroundColor:"#dee2e6"}}>
          <h2 className="text-center mb-4">Update User</h2>

          <form onSubmit={submitdata}>
              <ToastContainer />
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your Name"
                name="name"
                value={edit.name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your Email"
                name="email"
                value={edit.email}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your Phone Number"
                name="phone"
                value={edit.phone}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            {/* <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your Phone Number"
                name="status"
                value={edit.status}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your Phone Number"
                name="password"
                value={edit.password}
                onChange={(e) => onInputChange(e)}
              />
            </div> */}

            <button className="btn btn-dark btn-block">UPDATE USER</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default UserEdit;
