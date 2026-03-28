import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    code: {
      type: String,
      required: true,
    },
    output: {
      type: String,
      required: true,
    },
    score: {
      type: Number,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Review", reviewSchema);
