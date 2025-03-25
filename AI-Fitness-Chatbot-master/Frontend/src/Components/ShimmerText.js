import React from 'react';

const ShimmerText = ({ line = 3, gap = 5 }) => {
  // Create an array for the number of lines you want to show
  const lines = new Array(line).fill(0);

  return (
    <div className="space-y-4">
      {lines.map((_, index) => (
        <div
          key={index}
          className="w-full h-6 bg-gray-300 animate-pulse rounded"
          style={{ marginBottom: `${gap}px` }}
        ></div>
      ))}
    </div>
  );
};

export default ShimmerText;
