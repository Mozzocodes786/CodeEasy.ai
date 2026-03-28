import express from "express";
import { generateReview, getHistory, deleteReview } from "../controllers/reviewController.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/prompt", verifyToken, generateReview);
router.get("/", verifyToken, getHistory);
router.delete("/:id", verifyToken, deleteReview);

export default router;