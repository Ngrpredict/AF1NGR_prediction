import React, { useState } from 'react';
import { db } from '../firebase/config';
import { collection, addDoc } from 'firebase/firestore';

const PredictionForm = () => {
  const [prediction, setPrediction] = useState('');
  const [type, setType] = useState('free');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!prediction) return;

    try {
      await addDoc(collection(db, 'predictions'), {
        text: prediction,
        type: type,
        timestamp: new Date(),
      });
      setPrediction('');
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } catch (error) {
      console.error('Error adding prediction:', error);
    }
  };

  return (
    <div className="bg-white p-6 rounded shadow-md max-w-xl mx-auto mt-6">
      <h2 className="text-xl font-bold mb-4">Add New Prediction</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          value={prediction}
          onChange={(e) => setPrediction(e.target.value)}
          placeholder="Enter your prediction here..."
          className="w-full border p-3 rounded"
          rows={4}
          required
        ></textarea>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="w-full border p-2 rounded"
        >
          <option value="free">Free</option>
          <option value="premium">Premium</option>
        </select>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Save Prediction
