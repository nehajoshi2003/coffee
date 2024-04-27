import React from 'react';

const BackgroundImage = ({ imageUrl, children, opacity = 0.2 }) => {
  return (
    <div className="min-h-screen bg-cover bg-center flex items-center justify-center relative overflow-hidden">
      <div className={`absolute inset-0 bg-black opacity-${opacity}`} />
      <div className="z-10 px-4 py-8 text-center">{children}</div>
    </div>
  );
};

export default BackgroundImage;
