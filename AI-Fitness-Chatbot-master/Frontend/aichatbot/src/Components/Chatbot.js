import React from "react";
import { useState } from "react";
import { getFitnessPlan } from "../utils/api";
import { ShimmerText } from "react-shimmer-effects";

const Chatbot = () => {
  const [Userinput, setUserinput] = useState({
    name: "",
    age: "",
    height: "",
    weight: "",
    goal: "",
    activitylevel: "",
  });

  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(true);

  const handleChange = (e) => {
    setUserinput({ ...Userinput, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await getFitnessPlan(Userinput);
    setResponse(result);
    setLoading(false);
  };
  return (
    <>
      <div className="text-xl mx-6 p-6 text-red-600 ">Fitness Chatbot</div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="height"
          placeholder="Height (cm)"
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="weight"
          placeholder="Weight (kg)"
          onChange={handleChange}
          required
        />
        <select name="goal" onChange={handleChange} required>
          <option value="">Select goal</option>
          <option value="Fat Loss">Fat Loss</option>
          <option value="Muscle Gain">Muscle Gain</option>
        </select>
        <select name="activityLevel" onChange={handleChange} required>
          <option value="">Select Activity Level</option>
          <option value="Sedentary">Sedentary</option>
          <option value="Active">Active</option>
        </select>
        <button type="submit">Get Plan</button>
      </form>
      {response && (
        <div>
          <h3>Your Fitness Plan:</h3>
          {loading ? <ShimmerText line={5} gap={10} /> : <p>{response}</p>}
        </div>
      )}
    </>
  );
};

export default Chatbot;
