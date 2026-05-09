import Review from "../models/Review.js";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY);


// AI REVIEW
export const generateReview = async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }

    const model = genAI.getGenerativeModel({
      model: "models/gemini-1.5-flash-latest",
    });

    const result = await model.generateContent({
      contents: [
        {
          role: "user",
          parts: [
            {
              text: `
You are an expert code reviewer.

Analyze the code and give:
- Issues
- Improvements
- Best practices
- Score out of 10

Code:
${prompt}
              `,
            },
          ],
        },
      ],
    });

    const output = result.response.text();

    //  SAVE TO DB
    await Review.create({
      userId: req.user.id,
      code: prompt,
      output,
      score: 0,
    });

    res.json({ output });

  } catch (err) {
  console.log("AI ERROR:", err.message);

  res.json({
    output: `
AI temporarily unavailable.

Basic Review:
 Ensure proper function structure
 Use return statements
 Avoid console.log in production
 Follow best coding practices
    `,
  });
}
};


//  GET HISTORY
export const getHistory = async (req, res) => {
  try {
    const reviews = await Review.find({
      userId: req.user.id,
    }).sort({ createdAt: -1 });

    res.json(reviews);

  } catch (err) {
    console.log("HISTORY ERROR:", err.message);
    res.status(500).json({ error: "Failed to fetch history" });
  }
};


//  DELETE REVIEW
export const deleteReview = async (req, res) => {
  try {
    await Review.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });

  } catch (err) {
    console.log("DELETE ERROR:", err.message);
    res.status(500).json({ error: "Failed to delete" });
  }
};