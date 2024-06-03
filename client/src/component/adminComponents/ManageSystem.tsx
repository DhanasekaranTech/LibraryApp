// import { Link } from "react-router-dom";
// import api from "../../api/api";
// import { useEffect, useState } from "react";
// import BorrowedBook from "../../types/BorrowedBook";

// const ManageSystem = () => {
//   const [userbooks, setUserBooks] = useState<BorrowedBook[]>([]);

//   const fetchUserBooks = async () => {
//     try {
//       const token = localStorage.getItem("token");

//       const response = await api.get("/admin/userbooks", {
//         headers: {
//           Authorization: `Bearer ${token} `,
//         },
//       });
//       console.log(response.data);
//       return setUserBooks(response.data);
//     } catch (error) {
//       console.log("Error in fetch books", error);
//     }
//   };

//   useEffect(() => {
//     fetchUserBooks();
//   }, []);
//   const handleDeleteUB = async (UBID: number) => {
//     try {
//       const token = localStorage.getItem("token");

//       if (!token) {
//         console.error("No token found");
//         return;
//       }
//       console.log(`Deleting book with ID:${UBID}`); // Debugging log msg

//       const response = await api.delete(`/admin/deleteUB/${UBID}`, {
//         headers: {
//           Authorization: `Bearer ${token} `,
//         },
//       });
//       if (response.status === 200) {
//         console.log("Record deleted successfully");
//         setUserBooks((prevBooks) => prevBooks.filter((ub) => ub.UBID !== UBID));
//       } else {
//         console.error("Failed to delete record:", response.data.message);
//       }

//     } catch (error) {}
//   };

//   return (
//     <>
//       <div className="container mt-5">
//         <h1> Manage System</h1>
//         <table className="table table-dark table-hover w-50">
//           <thead>
//             <tr>
//               <th>User Id</th>
//               <th>Book Id</th>
//               <th>Start date</th>
//               <th>End date</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {userbooks.map((ub) => (
//               <tr key={ub.UBID}>
//                 <td>user</td>
//                 <td>book</td>
//                 <td>{ub.startdate}</td>
//                 <td>{ub.enddate}</td>

//                 <td>
                 
//                   <button className="btn btn-primary btn-sm ms-2 me-2">
//                     update
//                   </button>
//                   <button
//                     className="btn btn-danger btn-sm"
//                     onClick={() => handleDeleteUB(ub.UBID)}
//                   >
//                     delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         <Link to="/adminDashboard">
//           <button className="btn btn-secondary">back</button>
//         </Link>
//       </div>{" "}
//     </>
//   );
// };
// export default ManageSystem;
import  { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../api/api';
import BorrowedBook from '../../types/BorrowedBook';
import UpdateUserBookForm from './UpdateForm';

const ManageSystem = () => {
  const [userbooks, setUserBooks] = useState<BorrowedBook[]>([]);
  const [selectedBook, setSelectedBook] = useState<BorrowedBook | null>(null);

  const fetchUserBooks = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await api.get("/admin/userbooks", {
        headers: {
          Authorization: `Bearer ${token} `,
        },
      });
      console.log(response.data);
      return setUserBooks(response.data);
    } catch (error) {
      console.log("Error in fetch books", error);
    }
  };

  useEffect(() => {
    fetchUserBooks();
  }, []);

  const handleDeleteUB = async (UBID: number) => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        console.error("No token found");
        return;
      }
      console.log(`Deleting book with ID:${UBID}`);

      const response = await api.delete(`/admin/deleteUB/${UBID}`, {
        headers: {
          Authorization: `Bearer ${token} `,
        },
      });
      if (response.status === 200) {
        console.log("Record deleted successfully");
        setUserBooks((prevBooks) => prevBooks.filter((ub) => ub.UBID !== UBID));
      } else {
        console.error("Failed to delete record:", response.data.message);
      }
    } catch (error) {
      console.log("Error deleting record", error);
    }
  };

  const handleUpdate = () => {
    fetchUserBooks();
  };

  return (
    <div className="container mt-5">
      <h1> Manage System</h1>
      <table className="table table-dark table-hover w-50">
        <thead>
          <tr>
            <th>User Id</th>
            <th>Book Id</th>
            <th>Start date</th>
            <th>End date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {userbooks.map((ub) => (
            <tr key={ub.UBID}>
              <td>user</td>
              <td>book</td>
              <td>{ub.startdate}</td>
              <td>{ub.enddate}</td>
              <td>
                <button 
                  className="btn btn-primary btn-sm ms-2 me-2"
                  onClick={() => setSelectedBook(ub)}
                >
                  update
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDeleteUB(ub.UBID)}
                >
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedBook && (
        <UpdateUserBookForm 
          UBID={selectedBook.UBID}
          startdate={selectedBook.startdate}
          enddate={selectedBook.enddate}
          onUpdate={handleUpdate}
          onClose={() => setSelectedBook(null)}
        />
      )}
      <Link to="/adminDashboard">
        <button className="btn btn-secondary">back</button>
      </Link>
    </div>
  );
};

export default ManageSystem;
