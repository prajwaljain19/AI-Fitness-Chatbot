const mongoose = require('mongoose');

const connectDb = () => {
    try {
    mongoose.connect('mongodb://localhost:27017', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("MongoDB Connected...");
}
catch(err) {
    console.error("failed to connect to MongoDB", err);
}
};

module.exports = connectDb;

 
