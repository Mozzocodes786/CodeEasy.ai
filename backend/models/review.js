import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    code: String,
    output: String,
    score: Number,
  },
  { timestamps: true }
);

export default mongoose.model("Review", reviewSchema);