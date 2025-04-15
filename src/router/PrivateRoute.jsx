import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";
const PrivateRoute = ({children}) => {
    const {user, loader}= useContext(AuthContext)
    const location = useLocation()
    if(loader){
        return <span className="loading loading-spinner loading-xl"></span>
    }
    if(user){
        return children
    }
    return <Navigate to={'/login'} state={location?.pathname}></Navigate>
};

export default PrivateRoute;