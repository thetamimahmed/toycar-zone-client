import { Rating } from '@smastrom/react-rating'

const Reviews = () => {
    return (
        <div className='my-28 max-w-6xl mx-auto'>
            <h1 className='text-center text-blue text-4xl font-bold'>What They Say</h1>
            <h3 className='text-center text-pink mt-1 mb-10 font-bold'>CUSTOMER TESTIMONIALS</h3>
            <div className="  grid grid-cols-1 lg:grid-cols-3 place-items-center gap-20">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/s1Qh1yV/pexels-photo-3782183.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-2xl text-blue">Mark Andrew</h2>
                        <div>
                            <Rating
                                style={{ maxWidth: 90 }}
                                value={5}
                                readOnly
                            />
                        </div>
                        <p className='text-lg'>I love Toy Car Zone! As a collector, I appreciate the authentic details and craftsmanship of the toys. Highly recommended! - <span className='text-pink font-bold'>Mark A.</span></p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/pKxGb8Y/pexels-photo-4342400.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-2xl text-blue">Tim David</h2>
                        <div>
                            <Rating
                                style={{ maxWidth: 90 }}
                                value={4.5}
                                readOnly
                            />
                        </div>
                        <p className='text-lg'>Toy Car Zone is my go-to destination for toy cars for my kids. They have a wide variety of options to choose from, and the prices are reasonable. - <span className='text-pink font-bold'>Tim D.</span></p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/VT1Y5Nw/pexels-photo-3760263.webp" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-2xl text-blue">Emerson Royal</h2>
                        <div>
                            <Rating
                                style={{ maxWidth: 90 }}
                                value={4}
                                readOnly
                            />
                        </div>
                        <p className='text-lg'>ToyCar Zone exceeded my expectations! The website offers a fantastic toy cars.The toys are good. Highly recommend!- <span className='text-pink font-bold'>Emerson R.</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;