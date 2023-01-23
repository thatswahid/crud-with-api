import "./App.css";
import Users from "./Component/Users";
import UserEdit from "./Component/UserEdit";
import AddUser from "./Component/AddUser";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="user" element={<Users />} />
          <Route path="/user/add" element={<AddUser />} />
          <Route path="/user/edit" element={<UserEdit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
