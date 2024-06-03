import { Link } from "react-router-dom";
import navIcon from "../../assets/homeicon.webp";
import "./user.css";
import Books from "../../types/Books";
import api from "../../api/api";
import { useEffect, useState } from "react";

// interface userDashboard{
//   books: Books[];
//   setBooks:React.Dispatch<React.SetStateAction<Books[]>>
// }

const UserDashboard:React.FC = ()=> {
  const [books, setBooks] = useState<Books[]>([]);

 
  const fetchBooks = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await api.get("/user/books", {
        headers: {
          Authorization: `Bearer ${token} `,
        },
      });
      console.log(response.data);
      return setBooks(response.data);
    } catch (error) {
      console.log("Error in fetch books", error);
    }
  };

  useEffect(()=>{
    fetchBooks();
  },[])
  
  return (
    <>
      <div className="user-home-img">
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
              <Link to="/profile">
                <button className="btn btn-warning btn-sm me-5 ms-3">
                  View Profile
                </button>
              </Link>
            </div>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <p className="fw-bold fs-1 ms-4 mt-5">Available books </p>
            {books.map((book) => (
              <div className="col" key={book.ID}>
                <div
                  className="card shadow-lg p-3 mb-5 bg-body rounded-4"
                  
                  style={{ width: "18rem", margin: "1rem" }}
                >
                  <div className="card-body">
                    <h5 className="card-title">Book name-{book.bookname}</h5>
                    <p className="card-text">Book.id- {book.ID}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Link to='/borrow'>
          <button
            className="btn btn-success  h-25 ms-3"
            style={{ width: "20" }}
          >
            Borrow book
          </button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default UserDashboard;
