import { useLoaderData, Link } from "react-router-dom"
const AllToy = () => {
    const allToys = useLoaderData()
    console.log(allToys)
    return (
        <div className="overflow-x-auto mb-10 p-5">
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
                        allToys.map((toy, index)=> {
                        return <tr key={toy._id}>
                            <th>{index+1}</th>
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