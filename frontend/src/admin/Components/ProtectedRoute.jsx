import { Navigate, useLocation } from "react-router-dom";

function isTokenExpired(token) {
  if (!token) return true;
  const parts = token.split(".");
  if (parts.length !== 3) return true;

  try {
    const payload = JSON.parse(atob(parts[1]));
    if (!payload.exp) return true;

    const now = Math.floor(Date.now() / 1000);
    return now >= payload.exp;
  } catch (error) {
    return true;
  }
}

export default function ProtectedRoute({ children }) {
  const location = useLocation();
  const token = localStorage.getItem("token");

  if (!token || isTokenExpired(token)) {
    localStorage.removeItem("token");
    return <Navigate replace to="/admin/login" state={{ from: location }} />;
  }

  return children;
}