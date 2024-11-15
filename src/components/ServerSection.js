import React, { useState } from "react";
import { FiPaperclip, FiSmile } from "react-icons/fi";
import { MdGif } from "react-icons/md";
import { LuSend } from "react-icons/lu";

const ServerSection = ({ channelName = "general", serverUsers = [] }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Welcome to the channel!",
      timestamp: "5 mins ago",
      user: "Admin",
      avatar: "https://placehold.co/50x50",
      username: "Admin",
    },
    {
      id: 2,
      text: "Feel free to chat here.",
      timestamp: "4 mins ago",
      user: "You",
      avatar: "https://placehold.co/50x50",
      username: "You",
    },
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
    <div className="flex flex-1">
      {}
      <div className="server-chat-section flex flex-1 flex-col border-r-[1.5px] border-indigo-950">
        <div className="active-channel-header flex items-center space-x-2 p-4 py-4">
          <h2 className="text-lg font-semibold text-white">#{channelName}</h2>
        </div>

        <div className="custom-scrollbar messages-area flex-1 overflow-y-auto border-t-[1.5px] border-indigo-950 p-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`message-item flex ${
                msg.user === "You" ? "justify-end" : "justify-start"
              } mb-4`}
            >
              {msg.user !== "You" && (
                <div className="message-avatar mr-3">
                  <img
                    src={msg.avatar}
                    alt={msg.username}
                    className="h-[40px] w-[40px] rounded-full"
                  />
                </div>
              )}
              <div
                className={`message-bubble px-4 py-2 rounded-lg text-white max-w-[75%] ${
                  msg.user === "You" ? "bg-indigo-900" : "bg-[#1e1b4b]"
                }`}
              >
                {msg.user !== "You" && (
                  <div className="mb-1 flex items-center justify-start space-x-2">
                    <span className="text-sm font-semibold text-gray-200">
                      {msg.username}
                    </span>
                    <span className="text-xs text-gray-500">
                      {msg.timestamp}
                    </span>
                  </div>
                )}
                <p>{msg.text}</p>
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
              style={{ maxHeight: "200px", overflowY: "auto" }}
            />
            <FiSmile className="mx-4 cursor-pointer text-[1.6rem] text-white" />

            <MdGif className="-mx-2 cursor-pointer text-[2.9rem] text-white" />

            <button className="ml-4 flex items-center justify-center rounded-full bg-indigo-900 p-3 text-white hover:bg-indigo-950">
              <LuSend
                className="text-2xl text-white"
                style={{ transform: "translate(-1px, 2px)" }}
              />
            </button>
          </div>
        </div>
      </div>

      {}
      <div className="server-users-section flex w-[300px] flex-col items-center bg-black bg-opacity-10 text-white backdrop-blur-md">
        <div className="h-[76.3px] w-full bg-gradient-to-r from-[#4a2a89] to-[#243b6b]"></div>
        <div className="users-list flex w-full flex-col space-y-4 p-4">
          {serverUsers.map((user, index) => (
            <div key={index} className="user-item flex items-center space-x-3">
              <div className="relative flex h-[44px] w-[44px] items-center justify-center rounded-full ring-[2px] ring-[#3b9d73]">
                <img
                  src={user.avatar}
                  alt={user.username}
                  className="h-[40px] w-[40px] rounded-full"
                />
              </div>
              <div className="user-info">
                <p className="font-semibold text-white">{user.username}</p>
                <span className="text-sm text-gray-400">{user.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServerSection;
