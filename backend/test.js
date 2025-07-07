const mongoose = require('mongoose');

const MONGO_URI = 'mongodb://peushyadav07:HnGDiOrey7qmHcoN@cluster0-shard-00-00.euzb4z2.mongodb.net:27017,cluster0-shard-00-01.euzb4z2.mongodb.net:27017,cluster0-shard-00-02.euzb4z2.mongodb.net:27017/users?ssl=true&replicaSet=atlas-ru11rj-shard-0&authSource=admin&retryWrites=true&w=majority';

mongoose.connect(MONGO_URI)
  .then(() => console.log("✅ Connection successful"))
  .catch((err) => console.error("❌ Connection failed:", err.message));
