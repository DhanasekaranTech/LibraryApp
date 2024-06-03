import { Link, useNavigate } from "react-router-dom";
import navIcon from "../../assets/homeicon.webp";
import "./sign.css";
import { useState } from "react";
import api from "../../api/api";



  

const SignUp = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await api.post("/auth/signup", {
        username,
        password,
      });

      if (response.status === 201) {
        navigate("/signIn");
      }
    } catch (error) {
      console.log(error);
      
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
              <Link to="/signIn">
                <button className="btn btn-warning btn-sm me-5 ms-3">
                  signIn
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
            <form className="form-control form-outline w-25" onSubmit={handleSignUp} action="">
              <h3>Hurry up!</h3>

              <label className="form-label" htmlFor="">
                user name:{" "}
              </label>
              <input
                className="form-control"
                type="text"
                placeholder="Enter username"
                name="username"
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
              ></input>

              <label className="form-label" htmlFor="">
                password:{" "}
              </label>
              <input
                className="form-control"
                type="password"
                placeholder="Enter password"
                name="password"
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
              ></input>

              <button
                className="btn btn-success btn-sm mt-2 mb-2"
                type="submit"
              >
                signUp
              </button>
              <p>
                Already have an account? please <Link to="/signIn">signin</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default SignUp;
