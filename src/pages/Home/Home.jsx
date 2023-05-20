import Reviews from "../Reviews/Reviews";
import Banner from "./Banner";
import Gallery from "./Gallery";
import Toys from "./Toys/Toys";

const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            <Toys></Toys>
            <Gallery></Gallery>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;