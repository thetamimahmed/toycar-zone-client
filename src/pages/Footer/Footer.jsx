import { Link } from "react-router-dom"
import { FaFacebookSquare,  FaInstagramSquare, FaLinkedin} from "react-icons/fa";
const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content grid grid-cols-1 lg:grid-cols-3 lg:place-items-center">
            <div className="">
                <p className="text-3xl font-bold text-pink mt-2"><span className="text-blue">TOYCAR</span> ZONE</p>
                <p className="text-lg">Your ultimate destination for toy cars. We offer a wide selection of toy sports cars, trucks, and more. Spark imagination and fuel your love for automobiles with our quality toys. Discover the joy of Toy Car Zone today.</p>
            </div>
            <div className="">
                <p className="text-3xl font-bold text-pink mt-2">Quick Links</p>
                <div className="flex flex-col ml-10 text-xl space-y-1">
                    <Link className="hover:text-blue" to="/">Home</Link>
                    <Link className="hover:text-blue" to="/">Blogs</Link>
                    <Link className="hover:text-blue" to="/toys">All Toy</Link>
                    <Link className="hover:text-blue" to="/login">LogIn</Link>
                    <Link className="hover:text-blue" to="/register">Register</Link>
                </div>
            </div>
            <div className="">
                <p className="text-3xl font-bold text-pink mb-3">Contact Us</p>
                <div className="flex flex-col space-y-1 text-lg">
                    <p><span>Email:</span> info@toycarzone.com</p>
                    <p><span>Phone:</span>  123-456-7890</p>
                    <p><span>Address:</span> 123 Toy Street, Cityville, USA</p>
                    <div className="flex space-x-3 text-4xl">
                        <p className="hover:text-[#3b5998] cursor-pointer"><FaFacebookSquare/></p>
                        <p className="hover:text-[#962fbf] cursor-pointer"><FaInstagramSquare/></p>
                        <p className="hover:text-[#3b5998] cursor-pointer"><FaLinkedin/></p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;