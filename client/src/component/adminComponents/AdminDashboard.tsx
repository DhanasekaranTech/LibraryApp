import userImg from "../../assets/userimg.png";
import bookImg from "../../assets/bookImg.jpg";
import ubImg from "../../assets/ub.png";
import { Link } from "react-router-dom";
const AdminDashboard = () => {
  return (
    <>
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
              <Link to='/manageBooks'> 
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
              <Link to='/manageSystem'>
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
