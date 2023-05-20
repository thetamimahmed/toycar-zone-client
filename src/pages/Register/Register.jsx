import { useContext, useState } from "react";
import {Link} from "react-router-dom"
import { AuthContext } from "../Provider/AuthProvider";
import Swal from 'sweetalert2'
import { updateProfile } from "firebase/auth";

const Register = () => {
    const [errorMessage, setErrorMessage] = useState("")
    const {signUp} = useContext(AuthContext)
    const handleRegister = event =>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        signUp(email, password)
        .then(result =>{
            const loggedUser = result.user;
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Registration Successfully',
                showConfirmButton: false,
                timer: 1500
              })

            updateProfile(loggedUser, {
                displayName: name, photoURL: photo
            })
            .then(() => {
                
              })
              .catch((error) => {
                console.log(error)
              });
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
            <h1 className="text-center text-4xl text-blue font-bold">Register Now</h1>
            <div className="hero-content">
                <div className="card  w-full shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister}>
                        <div className="card-body grid grid-cols-2">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="name" className="input input-bordered" required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name="email" placeholder="email" className="input input-bordered" required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name="photo" placeholder="photo" className="input input-bordered" required/>
                            </div>
                        </div>
                        <p className="text-center ">Already Have An Account <Link className="text-pink font-bold" to="/login">LogIn</Link></p>
                        <div className="form-control w-3/4 mx-auto pb-5 mt-6">
                            <input className="primary-btn" type="submit" value="Register" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;