import React, { useEffect } from "react";
 

const ResponseModal = ({ response, onClose }) => {

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    }
  }, []);
  return (
    <div className="fixed inset-0 bg-black bg-opacity-100 flex justify-center items-center z-50 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl w-full max-h-[100vh] overflow-y-auto relative">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
          YOUR FITNESS PLAN
        </h2>
        <button
          onClick={onClose}
          className="bg-red-600 text-white px-3 py-1 rounded-md text-sm hover:bg-red-700 transition absolute top-4 right-3"
        >
          ✕
        </button>
        <div className="text-blue-700 whitespace-pre-line p-4 border rounded-lg bg-gray-160 max-h-[70vh] overflow-y-auto">
          {response}
        </div>
      </div>
    </div>
  );
};

export default ResponseModal;