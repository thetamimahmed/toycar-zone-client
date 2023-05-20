import Reviews from "./Reviews/Reviews";
import Banner from "./Banner";
import Gallery from "./Gallery";
import Toys from "./Toys/Toys";
import LogoSlide from "./LogoSlide";

const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            <LogoSlide></LogoSlide>
            <Toys></Toys>
            <Gallery></Gallery>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;