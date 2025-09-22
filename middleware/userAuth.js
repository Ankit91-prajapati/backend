import jwt from "jsonwebtoken";

const userAuth = (req, res, next) => {
  try {
    const token = req.cookies?.token;

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.userId = decoded.id; // attach userId for controllers
    next();
  } catch (error) {
    return res.status(403).json({
      success: false,
      message: "Invalid or expired token. Please log in again.",
    });
  }
};

export default userAuth;
