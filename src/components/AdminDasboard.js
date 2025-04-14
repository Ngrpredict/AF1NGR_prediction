import React, { useState, useEffect } from 'react';
import { db } from '../firebase/config';
import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore';

const AdminDashboard = () => {
  const [prediction, setPrediction] = useState('');
  const [type, setType] = useState('free');
  const [predictions, setPredictions] = useState([]);

  const handleAddPrediction = async () => {
    if (!prediction) return;
    await addDoc(collection(db, 'predictions'), {
      text: prediction,
      type: type,
      timestamp: new Date(),
    });
    setPrediction('');
    fetchPredictions();
  };

  const fetchPredictions = async () => {
    const querySnapshot = await getDocs(collection(db, 'predictions'));
    const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
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
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>

      {/* Form */}
      <div className="mb-6">
        <input
          className="p-2 border w-full mb-2"
          placeholder="Enter prediction"
          value={prediction}
          onChange={(e) => setPrediction(e.target.value)}
        />
        <select
          className="p-2 border w-full mb-2"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="free">Free</option>
          <option value="premium">Premium</option>
        </select>
        <button
          onClick={handleAddPrediction}
          className="bg-blue-600 text-white px-
