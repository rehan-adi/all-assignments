const mongoose = require("mongoose");

const dbconnect = async() => {
   try {
     await mongoose.connect('mongodb://localhost:27017/courses', { dbName: "courses" });
     console.log('Connected to Mongo database');
   } catch (error) {
      console.error("DB connect failed", error);
      process.exit(1);
   }
}

module.exports = dbconnect;
