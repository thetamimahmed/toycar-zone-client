// import { useState } from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const Toys = () => {
    const [category, setCategory] = useState("SportsCar")
    const [toys, setToys] = useState([])

    useEffect(() => {
        fetch(`https://toycar-zone-server.vercel.app/alltoy/${category}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [category])

    return (
        <div className="max-w-6xl mx-5 lg:mx-auto my-20" data-aos="fade-up">
            <Tabs>
                <TabList className="flex justify-center space-x-10">
                    <Tab onClick={() => setCategory("SportsCar")} className="tab-btn">Sports Car</Tab>
                    <Tab onClick={() => setCategory("Truck")} className="tab-btn">Mini Truck</Tab>
                    <Tab onClick={() => setCategory("PoliceCar")} className="tab-btn">Police Car</Tab>
                </TabList>

                <div className="my-14">
                    <TabPanel className="grid grid-cols-1 lg:grid-cols-2 gap-4 place-items-center">
                        {
                            toys.slice(0, 2).map(toy => <div key={toy._id} className="card card-compact w-96 bg-base-100 shadow-xl">
                                <figure><img className="h-[300px] rounded-lg" src={toy?.image} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{toy?.name}</h2>
                                    <p className="font-bold">Price: ${toy?.price}</p>
                                    <div>
                                        <Rating
                                            style={{ maxWidth: 100 }}
                                            value={toy?.rating}
                                            readOnly
                                        />
                                    </div>
                                    <div className="card-actions justify-center">
                                        <button className="toyDetails-btn"><Link to={`/toys/${toy._id}`}>View Details</Link></button>
                                    </div>
                                </div>
                            </div>)
                        }
                    </TabPanel>
                    <TabPanel className="grid grid-cols-1 lg:grid-cols-2 gap-4 place-items-center">
                        {
                            toys.slice(0, 2).map(toy => <div key={toy._id} className="card card-compact w-96 bg-base-100 shadow-xl">
                                <figure><img className="h-[300px] rounded-lg" src={toy?.image} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{toy?.name}</h2>
                                    <p className="font-bold">Price: ${toy?.price}</p>
                                    <div>
                                        <Rating
                                            style={{ maxWidth: 100 }}
                                            value={toy?.rating}
                                            readOnly
                                        />
                                    </div>
                                    <div className="card-actions justify-center">
                                        <button className="toyDetails-btn"><Link to={`/toys/${toy._id}`}>View Details</Link></button>
                                    </div>
                                </div>
                            </div>)
                        }
                    </TabPanel>
                    <TabPanel className="grid grid-cols-1 lg:grid-cols-2 gap-4 place-items-center">
                        {
                            toys.slice(0, 2).map(toy => <div key={toy._id} className="card card-compact w-96 bg-base-100 shadow-xl">
                                <figure><img className="h-[300px] rounded-lg" src={toy?.image} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{toy?.name}</h2>
                                    <p className="font-bold">Price: ${toy?.price}</p>
                                    <div>
                                        <Rating
                                            style={{ maxWidth: 100 }}
                                            value={toy?.rating}
                                            readOnly
                                        />
                                    </div>
                                    <div className="card-actions justify-center">
                                        <button className="toyDetails-btn"><Link to={`/toys/${toy._id}`}>View Details</Link></button>
                                    </div>
                                </div>
                            </div>)
                        }
                    </TabPanel>
                </div>
            </Tabs>
        </div>
    );
};

export default Toys;