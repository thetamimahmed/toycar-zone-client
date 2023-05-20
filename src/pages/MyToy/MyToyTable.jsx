import { Link } from "react-router-dom"
import { FaEdit, FaBitbucket } from "react-icons/fa";
import Swal from "sweetalert2";

const MyToyTable = ({ toy, index, toys, setToys }) => {

    const handleDelete = (id) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://toycar-zone-server-thetamimahmed.vercel.app/toys/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount === 1) {
                            Swal.fire(
                                'Deleted!',
                                'Toy has been deleted.',
                                'success'
                            )
                        }
                        const remaining = toys.filter(toyCar => toyCar._id !== id);
                        setToys(remaining)
                    })

            }
        })

    }
    return (
        <tr key={toy._id}>
            <th>{index + 1}</th>
            <td>{toy.name}</td>
            <td>{toy.category}</td>
            <td>{toy.price}</td>
            <td>{toy.description}</td>
            <td><button className="toyDetails-btn"><Link to={`/toys/${toy._id}`}>View Details</Link></button></td>
            <td className="text-2xl text-blue hover:text-pink cursor-pointer"><Link to={`/updateToy/${toy._id}`}><FaEdit /></Link></td>
            <td className="text-2xl text-blue hover:text-pink cursor-pointer" onClick={() => { handleDelete(toy._id) }}><FaBitbucket /></td>
        </tr>
    );
};

export default MyToyTable;