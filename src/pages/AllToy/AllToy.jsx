import { useState } from "react";
import { useLoaderData, Link } from "react-router-dom"
const AllToy = () => {
    const allToys = useLoaderData()
    const [toys, setToys] = useState(allToys)
    const [searchText, setSearchText] = useState("")
    const handleSearchToy = () => {
        fetch(`https://toycar-zone-server.vercel.app/getToysBySearch/${searchText}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }
    return (
        <div className="overflow-x-auto mb-10 p-5">
            {/* search by toy name  */}
            <div className="my-5 flex justify-center">
                <input onChange={(e) => { setSearchText(e.target.value) }} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs rounded-none" />
                <button onClick={handleSearchToy} className="search-btn rounded-none">Search</button>
            </div>
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Seller</th>
                        <th>Toy Name</th>
                        <th>Sub-category</th>
                        <th>Price</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        toys.map((toy, index) => {
                            return <tr key={toy._id}>
                                <th>{index + 1}</th>
                                <td>{toy.seller}</td>
                                <td>{toy.name}</td>
                                <td>{toy.category}</td>
                                <td>{toy.price}</td>
                                <td><button className="toyDetails-btn"><Link to={`/toys/${toy._id}`}>View Details</Link></button></td>
                            </tr>
                        })
                    }

                </tbody>
            </table>
        </div>
    );
};

export default AllToy;