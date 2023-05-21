import { useContext, useState } from "react";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from "../Provider/AuthProvider";
import Swal from 'sweetalert2'
import { Helmet } from "react-helmet-async";

const Login = () => {
    const [errorMessage, setErrorMessage] = useState("")
    const { LogIn, googleSignIn } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";
    const handleLogIn = () => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        LogIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Login Successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
                form.reset()
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error.message)
                setErrorMessage(error.message)
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text:`${errorMessage}`,
                })
            })
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                const loggedUser = result.user;
                console.log(loggedUser)
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Login Successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error.message)
                setErrorMessage(error.message)
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${errorMessage}`,
                })
            })
    }

    return (
        <div className=" min-h-screen max-w-6xl mx-auto">
            <Helmet>
                <title>ToyCar Zone - Login</title>
            </Helmet>
            <h1 className="text-center text-4xl text-blue font-bold">Login Now</h1>
            <div className="hero-content">
                <div className="card  w-1/2 shadow-2xl bg-base-100">
                    <form onSubmit={handleLogIn}>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            </div>
                        </div>
                        <p className="text-center ">New In Toycar Zone? <Link className="text-pink font-bold" to="/register"> Register</Link></p>
                        <div className="form-control w-3/4 mx-auto pb-5 mt-6">
                            <input className="primary-btn" type="submit" value="Login" />
                        </div>
                    </form>
                    <div className="form-control w-3/4 mx-auto pb-5">
                        <button className="btn btn-outline btn-secondary" onClick={handleGoogleSignIn}>Login with google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;