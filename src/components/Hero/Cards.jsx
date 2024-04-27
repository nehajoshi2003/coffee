import React from 'react';

const Card = ({ title, description, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col items-center p-4">
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <h2 className="text-xl font-bold text-center mt-4 mb-2">{title}</h2>
      <p className="text-gray-700 text-center">{description}</p>
    </div>
  );
};

const Cards = () => {
  const cardsData = [
    {
      title: 'Card 1 Title',
      description: 'This is a description for the first card.',
      image: 'https://via.placeholder.com/150x150', // Replace with your image
    },
    {
      title: 'Card 2 Title',
      description: 'This is a description for the second card.',
      image: 'https://via.placeholder.com/150x150', // Replace with your image
    },
    {
      title: 'Card 3 Title',
      description: 'This is a description for the third card.',
      image: 'https://via.placeholder.com/150x150', // Replace with your image
    },
    {
      title: 'Card 4 Title',
      description: 'This is a description for the fourth card.',
      image: 'https://via.placeholder.com/150x150', // Replace with your image
    },
  ];

  return (
    <div className="bg-black py-8 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> {/* Responsive grid */}
        {cardsData.map((card) => (
          <Card key={card.title} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
