import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../api/axios";

function isTokenExpired(token) {
  if (!token) return true;
  const parts = token.split(".");
  if (parts.length !== 3) return true;
  try {
    const payload = JSON.parse(atob(parts[1]));
    if (!payload.exp) return true;
    const now = Math.floor(Date.now() / 1000);
    return now >= payload.exp;
  } catch {
    return true;
  }
}

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token && !isTokenExpired(token)) {
      navigate("/admin/products", { replace: true });
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("/admin/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      setErrorMessage("");
      navigate("/admin/products", { replace: true });
    } catch (err) {
      setErrorMessage("Invalid username/password. Please try again.");
      console.log(err);
    }
  };

  return (
    <div className="admin-page admin-login-page">
      <div className="admin-card">
        <div className="admin-card-logo">
          <img
            src="/assets/images/marble-image/Marble_Arts_logo.png"
            alt="logo"
            className="admin-logo"
          />
        </div>

        <form onSubmit={handleSubmit} className="admin-form">
          <label className="admin-label" htmlFor="email">
            Username
          </label>
          <input
            id="email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Username"
            className="admin-input"
            required
          />
          <div className="admin-help-text">Your unique username to app</div>

          <label className="admin-label" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="******"
            className="admin-input"
            required
          />
          <div className="admin-flex-row admin-space-between admin-help-row">
            <span className="admin-help-text">Your strong password</span>
            <button
              type="button"
              onClick={() => alert("Reset password flow not implemented")}
              className="admin-link-button"
            >
              Forget Password
            </button>
          </div>

          {errorMessage && <div className="admin-error">{errorMessage}</div>}

          <button type="submit" className="admin-submit-btn">
            submit
          </button>
        </form>
      </div>
    </div>
  );
}
