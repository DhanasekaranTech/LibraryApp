import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../api/api";
import User from "../../types/user";
const ManageUsers = () => {
  const [users, setUsers] = useState<User[]>([]);

  const fetchUser = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await api.get("/admin/viewUser", {
        headers: {
          Authorization: `Bearer ${token} `,
        },
      });
      console.log(response.data);
      return setUsers(response.data);
    } catch (error) {
      console.log("Error in fetch books", error);
    }
  };

  useEffect(() => {
    fetchUser();
  },[]);

  return (
    <>
      <div className="container mt-5">
        <h1> Manage user</h1>
        <table className="table table-dark table-hover w-25">
          <thead>
            <tr>
              <th>user name</th>
              <th>user id</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.ID}>
                <td>{user.username}</td>
                <td>{user.ID}</td>
                <td>{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link to="/adminDashboard">
          <button className="btn btn-secondary">back</button>
        </Link>
      </div>
    </>
  );
};
export default ManageUsers;
