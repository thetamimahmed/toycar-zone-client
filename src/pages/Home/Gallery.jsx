
const Gallery = () => {
    return (
        <div className="my-10">
            <h1 className="text-center text-4xl font-bold mb-10 text-pink">Recent Captures</h1>
            <div className="flex items-center gap-5 mx-5 flex-wrap md:flex-nowrap">
                <div className="">
                    <img src="https://i.ibb.co/8D24HVK/photo-1511415518647-9e5da4fd803f.jpg" alt="" className="rounded-lg w-full h-full" />
                </div>
                <div className="">
                    <img src="https://i.ibb.co/5Bck7Hq/toy-car-431356-960-720.jpg" alt="" className="rounded-lg w-full h-full" />
                </div>
                <div className="">
                    <img src="https://i.ibb.co/vPfyS8s/toysports.jpg" alt="" className="rounded-lg w-full h-full" />
                </div>
                <div className=" ">
                    <img src="https://i.ibb.co/3ygZG7W/pexels-photo-3358482.jpg" alt="" className="rounded-lg w-full h-full" />
                </div>
            </div>
        </div>
    );
};

export default Gallery;