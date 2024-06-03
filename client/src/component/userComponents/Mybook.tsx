import { Link } from "react-router-dom";
import BorrowedBook from "../../types/BorrowedBook";
import api from "../../api/api";
import { useEffect, useState } from "react";


// interface MyBook {
//   borrow: BorrowedBook[];
//   setBorrow: React.Dispatch<React.SetStateAction<BorrowedBook[]>>;
// }
const MyBook: React.FC = () => {

  const [borrow, setBorrow] = useState<BorrowedBook[]>([]);


  const fetchBorrowBooks = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await api.get("/user/borrowed", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
      return setBorrow(response.data);
    } catch (error) {
      console.log("Error in fetch books", error);
    }
  };
useEffect(()=>{
  fetchBorrowBooks();
},[])

  return (
    <>
      <div className="container mt-5">
        <h1> My books</h1>
        <table className="table table-dark table-hover w-50">
          <thead>
            <tr>
              <th>User Id</th>
              <th>Book Id</th>
              <th>Start date</th>
              <th>End date</th>
            </tr>
          </thead>
          <tbody>
            {borrow.map((borrow) => (
              <tr key={borrow.UBID}>
                <td>userid</td>
                <td>book id</td>
                <td>{borrow.startdate}</td>
                <td>{borrow.enddate}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link to="/profile">
          <button className="btn btn-secondary">back</button>
        </Link>
      </div>
    </>
  );
};
export default MyBook;
