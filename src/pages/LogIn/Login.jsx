import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
    const {name} = useContext(AuthContext)
    return (
        <div>
            <h1>LogIn: {name}</h1>
        </div>
    );
};

export default Login;