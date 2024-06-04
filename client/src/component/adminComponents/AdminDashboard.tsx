import userImg from "../../assets/userimg.png";
import bookImg from "../../assets/bookImg.jpg";
import ubImg from "../../assets/ub.png";
import { Link, useNavigate } from "react-router-dom";
import navIcon from "../../assets/homeicon.webp";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
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
            <button className="btn btn-danger btn-sm" onClick={logout}>
              Logout
            </button>
          </div>
        </div>
      </nav>
      <div className="container  d-flex flex-column justify-content-around align-items-center ">
        <h1 style={{ marginTop: "220px" }}>Admin Dashboard</h1>
        <div className="row">
          <div className="col">
            <div className="card">
              <img
                className="p-4"
                src={userImg}
                alt=""
                width="250px"
                height="250px"
              />

              <h3 className="p-4 ">Manage Users</h3>
              <Link to="/manageUsers">
                <button
                  className="btn btn-primary mb-2 "
                  style={{ width: "100px", marginLeft: "70px" }}
                >
                  Click here
                </button>
              </Link>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                className="p-4"
                src={bookImg}
                alt=""
                width="250px"
                height="250px"
              />
              <h3 className="p-4 ">Manage Books</h3>
              <Link to="/manageBooks">
                <button
                  className="btn btn-primary mb-2 "
                  style={{ width: "100px", marginLeft: "70px" }}
                >
                  Click here
                </button>
              </Link>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                className="p-4"
                src={ubImg}
                alt=""
                width="250px"
                height="250px"
              />
              <h3 className="p-4 ">Manage system</h3>
              <Link to="/manageSystem">
                <button
                  className="btn btn-primary mb-2 "
                  style={{ width: "100px", marginLeft: "70px" }}
                >
                  Click here
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AdminDashboard;
