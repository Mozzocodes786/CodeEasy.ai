import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";

import authRoutes from "./routes/authRoutes.js";
import reviewRoutes from "./routes/reviewRoutes.js";
import { errorHandler } from "./middleware/errorMiddleware.js";



// ✅ FIRST create app
const app = express();

// ✅ THEN use middleware
app.use(cors());
app.use(express.json());

// ✅ Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "OK" });
});

// ✅ Routes
app.use("/api/auth", authRoutes);
app.use("/api/reviews", reviewRoutes);

// ✅ Error handler (last)
app.use(errorHandler);

export default app;