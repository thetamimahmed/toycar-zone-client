import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

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
        <div>
            <h1>My Toys: {toys.length}</h1>
        </div>
    );
};

export default MyToy;