import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  if (!token) {
    useEffect(() => {
      navigate("/signIn");
    });
  }
  return children;
};
export default ProtectedRoute;
