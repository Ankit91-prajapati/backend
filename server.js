import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import 'dotenv/config';
import connectDB from "./config/mongodb.js";
import authRouter from "./routes/authRoutes.js";
import userRouter from "./routes/userRoutes.js";

const app = express();
const port = process.env.PORT || 3000;

// Connect to DB
connectDB();

// Middleware
app.use(express.json());
app.use(cookieParser());

// 
app.use(cors({
  origin:"https://frontend-kappa-seven-35.vercel.app", // frontend domain
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

// Routes
app.get("/", (req, res) => {
  res.send("Backend API is running");
});

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);

// Start server
app.listen(port, () => console.log(`🚀 Server running on port ${port}`));
