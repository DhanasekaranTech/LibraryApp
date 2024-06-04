import { Link } from "react-router-dom";
import navIcon from "../../assets/homeicon.webp";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";

interface DecodedToken {
  id: string;
  role: string;
  name: string;
}

const Profile = () => {
  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwtDecode<DecodedToken>(token);
      setUserName(decodedToken.name);
      setUserId(decodedToken.id);
      console.log(decodedToken.name, decodedToken.id, decodedToken.role);
    }
  }, []);

  return (
    <>
      <nav className="navbar bg-body-tertiary sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img
              src={navIcon}
              alt="Logo"
              width="30"
              height="24"
              className="d-inline-block align-text-top"
            ></img>
            Library
          </a>
          <div>
            <button className="btn btn-warning btn-sm me-5 ms-3">
              My profile
            </button>
          </div>
        </div>
      </nav>
      <div
        className="container d-flex flex-column justify-content-center align-items-center "
        style={{ height: "100vh", width: "50%" }}
      >
        <div className=" bg-light shadow-lg p-3 mb-5 bg-body rounded-4">
          <h3 className="mt-5 ms-5 me-5">name: {userName}</h3>
          <h3 className="ms-5 ">id: {userId}</h3>
          <Link to="/borrowed">
            <button className="btn btn-primary ms-3 mb-2 btn-sm">
              view my books
            </button>
          </Link>
          <Link to="/userDashboard">
            <button className="btn btn-secondary btn-sm ms-2 me-2 mb-2">
              back
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Profile;
