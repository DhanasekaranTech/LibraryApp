import { Link } from "react-router-dom";
import BorrowedBook from "../../types/BorrowedBook";
import api from "../../api/api";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

interface DecodedToken {
  id: number;
  role: string;
}

const MyBook: React.FC = () => {
  const [borrow, setBorrow] = useState<BorrowedBook[]>([]);
  const token = localStorage.getItem("token");

  let decodedToken: DecodedToken | null = null;
  if (token) {
    decodedToken = jwtDecode<DecodedToken>(token);
  }

  const fetchBorrowBooks = async () => {
    try {
      if (token) {
        const response = await api.get("/user/borrowed", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (decodedToken) {
          const filteredBooks = response.data.filter(
            (book: BorrowedBook) => book.username.ID === decodedToken.id
          );
          setBorrow(filteredBooks);
        }
      }
    } catch (error) {
      console.log("Error in fetch books", error);
    }
  };

  useEffect(() => {
    fetchBorrowBooks();
  }, []);

  return (
    <>
      <div className="container mt-5">
        <h1>My books</h1>
        <table className="table table-dark table-hover w-50">
          <thead>
            <tr>
              <th>User name</th>
              <th>Book name</th>
              <th>Start date</th>
              <th>End date</th>
            </tr>
          </thead>
          <tbody>
            {borrow.map((borrow) => (
              <tr key={borrow.UBID}>
                <td>{borrow.username.username}</td>
                <td>{borrow.bookname.bookname}</td>
                <td>{borrow.startdate}</td>
                <td>{borrow.enddate}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link to="/profile">
          <button className="btn btn-secondary">Back</button>
        </Link>
      </div>
    </>
  );
};

export default MyBook;
