import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-200 to-customBlue text-white">
            <h1 className="text-6xl font-bold mb-4 animate-bounce">404</h1>
            <h2 className="text-2xl font-semibold">Page Not Found</h2>
            <p className="text-lg text-gray-200 mt-2 mb-6 text-center px-4">
                Oops! The page you are looking for doesn’t exist. It might have been moved or deleted.
            </p>

            <Link to="/">
                <button className="px-6 py-3 text-lg font-medium bg-white text-customBlue rounded-lg shadow-lg hover:bg-indigo-100 transition-transform transform hover:scale-105">
                    Go Back Home
                </button>
            </Link>
        </div>
    );
};

export default NotFound;
