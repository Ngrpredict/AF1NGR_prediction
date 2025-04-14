import React, { useEffect, useState } from 'react';
import { db } from '../firebase/config';
import { collection, getDocs } from 'firebase/firestore';

const PremiumPredictions = () => {
  const [predictions, setPredictions] = useState([]);

  const fetchPremiumPredictions = async () => {
    const querySnapshot = await getDocs(collection(db, 'predictions'));
    const data = querySnapshot.docs
      .map((doc) => doc.data())
      .filter((item) => item.type === 'premium');
    setPredictions(data);
  };

  useEffect(() => {
    fetchPremiumPredictions();
  }, []);

  return (
    <div className="max-w-2xl mx-auto mt-6 p-4 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">💎 Premium Predictions</h2>
      {predictions.length === 0 ? (
        <p className="text-gray-500">No premium predictions available yet.</p>
      ) : (
        <ul className="space-y-2">
          {predictions.map((item, index) => (
            <li key={index} className="p-3 border rounded bg-gray-50">
              {item.text}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PremiumPredictions;
