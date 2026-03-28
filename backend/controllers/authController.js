import { signupService, loginService } from "../services/authService.js";

export const signup = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    await signupService(email, password);

    res.json({ message: "Signup successful" });
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const data = await loginService(email, password);

    res.json({
      message: "Login successful",
      token: data.token,
    });
  } catch (err) {
    next(err);
  }
};