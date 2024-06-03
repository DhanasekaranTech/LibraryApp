import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/homeComponent/home";
import SignIn from "./component/homeComponent/SignIn";
import SignUp from "./component/homeComponent/SignUp";
import UserDashboard from "./component/userComponents/UserDashboard";
import Profile from "./component/userComponents/Profile";
import Borrow from "./component/userComponents/Borrow";
import MyBook from "./component/userComponents/Mybook";
import AdminDashboard from "./component/adminComponents/AdminDashboard";
import ManageUsers from "./component/adminComponents/ManageUsers";
import ManageBooks from "./component/adminComponents/ManageBooks";
import ManageSystem from "./component/adminComponents/ManageSystem";
import "core-js/stable/atob";
import AddBook from "./component/adminComponents/AddBook";
import ProtectedRoute from "./component/Protected";
//import { useState, useEffect } from "react";
//import { jwtDecode } from "jwt-decode";
//import Books from "./types/Books";
//import BorrowedBook from "./types/BorrowedBook";

// interface DecodedToken {
//   id: string;
//   role: string;
//   name: string;
// }

function App() {
  // const [userName, setUserName] = useState("");
  // const [userId, setUserId] = useState("");

  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     const decodedToken = jwtDecode<DecodedToken>(token);
  //     setUserName(decodedToken.name);
  //     setUserId(decodedToken.id);
  //     console.log(decodedToken.name, decodedToken.id, decodedToken.role);
  //   }
  // }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signIn" element={<SignIn />}></Route>
        <Route path="/signUp" element={<SignUp />}></Route>

<Route path="/userDashboard" element={
  <ProtectedRoute>
    <UserDashboard/>
  </ProtectedRoute>
}>

</Route>
<Route path="/adminDashboard" element={
  <ProtectedRoute>
    <AdminDashboard/>
  </ProtectedRoute>
}>

</Route>

        {/* {role === "user" && ( */}
      {/* //  <Route path="/userDashboard" element={<UserDashboard />}></Route> */}
        {/* )} */}

        {/* {role === "admin" && ( */}
        {/* <Route path="/adminDashboard" element={<AdminDashboard />}></Route> */}
        {/* )} */}
        <Route
          path="/profile"
          element={
            <Profile
              // userName={userName}
              // setUserName={setUserName}
              // userId={userId}
              // setUserId={setUserId}
            />
          }
        ></Route>
        <Route path="/borrow" element={<Borrow />}></Route>
        <Route path="/borrowed" element={<MyBook />}></Route>
        <Route path="/manageUsers" element={<ManageUsers />}></Route>
        <Route path="/manageBooks" element={<ManageBooks />}></Route>
        <Route path="/addBook" element={<AddBook/>}></Route>
        <Route path="/manageSystem" element={<ManageSystem />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
