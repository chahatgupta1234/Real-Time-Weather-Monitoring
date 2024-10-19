const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // console.log('trying to connectDB');
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB Connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

module.exports = connectDB;
