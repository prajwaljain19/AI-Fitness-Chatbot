import React, { useState } from "react";
import { getFitnessPlan } from "../utils/api";
import ResponseModal from "./ResponseModal";
import Loader from "./Loader";  
import Pattern from "./Pattern";

const Chatbot = () => {
  const [Userinput, setUserinput] = useState({
    name: "",
    age: "",
    height: "",
    weight: "",
    goal: "",
    activitylevel: "",
    diettype: ""
  });

  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isModelopen, setisModelopen] = useState(false);

  const handleChange = (e) => {
    setUserinput({ ...Userinput, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await getFitnessPlan(Userinput);

       
      setResponse(result);
      setisModelopen(true);
    } catch (error) {
      console.error("Error fetching fitness plan:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex justify-center items-center over">
      <Pattern />
      <div className="relative z-10 w-full max-w-3xl p-6 bg-white rounded-xl shadow-xl">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">
            <span className="text-red-700">Fit</span>Bro
          </h1>
          <p className="text-lg text-gray-600">Your Personalized Fitness Guide</p>
        </div>

        <div className="max-h-[500px] overflow-y-auto p-4">
          {loading ? (
            <Loader />
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {["name", "age", "height", "weight"].map((field) => (
                <div key={field} className="flex flex-col space-y-2">
                  <label htmlFor={field} className="text-gray-700 capitalize">
                    {field}
                  </label>
                  <input
                    type={field === "age" || field === "height" || field === "weight" ? "number" : "text"}
                    name={field}
                    placeholder={`Enter your ${field}`}
                    onChange={handleChange}
                    value={Userinput[field]}
                    className="p-3 rounded-lg border border-gray-300 text-black focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              ))}
              
              {[
                { name: "goal", options: ["Fat Loss", "Muscle Gain"] },
                { name: "activitylevel", options: ["Sedentary", "Active"] },
                { name: "diettype", options: ["Vegetarian", "Non-Vegetarian"] }
              ].map(({ name, options }) => (
                <div key={name} className="flex flex-col space-y-2">
                  <label htmlFor={name} className="text-gray-700 capitalize">
                    {name.replace(/([A-Z])/g, " $1")}
                  </label>
                  <select
                    name={name}
                    onChange={handleChange}
                    value={Userinput[name]}
                    className="p-3 rounded-lg border border-gray-300 text-black focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select {name}</option>
                    {options.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              ))}

              <button
                type="submit"
                className="w-full py-3 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300"
              >
                Get My Fitness Plan
              </button>
            </form>
          )}
        </div>

        {isModelopen && response && (
          <ResponseModal
            response={response}
            onClose={() => setisModelopen(false)}
          />
        )}
      </div>
    </div>
  );
};

export default Chatbot;
