import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";

const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [animate, setAnimate] = useState(false);



  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/40 border-b border-white/30 shadow-lg transition-all duration-700 ${animate ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <Link to="/" className="text-2xl font-bold">
          Code
          <span className="bg-gradient-to-r from-pink-500 to-sky-500 bg-clip-text text-transparent">
            Easy.ai
          </span>
        </Link>

        <div className="flex items-center gap-4">

          {user ? (
            <>
              <span className="text-sm font-medium text-black/70">
                Welcome 👋
              </span>

              <button
                onClick={() => {
                  logout();
                  navigate("/");
                }}
                className="px-5 py-2 text-white bg-gradient-to-r from-pink-500 to-sky-500 rounded-lg hover:scale-105 transition-all duration-300"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login">
                <button className="px-5 py-2 border border-pink-400 rounded-lg hover:bg-pink-50 transition">
                  Login
                </button>
              </Link>

              <Link to="/signup">
                <button className="px-5 py-2 text-white bg-gradient-to-r from-pink-500 to-sky-500 rounded-lg hover:scale-105 transition">
                  Sign Up
                </button>
              </Link>
            </>
          )}

        </div>
      </div>
    </header>
  );
};

export default Header;
