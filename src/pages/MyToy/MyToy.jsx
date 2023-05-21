import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../Provider/AuthProvider";
import MyToyTable from "./MyToyTable";


const MyToy = () => {
    const { user } = useContext(AuthContext)
    const [toys, setToys] = useState([])
    const [selected, setSelected] = useState('true')
    console.log(selected)
    useEffect(() => {
        fetch(`https://toycar-zone-server.vercel.app/myToy?email=${user?.email}&sort=${selected}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [user?.email, selected])


    return (
        <div className="overflow-x-auto mb-10">
            <Helmet>
                <title>ToyCar Zone - My Toy</title>
            </Helmet>
            <div className="my-5 flex justify-center">
                <select onClick={(e)=>{setSelected(e.target.value)}} className="select select-bordered  max-w-xs">
                    <option value={false}>Price Ascending</option>
                    <option value={true} >Price Descending</option>
                </select>
            </div>
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Toy Name</th>
                        <th>Sub-category</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Description</th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        toys.map((toy, index) => <MyToyTable key={toy._id} toy={toy} index={index} setToys={setToys} toys={toys}></MyToyTable>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default MyToy;