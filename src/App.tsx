import React from "react";

export default function App() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "#0b0f14",
      color: "#d1f7ff",
      fontFamily: "Arial, sans-serif",
      padding: "24px"
    }}>
      <h1 style={{ fontSize: "42px", marginBottom: "8px" }}>
        OddViewer
      </h1>

      <p style={{ opacity: 0.8, marginBottom: "24px" }}>
        Kalshi hedge scanner MVP
      </p>

      <div style={{
        border: "1px solid #1f2a36",
        borderRadius: "12px",
        padding: "20px",
        background: "#121923"
      }}>
        <h2>Initial Features</h2>

        <ul>
          <li>Keyword market filtering</li>
          <li>Price filtering</li>
          <li>YES / NO contract selection</li>
          <li>Expected outcome calculator</li>
          <li>Favorite Fade detection</li>
          <li>Synthetic NO detection</li>
          <li>Double Chance structures</li>
        </ul>
      </div>
    </div>
  );
}
