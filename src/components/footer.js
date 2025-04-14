import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-4 mt-10">
      <div className="container mx-auto text-center space-y-2">
        <p className="text-sm">© {new Date().getFullYear()} NGR Prediction. All rights reserved.</p>
        <div className="flex justify-center space-x-4 text-sm">
          <Link to="/contact" className="hover:underline">
            Contact Us
          </Link>
          <Link to="/free-predictions" className="hover:underline">
            Free Predictions
          </Link>
          <Link to="/premium-predictions" className="hover:underline">
            Premium Predictions
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
