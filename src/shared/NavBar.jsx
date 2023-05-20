import logo from "../assets/car.png"
import { Link } from "react-router-dom"
import { useContext } from "react";
import { AuthContext } from "../pages/Provider/AuthProvider";
const NavBar = () => {
    const { user, logOut } = useContext(AuthContext)
    const navInfo = <>
        <li className="text-xl"><Link to="/">Home</Link></li>
        <li className="text-xl"><Link to="/">Blogs</Link></li>
        <li className="text-xl"><Link to="/toys">All Toy</Link></li>
        {user && <> <li className="text-xl"><Link to="/myToy">My Toys</Link></li>
        <li className="text-xl"><Link to="/addToy">Add A Toy</Link></li></>}
    </>
    const handleLogOut = () =>{
        logOut()
        .then(()=>{})
        .catch(error => console.log(error))
    }
    return (
        <div className="navbar bg-base-100 py-5 lg:max-w-6xl mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navInfo}
                    </ul>
                </div>
                <div className="flex items-center">
                    <img src={logo} className="w-20 hidden md:block" alt="" />
                    <p className="text-3xl font-bold text-pink mt-2"><span className="text-blue">TOYCAR</span> ZONE</p>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navInfo}
                </ul>
            </div>
            <div className="navbar-end">
                {user ? <div className="flex justify-center items-center">
                    <button className="log-btn" onClick={handleLogOut}>Logout</button>
                    <img className="w-14 h-14 rounded-full ml-3" title={user && user.displayName} src={user && user.photoURL} alt="" />
                </div> : <button className="log-btn"><Link to="/login">LogIn</Link></button>
                 }   
            </div>
        </div>
    );
};

export default NavBar;