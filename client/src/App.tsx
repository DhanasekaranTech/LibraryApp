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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signIn" element={<SignIn />}></Route>
        <Route path="/signUp" element={<SignUp />}></Route>

        <Route
          path="/userDashboard"
          element={
            <ProtectedRoute>
              <UserDashboard />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/adminDashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        ></Route>

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        ></Route>

        <Route
          path="/borrow"
          element={
            <ProtectedRoute>
              <Borrow />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/borrowed"
          element={
            <ProtectedRoute>
              <MyBook />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/manageUsers"
          element={
            <ProtectedRoute>
              <ManageUsers />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/manageBooks"
          element={
            <ProtectedRoute>
              <ManageBooks />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/addBook"
          element={
            <ProtectedRoute>
              <AddBook />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/manageSystem"
          element={
            <ProtectedRoute>
              <ManageSystem />
            </ProtectedRoute>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
