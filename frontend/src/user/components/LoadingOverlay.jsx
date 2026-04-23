import React from "react";

/**
 * A simple full‑screen overlay that shows a spinner.
 * It uses the `.overlay` and `.spinner` classes defined
 * in `public/assets/css/styles.css`.
 */
export default function LoadingOverlay({ visible }) {
  if (!visible) return null;

  return (
    <div className="overlay">
      <div className="spinner"></div>
    </div>
  );
}
