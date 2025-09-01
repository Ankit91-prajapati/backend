import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/mern-auth`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    mongoose.connection.on('connected', () => {
      console.log('Database connected');
    });
  } catch (err) {
    console.error('MongoDB connection error:', err);
  }
};

export default connectDB;
