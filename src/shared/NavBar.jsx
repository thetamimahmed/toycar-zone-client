import logo from "../assets/car.png"
import {Link} from "react-router-dom"
const NavBar = () => {
    const navInfo = <>
        <li className="text-xl"><Link to="/">Home</Link></li>
        <li className="text-xl"><Link to="/">All Toys</Link></li>
        <li className="text-xl"><Link to="/">Add Toy</Link></li>
        <li className="text-xl"><Link to="/login">LogIn</Link></li>
        <li className="text-xl"><Link to="/Register">Register</Link></li>
    </>
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
                    <img src={logo} className="w-20 d-flex" alt="" />
                    <p className="text-3xl font-bold text-pink mt-2"><span className="text-blue">TOYCAR</span> ZONE</p>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navInfo}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Get started</a>
            </div>
        </div>
    );
};

export default NavBar;