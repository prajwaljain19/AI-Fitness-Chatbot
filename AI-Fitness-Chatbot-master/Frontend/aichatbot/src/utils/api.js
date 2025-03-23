// import axios from "axios";

// export const getFitnessPlan = async (userData) => {
//   try {
//     console.log("Sending request with data:", userData);
//     const response = await axios.post(
//       "http://192.168.0.103:5000/api/chatbot/fitness-plan",
//       userData
//     );
//     console.log("Received response:", response.data);
//     return response.data.fitnessPlan;
//   } catch (err) {
//     console.error("Error fetching fitness plan:", err);
//   }
// };

import axios from "axios";

// Function to fetch fitness plan
export const getFitnessPlan = async (userInput) => {
  try {
    console.log("Requesting Fitness Plan with data:", userInput);
    
    const response = await axios.post("http://192.168.0.103:5000/api/chatbot/fitness-plan", userInput);
    
    console.log("Received Fitness Plan:", response.data);
    
    return response.data.fitnessPlan;
  } catch (error) {
    console.error("Error fetching fitness plan:", error.response?.data || error.message);
    return null; // Return null to handle errors gracefully
  }
};

// Function to fetch diet plan
export const getDietPlan = async (userInput) => {
  try {
    console.log("Requesting Diet Plan with data:", userInput);
    
    const response = await axios.post("http://192.168.0.103:5000/api/chatbot/diet-plan", userInput);
    
    console.log("Received Diet Plan:", response.data);
    
    return response.data.dietPlan;
  } catch (error) {
    console.error("Error fetching diet plan:", error.response?.data || error.message);
    return null;  
  }
};


