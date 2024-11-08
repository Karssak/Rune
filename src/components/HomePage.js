import React from "react";
import { FiMessageCircle, FiSettings } from "react-icons/fi";

const MainPage = () => {
  return (
    <div className="runes-bg flex h-screen">
      {/* Left Sidebar for Servers */}
      <aside className="server-sidebar flex w-[5.5rem] flex-col items-center justify-between border-r-[1.5px] border-[#1a0d56] bg-black bg-opacity-10 py-4 backdrop-blur-md">
        {/* Container for Message Icon */}
        <div className="flex flex-col items-center space-y-4">
          {/* Message Icon for Direct Messages */}
          <div className="relative flex h-[52px] w-[52px] cursor-pointer items-center justify-center rounded-full bg-indigo-700 transition-all duration-300 hover:ring-2 hover:ring-white hover:ring-opacity-100">
            <FiMessageCircle className="text-3xl text-white" />
          </div>

          {/* Divider Line */}
          <hr className="w-1/2 rounded-full border-t-[3px] border-gray-600" />
        </div>

        {/* Container for servers */}
        <div
          className="server-icons-container flex w-[4rem] flex-col items-center space-y-5 overflow-y-auto pb-3 pt-4"
          style={{
            height: "calc(100vh - 160px)",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {/* Servers*/}
          <div
            className="server-icon flex h-[52px] w-[52px] cursor-pointer items-center justify-center rounded-full bg-indigo-600 text-white transition-all duration-300 hover:ring-2 hover:ring-white hover:ring-opacity-100"
            style={{ flexShrink: 0 }}
          >
            S1
          </div>
          <div
            className="server-icon flex h-[52px] w-[52px] cursor-pointer items-center justify-center rounded-full bg-indigo-600 text-white transition-all duration-300 hover:ring-2 hover:ring-white hover:ring-opacity-100"
            style={{ flexShrink: 0 }}
          >
            S2
          </div>
          <div
            className="server-icon flex h-[52px] w-[52px] cursor-pointer items-center justify-center rounded-full bg-indigo-600 text-white transition-all duration-300 hover:ring-2 hover:ring-white hover:ring-opacity-100"
            style={{ flexShrink: 0 }}
          >
            S3
          </div>
          <div
            className="server-icon flex h-[52px] w-[52px] cursor-pointer items-center justify-center rounded-full bg-indigo-600 text-white transition-all duration-300 hover:ring-2 hover:ring-white hover:ring-opacity-100"
            style={{ flexShrink: 0 }}
          >
            S4
          </div>
          <div
            className="server-icon flex h-[52px] w-[52px] cursor-pointer items-center justify-center rounded-full bg-indigo-600 text-white transition-all duration-300 hover:ring-2 hover:ring-white hover:ring-opacity-100"
            style={{ flexShrink: 0 }}
          >
            S5
          </div>
          <div
            className="server-icon flex h-[52px] w-[52px] cursor-pointer items-center justify-center rounded-full bg-indigo-600 text-white transition-all duration-300 hover:ring-2 hover:ring-white hover:ring-opacity-100"
            style={{ flexShrink: 0 }}
          >
            S6
          </div>
          <div
            className="server-icon flex h-[52px] w-[52px] cursor-pointer items-center justify-center rounded-full bg-indigo-600 text-white transition-all duration-300 hover:ring-2 hover:ring-white hover:ring-opacity-100"
            style={{ flexShrink: 0 }}
          >
            S7
          </div>
          <div
            className="server-icon flex h-[52px] w-[52px] cursor-pointer items-center justify-center rounded-full bg-indigo-600 text-white transition-all duration-300 hover:ring-2 hover:ring-white hover:ring-opacity-100"
            style={{ flexShrink: 0 }}
          >
            S8
          </div>
          <div
            className="server-icon flex h-[52px] w-[52px] cursor-pointer items-center justify-center rounded-full bg-indigo-600 text-white transition-all duration-300 hover:ring-2 hover:ring-white hover:ring-opacity-100"
            style={{ flexShrink: 0 }}
          >
            S9
          </div>
          <div
            className="server-icon flex h-[52px] w-[52px] cursor-pointer items-center justify-center rounded-full bg-indigo-600 text-white transition-all duration-300 hover:ring-2 hover:ring-white hover:ring-opacity-100"
            style={{ flexShrink: 0 }}
          >
            S10
          </div>
        </div>

        {/* Divider Line */}
        <hr className="mb-[0.2rem] w-[30%] rounded-full border-t-[3px] border-gray-600" />

        {/* Bottom Settings and User container */}
        <div className="mt-auto flex flex-col items-center">
          <div className="relative flex flex-col items-center justify-center space-y-[0.32rem]">
            {/* Settings */}
            <div className="relative flex h-[54px] w-[54px] transform cursor-pointer items-center justify-center transition-transform duration-500 hover:rotate-180">
              <FiSettings className="text-2xl text-white" />
            </div>

            {/* User Avatar with status */}
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

      {/* Main Content */}
      <main className="flex min-h-screen flex-1 items-center justify-center bg-gray-900">
        <h1 className="text-6xl font-bold text-white">WORK IN PROGRESS</h1>
      </main>
    </div>
  );
};

export default MainPage;
