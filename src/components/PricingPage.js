import React from 'react';

const pricingPlans = [
  {
    title: 'Weekly Plan',
    price: '€5',
    description: 'Access premium predictions for 7 days.',
  },
  {
    title: 'Monthly Plan',
    price: '€11.11',
    description: 'Access premium predictions for 30 days.',
  },
  {
    title: 'Yearly Plan',
    price: '€111.10',
    description: 'Get access for the whole year and save more!',
  },
];

const PricingPage = () => {
  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Choose a Plan</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className="bg-white border rounded-lg shadow-md p-6 text-center"
          >
            <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
            <p className="text-2xl font-bold text-blue-600 mb-4">
              {plan.price}
            </p>
            <p className="mb-6">{plan.description}</p>
            <a
              href={
                plan.title === 'Weekly Plan'
                  ? 'https://buy.stripe.com/test_bIY2aSdS9bI24F2aEG'
                  : plan.title === 'Monthly Plan'
                  ? 'https://buy.stripe.com/test_3cs9Dk8xPcM6b3q000'
                  : 'https://buy.stripe.com/test_eVa9DkdS96nI5J66op'
              }
              target="_blank"
              rel="noreferrer"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Subscribe
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPage;
