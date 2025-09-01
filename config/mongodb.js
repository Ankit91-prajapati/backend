import mongoose from "mongoose";

const connectDB = async () =>{
    mongoose.connection.on('connected',()=>console.log("Database connected"));
    await mongoose.connect(`${process.env.MONGODB_URI}/mern-auth`);
  ssl: true, // optional, but explicit
});

};

export default connectDB;
