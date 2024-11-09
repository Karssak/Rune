import React, { useState } from "react";
import { FiMessageCircle, FiSettings } from "react-icons/fi";
import ServerTooltip from "./ServerTooltip";
import DmSidebar from "./DmSidebar";

const MainPage = () => {
  const [tooltip, setTooltip] = useState({
    visible: false,
    position: { top: 0, left: 0 },
    text: "",
  });

  const handleMouseEnter = (event, text) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setTooltip({
      visible: true,
      position: {
        top: rect.top + 10,
        left: rect.right + 2,
      },
      text,
    });
  };

  const handleMouseLeave = () => {
    setTooltip({ ...tooltip, visible: false });
  };

  return (
    <div className="runes-bg relative flex h-screen">
      <aside className="server-sidebar flex w-[5.5rem] flex-col items-center justify-between border-r-[1.5px] border-indigo-950 bg-black bg-opacity-20 py-4 backdrop-blur-md">
        <div className="flex flex-col items-center space-y-4">
          <div className="relative flex h-[52px] w-[52px] cursor-pointer items-center justify-center rounded-full bg-indigo-700 transition-all duration-300 hover:ring-2 hover:ring-white hover:ring-opacity-100">
            <FiMessageCircle className="text-3xl text-white" />
          </div>
          <hr className="w-1/2 rounded-full border-t-[3px] border-gray-600" />
        </div>

        <div
          className="server-icons-container flex w-[4rem] flex-col items-center space-y-3 overflow-y-auto pb-3 pt-4"
          style={{
            height: "calc(100vh - 160px)",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <div
            className="server-icon flex h-[58px] w-[58px] cursor-pointer items-center justify-center rounded-full transition-all duration-300 hover:ring-2 hover:ring-white hover:ring-opacity-100"
            style={{ flexShrink: 0 }}
            onMouseEnter={(e) => handleMouseEnter(e, "Server Name")}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src="https://placehold.co/50x50"
              alt="Server Avatar"
              className="h-[52px] w-[52px] rounded-full"
            />
          </div>
          <div
            className="server-icon flex h-[58px] w-[58px] cursor-pointer items-center justify-center rounded-full transition-all duration-300 hover:ring-2 hover:ring-white hover:ring-opacity-100"
            style={{ flexShrink: 0 }}
            onMouseEnter={(e) => handleMouseEnter(e, "Server Name")}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src="https://placehold.co/50x50"
              alt="Server Avatar"
              className="h-[52px] w-[52px] rounded-full"
            />
          </div>
          <div
            className="server-icon flex h-[58px] w-[58px] cursor-pointer items-center justify-center rounded-full transition-all duration-300 hover:ring-2 hover:ring-white hover:ring-opacity-100"
            style={{ flexShrink: 0 }}
            onMouseEnter={(e) => handleMouseEnter(e, "Server Name")}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src="https://placehold.co/50x50"
              alt="Server Avatar"
              className="h-[52px] w-[52px] rounded-full"
            />
          </div>
          <div
            className="server-icon flex h-[58px] w-[58px] cursor-pointer items-center justify-center rounded-full transition-all duration-300 hover:ring-2 hover:ring-white hover:ring-opacity-100"
            style={{ flexShrink: 0 }}
            onMouseEnter={(e) => handleMouseEnter(e, "Server Name")}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src="https://placehold.co/50x50"
              alt="Server Avatar"
              className="h-[52px] w-[52px] rounded-full"
            />
          </div>
          <div
            className="server-icon flex h-[58px] w-[58px] cursor-pointer items-center justify-center rounded-full transition-all duration-300 hover:ring-2 hover:ring-white hover:ring-opacity-100"
            style={{ flexShrink: 0 }}
            onMouseEnter={(e) => handleMouseEnter(e, "Server Name")}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src="https://placehold.co/50x50"
              alt="Server Avatar"
              className="h-[52px] w-[52px] rounded-full"
            />
          </div>
          <div
            className="server-icon flex h-[58px] w-[58px] cursor-pointer items-center justify-center rounded-full transition-all duration-300 hover:ring-2 hover:ring-white hover:ring-opacity-100"
            style={{ flexShrink: 0 }}
            onMouseEnter={(e) => handleMouseEnter(e, "Server Name")}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src="https://placehold.co/50x50"
              alt="Server Avatar"
              className="h-[52px] w-[52px] rounded-full"
            />
          </div>
          <div
            className="server-icon flex h-[58px] w-[58px] cursor-pointer items-center justify-center rounded-full transition-all duration-300 hover:ring-2 hover:ring-white hover:ring-opacity-100"
            style={{ flexShrink: 0 }}
            onMouseEnter={(e) => handleMouseEnter(e, "Server Name")}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src="https://placehold.co/50x50"
              alt="Server Avatar"
              className="h-[52px] w-[52px] rounded-full"
            />
          </div>
          <div
            className="server-icon flex h-[58px] w-[58px] cursor-pointer items-center justify-center rounded-full transition-all duration-300 hover:ring-2 hover:ring-white hover:ring-opacity-100"
            style={{ flexShrink: 0 }}
            onMouseEnter={(e) => handleMouseEnter(e, "Server Name")}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src="https://placehold.co/50x50"
              alt="Server Avatar"
              className="h-[52px] w-[52px] rounded-full"
            />
          </div>
          <div
            className="server-icon flex h-[58px] w-[58px] cursor-pointer items-center justify-center rounded-full transition-all duration-300 hover:ring-2 hover:ring-white hover:ring-opacity-100"
            style={{ flexShrink: 0 }}
            onMouseEnter={(e) => handleMouseEnter(e, "Server Name")}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src="https://placehold.co/50x50"
              alt="Server Avatar"
              className="h-[52px] w-[52px] rounded-full"
            />
          </div>
          <div
            className="server-icon flex h-[58px] w-[58px] cursor-pointer items-center justify-center rounded-full transition-all duration-300 hover:ring-2 hover:ring-white hover:ring-opacity-100"
            style={{ flexShrink: 0 }}
            onMouseEnter={(e) => handleMouseEnter(e, "Server Name")}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src="https://placehold.co/50x50"
              alt="Server Avatar"
              className="h-[52px] w-[52px] rounded-full"
            />
          </div>
        </div>
        <hr className="mb-[0.2rem] w-[30%] rounded-full border-t-[3px] border-gray-600" />
        <div className="mt-auto flex flex-col items-center">
          <div className="relative flex flex-col items-center justify-center space-y-[0.32rem]">
            <div className="relative flex h-[54px] w-[54px] transform cursor-pointer items-center justify-center transition-transform duration-500 hover:rotate-180">
              <FiSettings className="text-2xl text-white" />
            </div>
            <div className="relative flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-full p-[2px] ring-[3px] ring-[#3b9d73]">
              <img
                src="https://placehold.co/50x50"
                alt="User Avatar"
                className="h-[46px] w-[46px] rounded-full"
              />
            </div>
          </div>
        </div>
      </aside>

      <main className="flex flex-1">
        <DmSidebar />
        <div className="flex min-h-screen flex-1 items-center justify-center bg-gray-900">
          <h1 className="text-6xl font-bold text-white">WORK IN PROGRESS</h1>
        </div>
      </main>

      <ServerTooltip
        visible={tooltip.visible}
        position={tooltip.position}
        text={tooltip.text}
      />
    </div>
  );
};

export default MainPage;
