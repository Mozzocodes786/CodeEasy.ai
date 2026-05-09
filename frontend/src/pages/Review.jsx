import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Review() {
  const navigate = useNavigate();

  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  const [history, setHistory] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);
  const [loading, setLoading] = useState(false);

  //  Auth + load history
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return;
    }

    fetchHistory();
  }, []);

  //  Fetch history
  const fetchHistory = async () => {
    const token = localStorage.getItem("token");

    try {
      const res = await fetch("http://localhost:5000/api/reviews", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (res.ok) setHistory(data);
    } catch (err) {
      console.error("History error:", err);
    }
  };

  //  NEW CHAT
  const handleNewChat = () => {
    setCode("");
    setOutput("");
    setActiveIndex(null);
  };

  //  DELETE SINGLE
  const handleDelete = async (id) => {
    const token = localStorage.getItem("token");

    await fetch(`http://localhost:5000/api/reviews/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    fetchHistory();
  };

  //  CLEAR ALL
  const handleClearAll = async () => {
    const token = localStorage.getItem("token");

    for (let item of history) {
      await fetch(`http://localhost:5000/api/reviews/${item._id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    }

    fetchHistory();
    handleNewChat();
  };

  //  EXPORT
  const handleExport = () => {
    if (!output) return;

    const content = `Code:\n${code}\n\nReview:\n${output}`;

    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "code-review.txt";
    a.click();
  };

  //  LOGOUT
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  //  REVIEW API
  const handleReview = async () => {
    if (!code) return;

    setLoading(true);

    const token = localStorage.getItem("token");

    try {
      const res = await fetch("http://localhost:5000/api/reviews/prompt", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ prompt: code }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.error || "Error");
        setLoading(false);
        return;
      }

      setOutput(data.output);
      setActiveIndex(null);

      fetchHistory();
    } catch (err) {
      console.error(err);
      alert("Server error");
    }

    setLoading(false);
  };

  //  LOAD HISTORY ITEM
  const handleHistoryClick = (item, index) => {
    setCode(item.code);
    setOutput(item.output);
    setActiveIndex(index);
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-pink-50 via-white to-sky-50">

      {/*  SIDEBAR */}
      <div className="w-72 bg-white border-r p-4 flex flex-col">

        <button
          onClick={handleNewChat}
          className="mb-3 w-full py-2 rounded-lg bg-gradient-to-r from-pink-500 to-sky-500 text-white font-semibold"
        >
          + New Chat
        </button>

        <button
          onClick={handleClearAll}
          className="mb-4 text-sm text-red-500 hover:underline"
        >
          Clear All
        </button>

        <div className="overflow-y-auto flex-1">
          {history.map((item, index) => (
            <div
              key={item._id}
              className={`p-3 mb-2 rounded-lg cursor-pointer flex justify-between items-center
              ${activeIndex === index
                ? "bg-pink-100 border border-pink-400"
                : "hover:bg-gray-100"
              }`}
            >
              <div
                onClick={() => handleHistoryClick(item, index)}
                className="flex-1"
              >
                <p className="text-sm truncate">{item.code}</p>
                <p className="text-xs text-gray-500">
                  Score: {item.score}
                </p>
              </div>

              <button
                onClick={() => handleDelete(item._id)}
                className="text-red-400 hover:text-red-600 ml-2"
              >
                🗑
              </button>
            </div>
          ))}
        </div>
      </div>

      {/*  MAIN */}
      <div className="flex-1 flex items-center justify-center px-6">
        <div className="w-full max-w-3xl bg-white rounded-2xl shadow-2xl border p-8">

          {/* HEADER */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold">
              AI Code Review
            </h2>

            <button
              onClick={handleLogout}
              className="text-red-500 font-semibold hover:underline"
            >
              Logout
            </button>
          </div>

          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            rows="6"
            placeholder="Paste your code..."
            className="w-full p-3 rounded-lg border mb-4"
          />

          <button
            onClick={handleReview}
            className="w-full py-3 rounded-full text-white bg-gradient-to-r from-pink-500 to-sky-500"
          >
            {loading ? "Analyzing..." : "Review Code"}
          </button>

          <button
            onClick={handleExport}
            className="mt-3 w-full py-2 rounded-lg border hover:bg-gray-100"
          >
            Export Review
          </button>

          {output && (
            <pre className="mt-6 bg-gray-100 p-4 rounded-lg whitespace-pre-wrap">
              {output}
            </pre>
          )}

        </div>
      </div>
    </div>
  );
}