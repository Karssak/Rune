import React from "react";

const ServerTooltip = ({ visible, position, text }) => {
  return (
    <div
      className={`absolute rounded-lg bg-gray-800 p-2 text-sm font-semibold text-white shadow-md transform transition-opacity duration-300 ease-in-out ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        top: position.top,
        left: position.left,
        transform: "translateX(0.5rem)",
      }}
    >
      {text}
    </div>
  );
};

export default ServerTooltip;
