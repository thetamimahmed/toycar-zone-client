import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

import MyToyTable from "./MyToyTable";

const MyToy = () => {
    const {user} = useContext(AuthContext)
    const [toys, setToys] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/myToy?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setToys(data))
    },[])

    
    return (
        <div className="overflow-x-auto mb-10">
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