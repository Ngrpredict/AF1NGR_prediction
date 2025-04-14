import React from 'react';

const pricingPage = [
  {
    title: 'Weekly Plan',
    price: '€5',
    description: 'Best for short-term bettors.',
    link: 'https://buy.stripe.com/test_bIY2aSdS9bI24F2aEG',
  },
  {
    title: 'Monthly Plan',
    price: '€11.11',
    description: 'Perfect for regular users.',
    link: 'https://buy.stripe.com/test_3cs9Dk8xPcM6b3q000',
  },
  {
    title: 'Yearly Plan',
    price: '€111.10',
    description: 'Save big with a full year of access.',
    link: 'https://buy.stripe.com/test_eVa9DkdS96nI5J66op',
  },
];

const PricingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <h2 className="text-4xl font-bold text-center mb-8 text-blue-700">Choose Your Plan</h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className="bg-white rounded shadow p-6 flex flex-col items-center justify-between"
          >
            <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
            <p className="text-3xl font-bold mb-2">{plan.price}</p>
            <p className="text-gray-600 mb-4 text-center">{plan.description}</p>
            <a
              href={plan.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Subscribe Now
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPage;
