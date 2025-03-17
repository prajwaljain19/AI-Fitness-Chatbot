import React from "react";
import { useState } from "react";
import { getFitnessPlan } from "../utils/api";
import ResponseModal from "./ResponseModal";

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
  const [loading, setLoading] = useState(true);
  const [isModelopen, setisModelopen] = useState(false);

  const handleChange = (e) => {
    console.log("Handling change for:", e.target.name, e.target.value);
    setUserinput({ ...Userinput, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await getFitnessPlan(Userinput);
    setResponse(result);
    setLoading(false);
    setisModelopen(true);
  };
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-600 to-purple-700 text-white font-sans">
      <div className="container mx-auto px-4 py-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-2">
            <span className="font-bold text-red-700">Fit</span>
            <span className="text-white">Bot</span>
          </h1>
          <p className="text-xl text-gray-300">
            Your Personalized Fitness Guide
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col space-y-3">
              <label htmlFor="name" className="text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                onChange={handleChange}
                className="p-3 rounded-lg border border-gray-300 text-black focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="flex flex-col space-y-3">
              <label htmlFor="age" className="text-gray-700">
                Age
              </label>
              <input
                type="number"
                name="age"
                placeholder="Enter your age"
                onChange={handleChange}
                className="p-3 rounded-lg border border-gray-300 text-black focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="flex flex-col space-y-3">
              <label htmlFor="height" className="text-gray-700">
                Height (cm)
              </label>
              <input
                type="number"
                name="height"
                placeholder="Enter your height in cm"
                onChange={handleChange}
                value={Userinput.height}
                className="p-3 rounded-lg border border-gray-300 text-black focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="flex flex-col space-y-3">
              <label htmlFor="weight" className="text-gray-700">
                Weight (kg)
              </label>
              <input
                type="number"
                name="weight"
                placeholder="Enter your weight in kg"
                onChange={handleChange}
                value={Userinput.weight}
                className="p-3 rounded-lg border border-gray-300 text-black focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="flex flex-col space-y-3">
              <label htmlFor="goal" className="text-gray-700">
                Fitness Goal
              </label>
              <select
                name="goal"
                onChange={handleChange}
                value={Userinput.goal}
                className="p-3 rounded-lg border border-gray-300 text-black focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select Goal</option>
                <option value="Fat Loss">Fat Loss</option>
                <option value="Muscle Gain">Muscle Gain</option>
              </select>
            </div>
            <div className="flex flex-col space-y-3">
              <label htmlFor="activitylevel" className="text-gray-700">
                Activity Level
              </label>
              <select
                name="activitylevel"
                onChange={handleChange}
                value={Userinput.activitylevel}
                className="p-3 rounded-lg border border-gray-300 text-black focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select Activity Level</option>
                <option value="Sedentary">Sedentary</option>
                <option value="Active">Active</option>
              </select>
              
            </div>
            <div className="flex flex-col space-y-3">
              <label htmlFor=" diettype" className="text-gray-700">
                 Diet Type
                <br />
              </label>
              <select
                name="diettype"
                onChange={handleChange}
                value={Userinput.diettype}
                className="p-3 rounded-lg border border-gray-300 text-black focus:ring-2 focus:ring-blue-500"
                required
              >
                 <option value="">Select Diet Type</option>
                <option value="">Vegiterian</option>
                <option value="Sedentary">Non-Vegiterian</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              Get My Fitness Plan
            </button>
          </form>
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
