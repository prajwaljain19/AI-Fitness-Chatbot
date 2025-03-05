const axios = require('axios');
const User = require("../models/User");

exports.getfitnessplan = async (req, res) => {
    const { name, age, height, weight, goal, activityLevel } = req.body; 

    try {
        let user = await User.findOne({ name });
        if(!user) {
            user = new User({ name, age, height, weight, goal, activityLevel });
            await user.save();
        }

        const deepSeekResponse = await axios.post(
            "https://openrouter.ai/api/v1/chat/completions",
            {
                model: "deepseek/deepseek-r1:free",
                messages: [
                    {
                        role: "user",
                        content: `Create a fitness plan for a ${age}-year-old, ${height}cm, ${weight}kg person aiming for ${goal} with ${activityLevel} activity level. Include a workout routine and a diet plan.It must be accurate and professional`,
                    },
                ],
            },
            {
                headers: {
                    "Authorization": `Bearer ${process.env.BEARER_TOKEN}`,
                    "Content-Type": "application/json",
                    "HTTP-Referer": "<YOUR_SITE_URL>",  
                    "X-Title": "<YOUR_SITE_NAME>",  
                },
            }
        );
        const fitnessPlan = deepSeekResponse.data.choices[0].message.content.trim();
        res.json({fitnessPlan});
    }
    catch (err) {
        console.error("Error fetching fitness plan", err);
        res.status(500).send("Error fetching fitness plan");
    }
};
