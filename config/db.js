const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true
    });
    console.log("MongoDB Connected...")
  } catch(err) {
    console.log("Error DB");
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
}

module.exports = connectDB;

// User Mongodb atlas
// devconnector
// LwEwVfELwr2e2z4R
// API: 189.216.151.29
// Comment: api home