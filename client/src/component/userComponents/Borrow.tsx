import { Link, useNavigate } from "react-router-dom";
import navIcon from "../../assets/homeicon.webp";
import { useState } from "react";
import api from "../../api/api";
const Borrow = () => {
  const [username, setUserName] = useState("");
  const [bookname, setBookName] = useState("");
  const [startdate, setStartDate] = useState("");
  const [enddate, setEndDate] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const token = localStorage.getItem("token");

      const response = await api.post(
        "/user/borrow",
        {
          username,
          bookname,
          startdate,
          enddate,
        },
        {
          headers: {
            Authorization: `Bearer ${token} `,
          },
        }
      );

      if (response.status === 201) {
        navigate("/userDashboard");
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
          </div>
        </nav>
        <div
          className="container d-flex justify-content-center align-items-center  "
          style={{ height: "75vh" }}
        >
          <form
            className="form-control form-outline w-25"
            onSubmit={handleSubmit}
          >
            <p>Enter following details for borrow books:</p>

            <label className="form-label">user name: </label>
            <input
              name="username"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              className="form-control"
              type="text"
              placeholder="Enter username"
            ></input>

            <label className="form-label" htmlFor="">
              Book name:{" "}
            </label>
            <input
              name="bookname"
              value={bookname}
              onChange={(e) => setBookName(e.target.value)}
              className="form-control"
              type="text"
              placeholder="Enter Bookname"
            ></input>

            <label className="form-label" htmlFor="">
              start date:{" "}
            </label>
            <input
              name="startdate"
              value={startdate}
              onChange={(e) => setStartDate(e.target.value)}
              className="form-control"
              type="text"
              placeholder="dd/mm/yyyy"
            ></input>
            <label className="form-label" htmlFor="">
              end date:{" "}
            </label>
            <input
              name="enddate"
              value={enddate}
              onChange={(e) => setEndDate(e.target.value)}
              className="form-control"
              type="text"
              placeholder="dd/mm/yyyy"
            ></input>
            <button className="btn btn-success btn-sm mt-2 mb-2" type="submit">
              Submit
            </button>
            <Link to="/userDashboard">
              <button className="btn btn-secondary btn-sm ms-2 mt-2 mb-2">
                back
              </button>
            </Link>
          </form>
        </div>
      </div>{" "}
    </>
  );
};
export default Borrow;
