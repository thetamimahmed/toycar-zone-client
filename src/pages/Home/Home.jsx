import Reviews from "./Reviews/Reviews";
import Banner from "./Banner";
import Gallery from "./Gallery";
import Toys from "./Toys/Toys";
import LogoSlide from "./LogoSlide";
import { Helmet } from "react-helmet-async";

const Home = () => {
    return (
        <div className="">
            <Helmet>
                <title>ToyCar Zone - Home</title>
            </Helmet>
            <Banner></Banner>
            <LogoSlide></LogoSlide>
            <Toys></Toys>
            <Gallery></Gallery>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;