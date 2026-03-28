import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Signup failed");
        return;
      }

      alert("Signup successful");
      navigate("/login");

    } catch {
      setError("Server error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 via-white to-sky-50 px-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl border p-8">

        <h2 className="text-3xl text-center mb-6">Signup</h2>

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            placeholder="Email"
            className="w-full p-3 border rounded"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded"
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p className="text-red-500">{error}</p>}

          <button className="w-full bg-blue-500 text-white p-3 rounded">
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;