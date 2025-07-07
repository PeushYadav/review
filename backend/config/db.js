const mongoose = require('mongoose');

const connectDB = async () => {
  const MONGO_URI = 'mongodb://localhost:27017/users'; // Connect to local MongoDB

  console.log('DEBUG: MONGO_URI =', MONGO_URI);

  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ MongoDB connected (Local)');
  } catch (err) {
    console.error('❌ MongoDB connection error:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
