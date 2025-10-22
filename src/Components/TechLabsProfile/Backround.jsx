import React from "react";

const Backround = ({ children }) => {
  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden text-white"
      style={{
        background: "linear-gradient(135deg, #0f172a, #1e3a8a, #0ea5e9, #3b82f6)",
        // background: "linear-gradient(135deg, #0f172a, #1e3a8a, #0ea5e9, #3b82f6)",
        backgroundSize: "300% 300%",
        animation: "gradientMove 8s ease infinite",
      }}
    >
      {/* Dark overlay for better contrast */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>

      {/* Page Content */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center">
        {children}
      </div>

      {/* Gradient Animation Keyframes */}
      <style>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
};

export default Backround;
