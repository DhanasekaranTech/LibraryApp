import { Link } from "react-router-dom";
import Books from "../../types/Books";
import { useState, useEffect } from "react";
import api from "../../api/api";

const ManageBooks = () => {
  const [books, setBooks] = useState<Books[]>([]);

  const fetchBooks = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await api.get("/admin/show", {
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

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleDelete = async (ID: number) => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        console.error("No token found");
        return;
      }
      console.log(`Deleting book with ID: ${ID}`); // Debugging log msg -- working  fine--

      const response = await api.delete(`/admin/deleteBook/${ID}`, {
        headers: {
          Authorization: `Bearer ${token} `,
        },
      });

      if (response.status === 200) {
        console.log("Record deleted successfully");
        setBooks((prevBooks) => prevBooks.filter((book) => book.ID !== ID));
      } else {
        console.error("Failed to delete record:", response.data.message);
      }
    } catch (error) {
      console.log("Error in fetch books", error);
    }
  };



  return (
    <>
      <div className="container mt-5">
        <h1> Manage Books</h1>
        <table className="table table-dark table-hover w-25">
          <thead>
            <tr>
              <th>Book name</th>
              <th>Book id</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book.ID}>
                <td>{book.bookname}</td>
                <td>{book.ID}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(book.ID)}
                  >
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link to="/adminDashboard">
          <button className="btn btn-secondary">back</button>
        </Link>
        <Link to='/addBook' >
        <button className="btn btn-success  ms-2 me-2" >add</button>
        </Link>
      </div>
    </>
  );
};
export default ManageBooks;
