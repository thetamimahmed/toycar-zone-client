import Marquee from "react-fast-marquee";

const LogoSlide = () => {
    return (
        <div className="mt-10 mb-28">
            <h1 className="text-center text-3xl font-bold text-pink my-14">OUR PARTNERS</h1>
            <Marquee>
                <img className="mx-10" src="https://i.ibb.co/LPpJXWY/logo1-compact.webp" alt="" />
                <img className="mx-10" src="https://i.ibb.co/Yj57SYW/logo2-compact.webp" alt="" />
                <img className="mx-10" src="https://i.ibb.co/SK1FrX7/logo5-compact.webp" alt="" />
                <img className="mx-10" src="https://i.ibb.co/LPpJXWY/logo1-compact.webp" alt="" />
                <img className="mx-10" src="https://i.ibb.co/gTVS1xH/logo3-compact.webp" alt="" />
                <img className="mx-10" src="https://i.ibb.co/SK1FrX7/logo5-compact.webp" alt="" />
            </Marquee>
        </div>
    );
};

export default LogoSlide;