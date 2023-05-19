import { useLoaderData } from "react-router-dom"
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const SingleToy = () => {
    const toy = useLoaderData()
    const { name, image, price, category, seller, rating, quantity, description } = toy
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">{name}</h1>
                    <div className="mt-3 ml-2">
                        <h3 className="text-xl font-bold mb-2">Price: ${price}</h3>
                        <h3 className="text-lg font-bold mb-2">Seller: {seller}</h3>
                        <h3 className="text-lg font-bold mb-2">Category: {category}</h3>
                        <h3 className="text-lg font-bold mb-2">Quantity: {quantity}</h3>
                        <div>
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={rating}
                                readOnly
                            />
                        </div>
                        <p className="py-6">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleToy;