import mongoose from "mongoose";

const connectDB = async () =>{
    mongoose.connection.on('connected',()=>console.log("Database connected"));
    await mongoose.connect(`${process.env.MONGODB_URI}/mern-auth`);
useNewUrlParser: true,
  useUnifiedTopology: true,
  ssl: true, //
});

};

export default connectDB;
