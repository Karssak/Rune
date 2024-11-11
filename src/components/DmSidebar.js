import React, { useState } from "react";
import { FiMessageSquare, FiUsers } from "react-icons/fi";

const DmSidebar = () => {
  const [selectedTab, setSelectedTab] = useState("DM");

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <aside className="dm-sidebar flex h-full w-[17rem] flex-col border-r-[1.5px] border-[#2a1b4e] bg-black bg-opacity-5 backdrop-blur-md">
      <div className="flex w-full flex-col">
        <button
          className={`${
            selectedTab === "DM"
              ? "bg-indigo-800 text-white"
              : "text-gray-400 hover:bg-indigo-950 hover:text-white"
          } flex items-center justify-center w-full py-4 text-lg font-semibold transition-colors duration-200`}
          onClick={() => handleTabChange("DM")}
        >
          <FiMessageSquare className="mr-2 text-xl" />
          Direct Messages
        </button>
        <button
          className={`${
            selectedTab === "Friends"
              ? "bg-indigo-800 text-white"
              : "text-gray-400 hover:bg-indigo-950 hover:text-white"
          } flex items-center justify-center w-full py-4 mb-2 border-b-[1.5px] border-indigo-950 text-lg font-semibold transition-colors duration-200`}
          onClick={() => handleTabChange("Friends")}
        >
          <FiUsers className="mr-2 text-xl" />
          Friends
        </button>
      </div>

      <div className="custom-scrollbar flex-1 space-y-2 overflow-y-auto px-1">
        {selectedTab === "DM" && (
          <>
            <div className="dm-item flex cursor-pointer items-center space-x-3 rounded px-3 py-2 transition-all duration-200 hover:bg-indigo-950">
              <div className="relative flex h-[44px] w-[44px] cursor-pointer items-center justify-center rounded-full ring-[2px] ring-[#3b9d73]">
                <img
                  src="https://placehold.co/50x50"
                  alt="User Avatar"
                  className="h-[40px] w-[40px] rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-white">Username</span>
                <span className="text-xs text-gray-400">
                  Last message preview...
                </span>
              </div>
            </div>
            <div className="dm-item flex cursor-pointer items-center space-x-3 rounded px-3 py-2 transition-all duration-200 hover:bg-indigo-950">
              <div className="relative flex h-[44px] w-[44px] cursor-pointer items-center justify-center rounded-full ring-[2px] ring-[#3b9d73]">
                <img
                  src="https://placehold.co/50x50"
                  alt="User Avatar"
                  className="h-[40px] w-[40px] rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-white">Username</span>
                <span className="text-xs text-gray-400">
                  Last message preview...
                </span>
              </div>
            </div>
            <div className="dm-item flex cursor-pointer items-center space-x-3 rounded px-3 py-2 transition-all duration-200 hover:bg-indigo-950">
              <div className="relative flex h-[44px] w-[44px] cursor-pointer items-center justify-center rounded-full ring-[2px] ring-[#3b9d73]">
                <img
                  src="https://placehold.co/50x50"
                  alt="User Avatar"
                  className="h-[40px] w-[40px] rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-white">Username</span>
                <span className="text-xs text-gray-400">
                  Last message preview...
                </span>
              </div>
            </div>
            <div className="dm-item flex cursor-pointer items-center space-x-3 rounded px-3 py-2 transition-all duration-200 hover:bg-indigo-950">
              <div className="relative flex h-[44px] w-[44px] cursor-pointer items-center justify-center rounded-full ring-[2px] ring-[#3b9d73]">
                <img
                  src="https://placehold.co/50x50"
                  alt="User Avatar"
                  className="h-[40px] w-[40px] rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-white">Username</span>
                <span className="text-xs text-gray-400">
                  Last message preview...
                </span>
              </div>
            </div>
            <div className="dm-item flex cursor-pointer items-center space-x-3 rounded px-3 py-2 transition-all duration-200 hover:bg-indigo-950">
              <div className="relative flex h-[44px] w-[44px] cursor-pointer items-center justify-center rounded-full ring-[2px] ring-[#3b9d73]">
                <img
                  src="https://placehold.co/50x50"
                  alt="User Avatar"
                  className="h-[40px] w-[40px] rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-white">Username</span>
                <span className="text-xs text-gray-400">
                  Last message preview...
                </span>
              </div>
            </div>
            <div className="dm-item flex cursor-pointer items-center space-x-3 rounded px-3 py-2 transition-all duration-200 hover:bg-indigo-950">
              <div className="relative flex h-[44px] w-[44px] cursor-pointer items-center justify-center rounded-full ring-[2px] ring-[#3b9d73]">
                <img
                  src="https://placehold.co/50x50"
                  alt="User Avatar"
                  className="h-[40px] w-[40px] rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-white">Username</span>
                <span className="text-xs text-gray-400">
                  Last message preview...
                </span>
              </div>
            </div>
            <div className="dm-item flex cursor-pointer items-center space-x-3 rounded px-3 py-2 transition-all duration-200 hover:bg-indigo-950">
              <div className="relative flex h-[44px] w-[44px] cursor-pointer items-center justify-center rounded-full ring-[2px] ring-[#3b9d73]">
                <img
                  src="https://placehold.co/50x50"
                  alt="User Avatar"
                  className="h-[40px] w-[40px] rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-white">Username</span>
                <span className="text-xs text-gray-400">
                  Last message preview...
                </span>
              </div>
            </div>
            <div className="dm-item flex cursor-pointer items-center space-x-3 rounded px-3 py-2 transition-all duration-200 hover:bg-indigo-950">
              <div className="relative flex h-[44px] w-[44px] cursor-pointer items-center justify-center rounded-full ring-[2px] ring-[#3b9d73]">
                <img
                  src="https://placehold.co/50x50"
                  alt="User Avatar"
                  className="h-[40px] w-[40px] rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-white">Username</span>
                <span className="text-xs text-gray-400">
                  Last message preview...
                </span>
              </div>
            </div>
            <div className="dm-item flex cursor-pointer items-center space-x-3 rounded px-3 py-2 transition-all duration-200 hover:bg-indigo-950">
              <div className="relative flex h-[44px] w-[44px] cursor-pointer items-center justify-center rounded-full ring-[2px] ring-[#3b9d73]">
                <img
                  src="https://placehold.co/50x50"
                  alt="User Avatar"
                  className="h-[40px] w-[40px] rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-white">Username</span>
                <span className="text-xs text-gray-400">
                  Last message preview...
                </span>
              </div>
            </div>
            <div className="dm-item flex cursor-pointer items-center space-x-3 rounded px-3 py-2 transition-all duration-200 hover:bg-indigo-950">
              <div className="relative flex h-[44px] w-[44px] cursor-pointer items-center justify-center rounded-full ring-[2px] ring-[#3b9d73]">
                <img
                  src="https://placehold.co/50x50"
                  alt="User Avatar"
                  className="h-[40px] w-[40px] rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-white">Username</span>
                <span className="text-xs text-gray-400">
                  Last message preview...
                </span>
              </div>
            </div>
            <div className="dm-item flex cursor-pointer items-center space-x-3 rounded px-3 py-2 transition-all duration-200 hover:bg-indigo-950">
              <div className="relative flex h-[44px] w-[44px] cursor-pointer items-center justify-center rounded-full ring-[2px] ring-[#3b9d73]">
                <img
                  src="https://placehold.co/50x50"
                  alt="User Avatar"
                  className="h-[40px] w-[40px] rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-white">Username</span>
                <span className="text-xs text-gray-400">
                  Last message preview...
                </span>
              </div>
            </div>
            <div className="dm-item flex cursor-pointer items-center space-x-3 rounded px-3 py-2 transition-all duration-200 hover:bg-indigo-950">
              <div className="relative flex h-[44px] w-[44px] cursor-pointer items-center justify-center rounded-full ring-[2px] ring-[#3b9d73]">
                <img
                  src="https://placehold.co/50x50"
                  alt="User Avatar"
                  className="h-[40px] w-[40px] rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-white">Username</span>
                <span className="text-xs text-gray-400">
                  Last message preview...
                </span>
              </div>
            </div>
          </>
        )}

        {selectedTab === "Friends" && (
          <>
            <div className="dm-item flex cursor-pointer items-center space-x-3 rounded px-3 py-2 transition-all duration-200 hover:bg-indigo-950">
              <div className="relative flex h-[44px] w-[44px] cursor-pointer items-center justify-center rounded-full ring-[2px] ring-[#3b9d73]">
                <img
                  src="https://placehold.co/50x50"
                  alt="User Avatar"
                  className="h-[40px] w-[40px] rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-white">Friend Username</span>
              </div>
            </div>
            <div className="dm-item flex cursor-pointer items-center space-x-3 rounded px-3 py-2 transition-all duration-200 hover:bg-indigo-950">
              <div className="relative flex h-[44px] w-[44px] cursor-pointer items-center justify-center rounded-full ring-[2px] ring-[#3b9d73]">
                <img
                  src="https://placehold.co/50x50"
                  alt="User Avatar"
                  className="h-[40px] w-[40px] rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-white">Friend Username</span>
              </div>
            </div>
          </>
        )}
      </div>
    </aside>
  );
};

export default DmSidebar;
