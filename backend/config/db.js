require('dotenv').config();
const mongoose = require('mongoose');


const connectDB = async () => {
  try {
    console.log('DEBUG: MONGO_URI =', process.env.MONGO_URI);

    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ MongoDB connected');
  } catch (err) {
    console.error('❌ MongoDB connection error:', err.message);
    process.exit(1); // Stop app if DB fails
  }
  console.log('MONGO_URI:', process.env.MONGO_URI);

};

module.exports = connectDB;
