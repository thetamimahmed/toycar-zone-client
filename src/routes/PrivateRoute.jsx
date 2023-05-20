import { useContext } from "react";
import { AuthContext } from "../pages/Provider/AuthProvider";
import { Navigate, useLocation } from 'react-router-dom'


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    if(loading){
        return <div className="h-screen w-screen flex justify-center items-center"><button className="btn loading">loading</button></div>
    }
    if(user){
        return children;
    }
    return (
        <Navigate  to="/login"  state={{from: location}} replace></Navigate>
    );
};

export default PrivateRoute;