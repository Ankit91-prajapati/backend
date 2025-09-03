import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const uri = process.env.MONGODB_URI; // already includes /mern-auth

    if (!uri) {
      throw new Error("❌ MONGODB_URI is missing in environment variables");
    }

    await mongoose.connect(uri );

    mongoose.connection.on("connected", () => {
      console.log("✅ MongoDB connected");
    });

    mongoose.connection.on("error", (err) => {
      console.error("❌ MongoDB connection error:", err);
    });
  } catch (err) {
    console.error("❌ Initial MongoDB connection error:", err);
    process.exit(1);
  }
};

export default connectDB;
