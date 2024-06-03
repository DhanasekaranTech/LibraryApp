import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../api/api";

const AddBook = () => {
  const navigate = useNavigate();
  const [bookname, setBookname] = useState("");

  const handleAddbook = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const token = localStorage.getItem("token");

      const response = await api.post(
        "/admin/createBook",
        {
          bookname,
        },
        {
          headers: {
            Authorization: `Bearer ${token} `,
          },
        }
      );

      if (response.status === 201) {
        navigate("/manageBooks");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container  d-flex justify-content-center vh-100 align-items-center">
        <form
          className="form-control form-outline w-25"
          onSubmit={handleAddbook}
        >
          <p>Enter book details:</p>

          <label className="form-label">Book name: </label>

          <input
            name="bookname"
            className="form-control"
            type="text"
            placeholder="Enter bookname"
            value={bookname}
            onChange={(e) => setBookname(e.target.value)}
          ></input>

          <button className="btn btn-success btn-sm mt-2 mb-2" type="submit">
            Submit
          </button>

          <Link to="/manageBooks">
            <button className="btn btn-secondary btn-sm ms-2">back</button>
          </Link>
        </form>
      </div>
    </>
  );
};
export default AddBook;
