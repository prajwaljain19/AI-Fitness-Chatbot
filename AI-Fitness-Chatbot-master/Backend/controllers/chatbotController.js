const axios = require('axios');
const User = require("../models/User");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const { models } = require('mongoose');


const genAI  = new GoogleGenerativeAI(process.env.BEARER_TOKEN);

exports.getfitnessplan = async (req, res) => {
    const { name, age, height, weight, goal, activityLevel } = req.body; 

    try {
        let user = await User.findOne({ name });
        if(!user) {
            user = new User({ name, age, height, weight, goal, activityLevel });
            await user.save();
        }

        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

        const prompt = `Create a fitness plan for a ${age}-year-old, ${height}cm, ${weight}kg person aiming for ${goal} with ${activityLevel} activity level. 
        **Workout Routine:** Provide a structured weekly exercise plan. 
        **Diet Plan:** Suggest a daily meal breakdown for optimal results.
        Format it clearly with bullet points.`;

        const result = await model.generateContent(prompt);
        const fitnessPlan =  result.response.text();

        res.json({ fitnessPlan });
    }   
    catch (err) {
        console.error("Error fetching fitness plan", err);
        res.status(500).send("Error fetching fitness plan");
    }
};
