import React from 'react';
import { useAuth } from '../firebase/AuthContext';
import { Link } from 'react-router-dom';
import CryptoSection from './CryptoSection';

const PaymentPage = () => {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return (
      <div className="text-center p-8 text-red-600">
        🔐 Please <Link to="/login" className="text-blue-600 underline">log in</Link> to access payment options.
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">Choose Your Plan</h2>

      <div className="space-y-4">
        <a
          href="https://buy.stripe.com/test_bIY2aSdS9bI24F2aEG"
          className="block bg-blue-600 text-white py-3 px-6 rounded hover:bg-blue-700 text-center"
        >
          Weekly Subscription – €5
        </a>
        <a
          href="https://buy.stripe.com/test_3cs9Dk8xPcM6b3q000"
          className="block bg-green-600 text-white py-3 px-6 rounded hover:bg-green-700 text-center"
        >
          Monthly Subscription – €11.11
        </a>
        <a
          href="https://buy.stripe.com/test_eVa9DkdS96nI5J66op"
          className="block bg-purple-600 text-white py-3 px-6 rounded hover:bg-purple-700 text-center"
        >
          Yearly Subscription – €111.10
        </a>
      </div>

      <h3 className="text-xl font-bold mt-8 mb-2">💸 Pay with Crypto</h3>
      <CryptoSection />
    </div>
  );
};

export default PaymentPage;
