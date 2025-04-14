
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Banner Section */}
      <div
        className="relative h-96 bg-cover bg-center text-white flex flex-col justify-center items-center"
        style={{ backgroundImage: "url('/banner.png')" }}
      >
        <div className="absolute top-4 right-4">
          <Link
            to="/login"
            className="bg-white text-black font-semibold py-2 px-4 rounded hover:bg-gray-200"
          >
            Login
          </Link>
        </div>
        <h1 className="text-4xl font-bold text-center px-4">
          Clear Helpline. Prediction Made Simple. Grow Your Money.
        </h1>
      </div>

      {/* Coming Soon Section */}
      <div className="flex-grow flex items-center justify-center">
        <p className="text-xl font-semibold text-gray-700 mt-8">⚠️ More features coming soon!</p>
      </div>
    </div>
  );
};

export default HomePage;
