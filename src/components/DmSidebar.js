import React from "react";
import { FiUsers } from "react-icons/fi";

const DmSidebar = () => {
  return (
    <aside className="dm-sidebar flex h-full w-[17rem] flex-col border-r-[1.5px] border-[#2a1b4e] bg-black bg-opacity-5 py-4 backdrop-blur-md">
      <div className="flex items-center space-x-2 px-[1.35rem] py-3">
        <FiUsers className="text-xl text-gray-400" />
        <span className="text-lg font-semibold text-white">DM and Friends</span>
      </div>

      <hr
        className="mx-[1.35rem] my-4 w-12 rounded-full border-t-[3px] border-[#425060]"
        style={{ width: "calc(80%)" }}
      />

      <div className="flex-1 space-y-2 overflow-y-auto px-1">
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
      </div>
    </aside>
  );
};

export default DmSidebar;
