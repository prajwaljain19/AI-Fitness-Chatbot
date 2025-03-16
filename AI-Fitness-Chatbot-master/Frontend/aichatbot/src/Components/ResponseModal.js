import React from "react";

const ResponseModal = ({ response, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Your Fitness Plan</h2>
        <p className="text-gray-700 mb-4">{response}</p>
        <button
          className="w-full py-2 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ResponseModal;
