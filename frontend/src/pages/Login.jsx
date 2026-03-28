import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
localStorage.removeItem("token"); // clear old expired token
const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
  e.preventDefault();
  setError("");

  try {
    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      setError(data.error || "Login failed");
      return;
    }

    // ✅ 👉 PUT IT HERE
    localStorage.setItem("token", data.token);

    // optional (if using context)
    login(data);

    // redirect
    navigate("/review");

  } catch {
    setError("Server error");
  }
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 via-white to-sky-50 px-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl border border-black/5 p-8">

        <h2 className="text-3xl font-bold text-center mb-6">
          Login to{" "}
          <span className="bg-gradient-to-r from-pink-500 to-sky-500 bg-clip-text text-transparent">
            CodeEasy.ai
          </span>
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-lg border border-black/10"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-lg border border-black/10"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p className="text-red-500">{error}</p>}

          <button className="w-full py-3 bg-pink-500 text-white rounded-full">
            Login
          </button>
        </form>

        <p className="text-center mt-4">
          No account?{" "}
          <span onClick={() => navigate("/signup")} className="cursor-pointer text-blue-500">
            Signup
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;