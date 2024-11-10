import React from "react";

const ServerTooltip = ({ visible, position, text }) => {
  return (
    <div
      className={`absolute rounded-md bg-gray-800 p-2 text-sm font-semibold text-white shadow-md transform transition-opacity duration-300 ease-in-out ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        top: position.top,
        left: position.left,
        transform: "translateX(0.5rem)",
      }}
    >
      <div
        className="absolute left-[0rem] top-1/2 h-0 w-0 -translate-y-1/2 border-y-8 border-r-8 border-y-transparent border-r-gray-800"
        style={{
          transform: "translateX(-100%) translateY(-50%)",
        }}
      ></div>
      {text}
    </div>
  );
};

export default ServerTooltip;
