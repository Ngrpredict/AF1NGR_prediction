import React from 'react';

const PredictionForm = () => {
  return (
    <div className="p-6">
      <h2>Add Prediction</h2>
      <form>
        <input type="text" placeholder="Team A vs Team B" className="border p-2 w-full" />
        <button type="submit" className="mt-4 bg-blue-600 text-white py-2 px-4 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default PredictionForm;
