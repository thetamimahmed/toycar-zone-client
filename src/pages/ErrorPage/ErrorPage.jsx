import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://i.ibb.co/L1pSmnb/error.jpg")`}}>
            <div className="hero-overlay bg-opacity-75"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-9xl font-bold text-pink">404</h1>
                    <p className="mb-5 text-pink text-2xl font-bold">SORRY NOT FOUND ANY PAGE</p>
                    <button className="primary-btn font-bold"><Link to="/">Back To Homepage</Link></button>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;