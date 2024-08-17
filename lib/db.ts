import mongoose from "mongoose";
import { buffer } from "stream/consumers";

const MONGODB_URI = process.env.MONGODB_URI;

const connect = async () => {
  const connectionState = mongoose.connection.readyState;

  if (connectionState === 1) {
    console.log("Already connected");
    return;
  }
  if (connectionState === 2) {
    console.log("Connecting...");
    return;
  }

  try {
    mongoose.connect(MONGODB_URI!, {
      dbName: "Next14RestAPI",
      bufferCommands: true,
    });
    console.log("Connected to MongoDB");
  } catch (err: any) {
    console.log("Error", err);
    throw new Error("Error connecting to MongoDB", err);
  }
};

export default connect;
