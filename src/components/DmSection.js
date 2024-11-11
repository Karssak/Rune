import React, { useState } from "react";
import { FiPaperclip, FiSmile } from "react-icons/fi";
import { MdGif } from "react-icons/md"; 
import { LuSend } from "react-icons/lu";

const DmSection = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Example message", timestamp: "5 mins ago", user: "Other" },
    { id: 2, text: "Example message", timestamp: "4 mins ago", user: "You" },
    { id: 3, text: "Example message", timestamp: "3 mins ago", user: "Other" },
    { id: 4, text: "Example message", timestamp: "2 mins ago", user: "You" },
    { id: 5, text: "Example message", timestamp: "1 min ago", user: "Other" },
    { id: 6, text: "Example message", timestamp: "1 min ago", user: "Other" },
    {
      id: 7,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit in mauris in porta.",
      timestamp: "1 min ago",
      user: "Other",
    },
    { id: 8, text: "Example message", timestamp: "2 mins ago", user: "You" },
  ]);

  const [messageInput, setMessageInput] = useState("");

  const handleInputChange = (event) => {
    setMessageInput(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
    }
  };

  return (
    <div className="flex h-full w-full">
      <div className="direct-messages-section flex flex-1 flex-col">
        <div className="active-chat-header flex items-center space-x-2 p-4 py-4">
          <div className="relative flex h-[44px] w-[44px] cursor-pointer items-center justify-center rounded-full ring-[2px] ring-[#3b9d73]">
            <img
              src="https://placehold.co/50x50"
              alt="User Avatar"
              className="h-[40px] w-[40px] rounded-full"
            />
          </div>
          <div>
            <span className="font-semibold text-white">Username</span>
          </div>
        </div>

        <div className="custom-scrollbar messages-area flex-1 overflow-y-auto border-t-[1.5px] border-indigo-950 p-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`message-item flex ${
                msg.user === "You" ? "justify-end" : "justify-start"
              } mb-4`}
            >
              <div
                className={`message-bubble px-4 py-2 rounded-lg text-white max-w-[75%] ${
                  msg.user === "You" ? "bg-indigo-900" : "bg-[#1e1b4b]"
                }`}
              >
                <p>{msg.text}</p>
                <span className="text-xs text-gray-500">{msg.timestamp}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="input-area flex items-center border-t-[1.5px] border-indigo-950 p-4">
          <div className="flex w-full items-center">
            <FiPaperclip className="mr-4 cursor-pointer text-[1.4rem] text-white" />

            <textarea
              value={messageInput}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              placeholder="Type a message..."
              rows={1}
              className="input-field max-h-[200px] min-h-[40px] flex-1 resize-none rounded-md bg-gradient-to-r from-[#2d0e5a] to-[#101831] p-3 text-white focus:outline-none"
              style={{
                maxHeight: "200px", 
                overflowY: "auto", 
              }}
            />
            <FiSmile className="mx-4 cursor-pointer text-[1.6rem] text-white" />

            <MdGif className="-mx-2 cursor-pointer text-[2.9rem] text-white" />

            <button className="ml-4 flex items-center justify-center rounded-full bg-indigo-900 p-3 text-white hover:bg-indigo-950">
              <LuSend
                className="text-2xl text-white"
                style={{ transform: "translate(-1px, 1.5px)" }}
              />
            </button>
          </div>
        </div>
      </div>

      <div className="profile-sidebar flex w-[300px] flex-col items-center border-l-[1.5px] border-[#2a1b4e] bg-black bg-opacity-10 p-6 text-white backdrop-blur-md">
        <div className="relative mb-4 flex h-[88px] w-[88px] cursor-pointer items-center justify-center rounded-full ring-[3px] ring-[#3b9d73]">
          <img
            src="https://placehold.co/100x100"
            alt="Profile Avatar"
            className="h-[80px] w-[80px] rounded-full"
          />
        </div>
        <h2 className="text-xl font-semibold">Username</h2>
        <p className="mb-2 text-gray-400">Active 5 mins ago</p>

        <div className="additional-info mt-4 text-sm">
          <p>
            Status: <span className="text-green-400">Online</span>
          </p>
          <p>Joined: January 2023</p>
        </div>
      </div>
    </div>
  );
};

export default DmSection;
