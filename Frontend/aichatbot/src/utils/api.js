import axios from "axios";

export const getFitnessPlan = async (userData) => {
    try {
        const response = await axios.post("http://localhost:5000/api/chatbot/fitness-plan", userData);
        return response.data.fitnessPlan;
    }
    catch (err) {
        console.error('Error fetching fitness plan:', err);
    }
};