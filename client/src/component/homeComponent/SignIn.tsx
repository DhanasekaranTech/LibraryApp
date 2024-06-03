import { jwtDecode } from "jwt-decode";
import { Link, useNavigate } from "react-router-dom";
import navIcon from "../../assets/homeicon.webp";
import "./sign.css";
import { useState } from "react";
import api from "../../api/api";
interface DecodedToken {
  id: string;
  role: string;
}

const SignIn = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  api.defaults.withCredentials = true;
  
  const handleSignIn = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await api.post("/auth/signin", {
        username,
        password,
        
      });

      const data = response.data;

      const token = data.token;
      
      //console.log(data,token);
      
      localStorage.setItem("token", token);
      
      const decodedToken = jwtDecode<DecodedToken>(token);
      const role = decodedToken.role;

      if (role === "admin") {
        navigate("/adminDashboard");
      } else {
        navigate("/userDashboard");
      }
    } catch (error:unknown) {
      return console.log(error);
    }
  };
  return (
    <>
      <div className="container-fluid">
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
              <Link to="/signUp">
                <button className="btn btn-warning btn-sm me-5 ms-3">
                  signup
                </button>
              </Link>
            </div>
          </div>
        </nav>
        <div className="sign-img">
          <div
            className="container d-flex justify-content-center align-items-center  "
            style={{ height: "75vh" }}
          >
            <form
              className="form-control form-outline w-25"
              onSubmit={handleSignIn}
              // action=""
            >
              <h3>Welcome again</h3>
              <label className="form-label"  >
                user name:{" "}
              </label>
              <input
                name="username"
                className="form-control"
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
              ></input>

              <label className="form-label" >
                password:{" "}
              </label>
              <input
                name="password"
                className="form-control"
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>

              <button
                className="btn btn-success btn-sm mt-2 mb-2"
                type="submit"
              >
                signin
              </button>
              <p>
                Don'n have an account? please <Link to="/signUp">signup</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default SignIn;
