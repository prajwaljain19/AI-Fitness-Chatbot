import { useEffect } from "react";

const CustomToast = ({ message, onClose, duration = 3000 }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [onClose, duration]);

  if (!message) return null;

  return (
    <div
      className="fixed top-5 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-lg shadow-lg bg-white text-red-500 
        flex items-center justify-center min-w-[250px] max-w-[350px] font-medium
        transition-all duration-300 ease-in-out opacity-100 animate-fade-in-out"
      role="alert"
    >
      {message}
    </div>
  );
};

export default CustomToast;
