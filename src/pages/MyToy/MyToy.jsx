import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../Provider/AuthProvider";

import MyToyTable from "./MyToyTable";

const MyToy = () => {
    const {user} = useContext(AuthContext)
    const [toys, setToys] = useState([])
    useEffect(()=>{
        fetch(`https://toycar-zone-server.vercel.app/myToy?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setToys(data))
    },[user?.email])

    
    return (
        <div className="overflow-x-auto mb-10">
            <Helmet>
                <title>My Toy</title>
            </Helmet>
            <div className="flex justify-end my-5">
                <button className="search-btn mx-5">Low price to high</button>
                <button  className="search-btn mx-5">High price to low</button>
            </div>
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Toy Name</th>
                        <th>Sub-category</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        toys.map((toy, index)=> <MyToyTable key={toy._id} toy={toy} index={index} setToys={setToys} toys={toys}></MyToyTable>)
                    }
                    
                </tbody>
            </table>
        </div>
    );
};

export default MyToy;