
const Banner = () => {
    return (
        <div className="bg-lightPink mb-5 lg:h-screen bg-cover bg-center bg-[url('https://i.ibb.co/RB8K07J/pexels-mike-bird-381228.jpg')]">
            <div className="lg:h-screen flex flex-col py-14 lg:py-0 justify-center items-center bg-gradient-to-r from-[#151515ca] to-[rgba(21,21,21,0.66)]">
                <h1 className="text-blue text-3xl lg:text-5xl font-bold text-center my-2 lg:w-3/4 leading-tight">Rev Up Your Imagination! Discover the Ultimate Toy Car Wonderland!</h1>
                <p className="text-lightPink text-xl  text-center my-2 lg:w-3/4">
                    Unleash your imagination with our thrilling toy car collection. From sleek sports cars to rugged off-road vehicles, ignite endless fun and excitement. Explore our selection now!</p>
                <button className="primary-btn">Explore Now</button>
            </div>
        </div>
    );
};

export default Banner;