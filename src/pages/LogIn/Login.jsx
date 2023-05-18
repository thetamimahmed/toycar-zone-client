import { useContext } from "react";
import { Link } from "react-router-dom"
import { AuthContext } from "../Provider/AuthProvider";
import Swal from 'sweetalert2'

const Login = () => {
    const { LogIn, googleSignIn } = useContext(AuthContext)

    const handleLogIn = () => {
        event.preventDefault()
        const form = event.target;
        // const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        // const photo = form.photo.value;
        // const userInfo = {
        //     name, email, password, 
        // }
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
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then((result)=>{
            const loggedUser = result.user;
            console.log(loggedUser)
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Login Successfully',
                showConfirmButton: false,
                timer: 1500
            })
        })
        .catch(error => console.log(error))
    }

    return (
        <div className=" min-h-screen max-w-6xl mx-auto">
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