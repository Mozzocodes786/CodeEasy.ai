import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">&lt;/&gt; CodeEasy.ai</div>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/review">Demo</Link>
      </nav>

      <Link to="/review">
        <button className="primary-btn">Get Started</button>
      </Link>
    </header>
  );
}
