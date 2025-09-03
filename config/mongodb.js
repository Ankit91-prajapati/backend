import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/mern-auth`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      ssl: true,
    });

    mongoose.connection.on('connected', () => {
      console.log('✅ MongoDB connected');
    });

    mongoose.connection.on('error', (err) => {
      console.error('❌ MongoDB connection error:', err);
    });
  } catch (err) {
    console.error('❌ Initial MongoDB connection error:', err);
  }
};

export default connectDB;
