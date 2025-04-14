import React from 'react';

const PricingPage = () => {
  const PricingPlans = [
    { title: "Weekly", price: "€5 / week" },
    { title: "Monthly", price: "€11.11 / month" },
    { title: "Yearly", price: "€111.10 / year" }
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center">Pricing Plans</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {pricingPlans.map((plan, index) => (
          <div key={index} className="border p-4 rounded shadow">
            <h2 className="text-xl font-semibold">{plan.title}</h2>
            <p>{plan.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPage;
