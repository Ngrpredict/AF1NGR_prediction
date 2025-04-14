import React from 'react';
import { useAuth } from '../firebase/AuthContext';
import { Link } from 'react-router-dom';

const UserDashboard = () => {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return (
      <div className="text-center p-6 text-red-600">
        You must be logged in to access the dashboard.
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">Welcome, {currentUser.email}</h2>
      <p className="mb-6 text-gray-600">Here’s your personal dashboard.</p>
      <div className="space-y-4">
        <Link
          to="/premium-predictions"
          className="block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-center"
        >
          View Premium Predictions
        </Link>
        <Link
          to="/payment"
          className="block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 text-center"
        >
          Upgrade / Pay Subscription
        </Link>
        <Link
          to="/contact"
          className="block bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 text-center"
        >
          Contact Support
        </Link>
      </div>
    </div>
  );
};

export default UserDashboard;
