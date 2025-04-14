import React, { useEffect, useState } from 'react';
import { db } from '../firebase/config';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';

const PredictionList = ({ type = 'free', showDelete = false }) => {
  const [predictions, setPredictions] = useState([]);

  const fetchPredictions = async () => {
    const querySnapshot = await getDocs(collection(db, 'predictions'));
    const data = querySnapshot.docs
      .map((doc) => ({ id: doc.id, ...doc.data() }))
      .filter((item) => item.type === type);
    setPredictions(data);
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, 'predictions', id));
    fetchPredictions();
  };

  useEffect(() => {
    fetchPredictions();
  }, []);

  return (
    <div className="bg-white p-6 rounded shadow mt-6">
      <h2 className="text-xl font-bold mb-4 capitalize">{type} Predictions</h2>
      {predictions.length === 0 ? (
        <p className="text-gray-500">No predictions available.</p>
      ) : (
        <ul className="space-y-3">
          {predictions.map((item) => (
            <li
              key={item.id}
              className="border p-3 rounded flex justify-between items-center bg-gray-50"
            >
              <span>{item.text}</span>
              {showDelete && (
                <button
                  onClick={() => handleDelete(item.id)}
                  className="text-sm bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PredictionList;
