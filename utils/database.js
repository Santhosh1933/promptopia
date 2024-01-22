import mongoose from "mongoose";

let isConnected = false; //track connection status
export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB is Already connected");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "Share_prompt",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
    console.log("Successfully Connected to MongoDB!");
  } catch (error) {
    console.log(`Error Connecting to DB : ${error}`);
  }
};
