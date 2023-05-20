import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {useLoaderData} from "react-router-dom"

const UpdateToy = () => {
    const toy = useLoaderData()
    const {_id, price, quantity, description } = toy ;
    const handleUpdateToy = event => {
        event.preventDefault()
        const form = event.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        const updateToy = {
           price, quantity, description
        }
        console.log(updateToy)

        fetch(`https://toycar-zone-server-thetamimahmed.vercel.app/toys/${_id}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(updateToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    toast("Toy Updated Successfully");
                }
            })
    }
    return (
        <div>
            <form onSubmit={handleUpdateToy}>
                <div className="p-5 mb-10">
                    <div className="card-body grid grid-cols-1 lg:grid-cols-2">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="number" name="price" defaultValue={price} placeholder="price" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Quantity</span>
                            </label>
                            <input type="number" name="quantity" placeholder="quantity" className="input input-bordered" required defaultValue={quantity} />
                        </div>
                    </div>
                        <div className="form-control p-8 mt-[-50px]">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <textarea required placeholder="Description" defaultValue={description} name="description" className="textarea textarea-bordered textarea-lg w-full" ></textarea>
                        </div>
                    <div className="form-control mt-6 w-3/4 mx-auto">
                        <input className="btn primary-btn" type="submit" value="UPDATE TOY" />
                    </div>
                </div>
            </form>
            <ToastContainer/>
        </div>
    );
};

export default UpdateToy;