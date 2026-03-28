import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/generateToken.js";

// SIGNUP
export const signupService = async (email, password) => {
  const userExists = await User.findOne({ email });

  if (userExists) {
    throw { status: 400, message: "User already exists" };
  }

  // 🔐 Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    email,
    password: hashedPassword,
  });

  return user;
};

// LOGIN
export const loginService = async (email, password) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw { status: 401, message: "Invalid credentials" };
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw { status: 401, message: "Invalid credentials" };
  }

  const token = generateToken({ id: user._id });

  return { user, token };
};