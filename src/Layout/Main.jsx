import NavBar from "../shared/NavBar";
import {Outlet} from 'react-router-dom'
import Footer from "../pages/Footer/Footer";

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;