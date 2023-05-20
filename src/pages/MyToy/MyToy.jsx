import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import {Link} from "react-router-dom"
import { FaEdit, FaBitbucket } from "react-icons/fa";

const MyToy = () => {
    const {user} = useContext(AuthContext)
    const [toys, setToys] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/myToy?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setToys(data))
    },[])
    console.log(toys)
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
                        toys.map((toy, index)=> {
                        return <tr key={toy._id}>
                            <th>{index+1}</th>
                            <td>{toy.name}</td>
                            <td>{toy.category}</td>
                            <td>{toy.price}</td>
                            <td>{toy.description}</td>
                            <td><button className="toyDetails-btn"><Link to={`/toys/${toy._id}`}>View Details</Link></button></td>
                            <td className="text-2xl text-blue hover:text-pink cursor-pointer"><Link to={`/updateToy/${toy._id}`}><FaEdit /></Link></td>
                            <td className="text-2xl text-blue hover:text-pink cursor-pointer"><FaBitbucket /></td>
                        </tr>
                        })
                    }
                    
                </tbody>
            </table>
        </div>
    );
};

export default MyToy;