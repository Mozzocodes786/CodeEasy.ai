import Review from "../models/review.js";

export const analyzeCode = (code) => {
  let issues = [];
  let score = 10;

  if (!code.includes("function")) {
    issues.push("No function detected");
    score -= 2;
  }

  if (!code.includes("return")) {
    issues.push("Missing return statement");
    score -= 2;
  }

  return { issues, score };
};

// ✅ SAVE REVIEW
export const saveReview = async (userId, code, output, score) => {
  return await Review.create({
    userId,
    code,
    output,
    score,
  });
};

// ✅ GET HISTORY
export const getUserReviews = async (userId) => {
  return await Review.find({ userId }).sort({ createdAt: -1 });
};