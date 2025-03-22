import axios from "axios";

export const getFitnessPlan = async (userData) => {
  try {
    console.log("Sending request with data:", userData);
    const response = await axios.post(
      "http://192.168.0.103:5000/api/chatbot/fitness-plan",
      userData
    );
    console.log("Received response:", response.data);
    return response.data.fitnessPlan;
  } catch (err) {
    console.error("Error fetching fitness plan:", err);
  }
};
