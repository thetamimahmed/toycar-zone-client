import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet-async";

const AddToy = () => {
    const { user } = useContext(AuthContext)

    const handleAddToy = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.toyName.value;
        const seller = form.sellerName.value;
        const email = user?.email;
        const category = form.category.value;
        const price = parseFloat(form.price.value);
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const image = form.photo.value;
        const description = form.description.value;
        const newToy = {
            name, seller, email, category, price, rating, quantity, image, description
        }
        console.log(newToy)

        fetch('https://toycar-zone-server.vercel.app/toys', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    toast("Toy Added Successfully");
                    form.reset()
                }
            })
    }
    return (
        <div>
            <Helmet>
                <title>ToyCar Zone - Add Toy</title>
            </Helmet>
            <h1 className='text-4xl font-bold text-pink text-center mt-5'>Add Your Toy</h1>
            
            <form onSubmit={handleAddToy}>
                <div className="p-5 mb-10">
                    <div className="card-body grid grid-cols-1 lg:grid-cols-2">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text" >Toy Name</span>
                            </label>
                            <input type="name" name="toyName" placeholder="toy name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text" >Seller Name</span>
                            </label>
                            <input type="name" name="sellerName" defaultValue={user?.displaName} placeholder="name" required className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text" >Seller Email</span>
                            </label>
                            <input type="email" name="email" defaultValue={user?.email} placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text" >Category</span>
                            </label>
                            <div className="input-group">
                                <select required name="category" className="select select-bordered w-full max-w-xs">
                                    {/* <option disabled selected>Pick category</option> */}
                                    <option value={"SportsCar"}>SportsCar</option>
                                    <option value={"Truck"}>Truck</option>
                                    <option value={"PoliceCar"}>PoliceCar</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="number" name="price" placeholder="price" className="input input-bordered" step="any" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input type="number" name="rating" placeholder="Rating" className="input input-bordered"  min="1" max="5" step="any" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Quantity</span>
                            </label>
                            <input type="number" name="quantity" placeholder="quantity" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <textarea required placeholder="Description" name="description" className="textarea textarea-bordered textarea-lg w-full" ></textarea>
                        </div>
                    </div>
                    <div className="form-control mt-6 w-3/4 mx-auto">
                        <input className="btn primary-btn" type="submit" value="ADD TOY" />
                    </div>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default AddToy;