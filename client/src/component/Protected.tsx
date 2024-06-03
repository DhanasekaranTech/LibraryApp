import { Navigate } from "react-router-dom";

const ProtectedRoute = ({children}:{children:JSX.Element})=>{
    const token = localStorage.getItem("token");
    if(!token) <Navigate to='/signIn'/>

    return children;
    
}
export default ProtectedRoute;