const mongoose = require('mongoose');

const connectDb = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/yourDB');  
        console.log("MongoDB Connected...");
    } catch (err) {
        console.error("Failed to connect to MongoDB", err);
        process.exit(1);  
    }
};

module.exports = connectDb;
