import { useState, useEffect } from "react";
import BaseUrl from "./BaseUrl";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useLocation } from "react-router-dom";

function AddUser() {
    const navigate = useNavigate();
    const location = useLocation();
    console.log("location", location.state);
    const {name, email, phone, password} = location.state;

    const [edit, setEdit] = useState({
        name: name,
        email: email,
        phone: phone,
        password: password,
    });

    const onInputChange = (e) => {
        setEdit({ ...edit, [e.target.name]: e.target.value });
    };


    const submit = async (e) => {
        toast.success("Add Successful");
        e.preventDefault();
        const url = BaseUrl() + `/admin/create-user/`;
        try {
            const res = await axios.post(url, edit);
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
                <div className="w-75 mx-auto shadow p-5" style={{ backgroundColor: "#dee2e6" }}>
                    <h2 className="text-center mb-4">Add User</h2>

                    <form onSubmit={submit}>
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
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Your Password"
                                name="password"
                                value={edit.password}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>

                        <button className="btn btn-dark btn-block">ADD USER</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default AddUser;
