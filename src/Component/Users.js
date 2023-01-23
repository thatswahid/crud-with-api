import axios from "axios";
import BaseUrl from "./BaseUrl";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Users() {
  const [user, setUser] = useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    const url = BaseUrl() + "/admin/users";
    try {
      const res = await axios.get(url);
      console.log("res", res);
      setUser(res.data.list);
    } catch (err) {
      console.log("err", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(user);

  
  return (
    <>

      <div className="container">
      <button
        class="btn btn-outline-primary mr-2 w-100 mt-5"
        onClick={() => navigate("/user/add", { state: user })} >
       Add User
      </button>
        <div className="py-4">
          <table class="table table-bordered" style={{ border:"20px solid #dee2e6"}}>
            <thead class="thead-dark ">
              <tr>
                <th scope="col">Table-No</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                {/* <th scope="col">pass</th> */}
                <th scope="col">createdAt</th>
                <th scope="col">updatedAt</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {user.map((user, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.createdAt}</td>
                  <td>{user.updatedAt}</td>
                  {/* <td>{user.password}</td> */}
                  <div className="dropdown show text-center mt-2">
                    <a
                      className="btn btn-danger  dropdown-toggle"
                      href="#"
                      role="button"
                      id="dropdownMenuLink"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Action
                    </a>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuLink"
                    >
                     
                      <button
                        class="btn btn-outline-primary mr-2 w-100"
                        onClick={() => navigate("/user/edit", { state: user})}
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Users;
