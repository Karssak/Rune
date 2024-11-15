import React, { useState } from "react";
import { FiSettings } from "react-icons/fi";

const ServerSidebar = ({ serverName }) => {
  return (
    <aside className="flex w-[17rem] flex-col border-r-[1.5px] border-indigo-950 bg-black bg-opacity-5 backdrop-blur-md">
      <div className="flex w-full items-center justify-between border-b-[1.5px] border-indigo-950 py-4 pl-4">
        <h2 className="text-xl font-semibold text-white">{serverName}</h2>
        <FiSettings className="mr-4 cursor-pointer text-[1.35rem] text-white" />
      </div>

      <div className="custom-scrollbar flex-1 overflow-y-auto">
        <div className="my-1 flex cursor-pointer items-center px-3 py-2 transition-all duration-500 hover:bg-indigo-950">
          <span className="text-white"># general</span>
        </div>
        <div className="my-1 flex cursor-pointer items-center px-3 py-2 transition-all duration-500 hover:bg-indigo-950">
          <span className="text-white"># updates</span>
        </div>
        <div className="my-1 flex cursor-pointer items-center px-3 py-2 transition-all duration-500 hover:bg-indigo-950">
          <span className="text-white"># random</span>
        </div>
        <div className="my-1 flex cursor-pointer items-center px-3 py-2 transition-all duration-500 hover:bg-indigo-950">
          <span className="text-white"># announcements</span>
        </div>
        <div className="my-1 flex cursor-pointer items-center px-3 py-2 transition-all duration-500 hover:bg-indigo-950">
          <span className="text-white"># memes</span>
        </div>
        <div className="my-1 flex cursor-pointer items-center px-3 py-2 transition-all duration-500 hover:bg-indigo-950">
          <span className="text-white"># music</span>
        </div>
        <div className="my-1 flex cursor-pointer items-center px-3 py-2 transition-all duration-500 hover:bg-indigo-950">
          <span className="text-white"># coding</span>
        </div>
        <div className="my-1 flex cursor-pointer items-center px-3 py-2 transition-all duration-500 hover:bg-indigo-950">
          <span className="text-white"># gaming</span>
        </div>
        <div className="my-1 flex cursor-pointer items-center px-3 py-2 transition-all duration-500 hover:bg-indigo-950">
          <span className="text-white"># art</span>
        </div>
        <div className="my-1 flex cursor-pointer items-center px-3 py-2 transition-all duration-500 hover:bg-indigo-950">
          <span className="text-white"># events</span>
        </div>
      </div>
    </aside>
  );
};

export default ServerSidebar;
