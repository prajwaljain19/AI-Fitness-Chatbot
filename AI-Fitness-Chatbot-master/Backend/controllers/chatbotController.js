const axios = require('axios');
const User = require("../models/User");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const { models } = require('mongoose');

const genAI = new GoogleGenerativeAI(process.env.BEARER_TOKEN);

exports.getfitnessplan = async (req, res) => {
    const { name, age, height, weight, goal, activityLevel, diettype } = req.body;

    try {
        let user = await User.findOne({ name });
        if (!user) {
            user = new User({ name, age, height, weight, goal, activityLevel, diettype });
            await user.save();
        }

        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

        const prompt = `Create a personalized fitness plan for:
- Age: ${age} years
- Height: ${height} cm
- Weight: ${weight} kg
- Goal: ${goal}
- Activity Level: ${activityLevel}
- Diet Type: ${diettype}

## 🏋️‍♂️ Workout Routine
Provide a structured **weekly exercise plan with targeted muscle groups and suggested exercises. Include:
- Strength Training 💪** (Upper & Lower Body)
- Cardio 🏃‍♂️** (Recommended based on goal)
- Flexibility & Recovery 🧘‍♂️** (Stretching/Yoga)

## 🥗 Diet Plan ${diettype === "Vegetarian" ? "🌱" : "🍗"}
Suggest a daily meal breakdown with:
- Breakfast ☀️
- Lunch 🍱
- Dinner 🌙
- Snacks 🍎
Ensure balance in protein, carbs, and fats** based on ${diettype === "Vegetarian" ? "plant-based protein sources (lentils, tofu, quinoa)" : "lean meats, eggs, fish"} for optimal results.

Format clearly using bullet points and sections, with **engaging fitness-related emojis** for clarity.`;

        const result = await model.generateContent(prompt);
        const fitnessPlan = await result.response.text();   

        res.json({ fitnessPlan });   
    }
    catch (err) {
        console.error("Error fetching fitness plan", err);
        res.status(500).json({ error: "Error fetching fitness plan" });
    }
};
