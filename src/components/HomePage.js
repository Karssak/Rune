import React, { useState } from "react";
import { FiMessageCircle, FiSettings } from "react-icons/fi";
import ServerTooltip from "./ServerTooltip";
import DmSidebar from "./DmSidebar";
import DmSection from "./DmSection";
import UserProfile from "./UserProfile";
import ServerSidebar from "./ServerSidebar";
import ServerSection from "./ServerSection";
import UserSettings from "./UserSettings";

const HomePage = () => {
  const [tooltip, setTooltip] = useState({
    visible: false,
    position: { top: 0, left: 0 },
    text: "",
  });
  const [isProfileVisible, setProfileVisible] = useState(false);
  const [profilePosition, setProfilePosition] = useState({ top: 0, left: 0 });
  const [selectedServer, setSelectedServer] = useState(null);
  const [isDmSidebarVisible, setDmSidebarVisible] = useState(true);
  const [isUserSettingsVisible, setUserSettingsVisible] = useState(false);

  const handleMouseEnter = (event, text) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setTooltip({
      visible: true,
      position: { top: rect.top + 10, left: rect.right + 6 },
      text,
    });
  };

  const handleMouseLeave = () => {
    setTooltip({ ...tooltip, visible: false });
  };

  const handleAvatarClick = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setProfilePosition({ top: rect.top, left: rect.right + 10 });
    setProfileVisible(!isProfileVisible);
  };

  const handleServerClick = (serverName) => {
    setSelectedServer(serverName);
    setDmSidebarVisible(false);
  };

  const handleDmIconClick = () => {
    setSelectedServer(null);
    setDmSidebarVisible(true);
  };

  const handleSettingsClick = () => {
    setUserSettingsVisible(!isUserSettingsVisible);
  };

  return (
    <div className="runes-bg flex">
      <aside className="flex w-[5.5rem] flex-col items-center border-r-[1.5px] border-[#2a1b4e] bg-black bg-opacity-10 py-3 backdrop-blur-md">
        <div className="flex flex-col items-center space-y-3">
          <div
            className="flex h-[58px] w-[58px] cursor-pointer items-center justify-center rounded-full duration-[500ms] hover:ring-2 hover:ring-white hover:ring-opacity-100"
            onClick={handleDmIconClick}
          >
            <div className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-indigo-700">
              <FiMessageCircle className="text-3xl text-white" />
            </div>
          </div>
          <hr className="w-1/2 rounded-full border-t-[3px] border-gray-600" />
        </div>

        <div
          className="flex w-[4rem] flex-col items-center space-y-3 overflow-y-auto py-3"
          style={{
            height: "calc(100vh - 160px)",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <div
            className="flex h-[58px] w-[58px] cursor-pointer items-center justify-center rounded-full duration-[500ms] hover:ring-2 hover:ring-white hover:ring-opacity-100"
            style={{ flexShrink: 0 }}
            onMouseEnter={(e) => handleMouseEnter(e, "Server Name")}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleServerClick("Server 1")}
          >
            <img
              src="https://placehold.co/50x50"
              alt="Server Avatar"
              className="h-[52px] w-[52px] rounded-full"
            />
          </div>

          <div
            className="flex h-[58px] w-[58px] cursor-pointer items-center justify-center rounded-full duration-[500ms] hover:ring-2 hover:ring-white hover:ring-opacity-100"
            style={{ flexShrink: 0 }}
            onMouseEnter={(e) => handleMouseEnter(e, "Server Name")}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleServerClick("Server 2")}
          >
            <img
              src="https://placehold.co/50x50"
              alt="Server Avatar"
              className="h-[52px] w-[52px] rounded-full"
            />
          </div>

          <div
            className="flex h-[58px] w-[58px] cursor-pointer items-center justify-center rounded-full duration-[500ms] hover:ring-2 hover:ring-white hover:ring-opacity-100"
            style={{ flexShrink: 0 }}
            onMouseEnter={(e) => handleMouseEnter(e, "Server Name")}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleServerClick("Server 3")}
          >
            <img
              src="https://placehold.co/50x50"
              alt="Server Avatar"
              className="h-[52px] w-[52px] rounded-full"
            />
          </div>

          <div
            className="flex h-[58px] w-[58px] cursor-pointer items-center justify-center rounded-full duration-[500ms] hover:ring-2 hover:ring-white hover:ring-opacity-100"
            style={{ flexShrink: 0 }}
            onMouseEnter={(e) => handleMouseEnter(e, "Server Name")}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleServerClick("Server 4")}
          >
            <img
              src="https://placehold.co/50x50"
              alt="Server Avatar"
              className="h-[52px] w-[52px] rounded-full"
            />
          </div>

          <div
            className="flex h-[58px] w-[58px] cursor-pointer items-center justify-center rounded-full duration-[500ms] hover:ring-2 hover:ring-white hover:ring-opacity-100"
            style={{ flexShrink: 0 }}
            onMouseEnter={(e) => handleMouseEnter(e, "Server Name")}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleServerClick("Server 5")}
          >
            <img
              src="https://placehold.co/50x50"
              alt="Server Avatar"
              className="h-[52px] w-[52px] rounded-full"
            />
          </div>

          <div
            className="flex h-[58px] w-[58px] cursor-pointer items-center justify-center rounded-full duration-[500ms] hover:ring-2 hover:ring-white hover:ring-opacity-100"
            style={{ flexShrink: 0 }}
            onMouseEnter={(e) => handleMouseEnter(e, "Server Name")}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleServerClick("Server 6")}
          >
            <img
              src="https://placehold.co/50x50"
              alt="Server Avatar"
              className="h-[52px] w-[52px] rounded-full"
            />
          </div>

          <div
            className="flex h-[58px] w-[58px] cursor-pointer items-center justify-center rounded-full duration-[500ms] hover:ring-2 hover:ring-white hover:ring-opacity-100"
            style={{ flexShrink: 0 }}
            onMouseEnter={(e) => handleMouseEnter(e, "Server Name")}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleServerClick("Server 7")}
          >
            <img
              src="https://placehold.co/50x50"
              alt="Server Avatar"
              className="h-[52px] w-[52px] rounded-full"
            />
          </div>

          <div
            className="flex h-[58px] w-[58px] cursor-pointer items-center justify-center rounded-full duration-[500ms] hover:ring-2 hover:ring-white hover:ring-opacity-100"
            style={{ flexShrink: 0 }}
            onMouseEnter={(e) => handleMouseEnter(e, "Server Name")}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleServerClick("Server 8")}
          >
            <img
              src="https://placehold.co/50x50"
              alt="Server Avatar"
              className="h-[52px] w-[52px] rounded-full"
            />
          </div>

          <div
            className="flex h-[58px] w-[58px] cursor-pointer items-center justify-center rounded-full duration-[500ms] hover:ring-2 hover:ring-white hover:ring-opacity-100"
            style={{ flexShrink: 0 }}
            onMouseEnter={(e) => handleMouseEnter(e, "Server Name")}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleServerClick("Server 9")}
          >
            <img
              src="https://placehold.co/50x50"
              alt="Server Avatar"
              className="h-[52px] w-[52px] rounded-full"
            />
          </div>

          <div
            className="flex h-[58px] w-[58px] cursor-pointer items-center justify-center rounded-full duration-[500ms] hover:ring-2 hover:ring-white hover:ring-opacity-100"
            style={{ flexShrink: 0 }}
            onMouseEnter={(e) => handleMouseEnter(e, "Server Name")}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleServerClick("Server 10")}
          >
            <img
              src="https://placehold.co/50x50"
              alt="Server Avatar"
              className="h-[52px] w-[52px] rounded-full"
            />
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-[7.2rem] mb-1 h-6 w-full bg-gradient-to-t from-[#301463]/100 to-transparent"></div>
        <div className="flex flex-col items-center justify-center">
          <div className="mb-1 flex h-[54px] w-[54px] transform cursor-pointer items-center justify-center transition-transform duration-1000 hover:rotate-180">
            <FiSettings
              className="text-2xl text-white"
              onClick={handleSettingsClick}
            />
          </div>
          <div
            className="relative flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-full p-[2px] ring-[3px] ring-[#3b9d73]"
            onClick={handleAvatarClick}
          >
            <img
              src="https://placehold.co/50x50"
              alt="User Avatar"
              className="h-[46px] w-[46px] rounded-full"
            />
          </div>
        </div>
      </aside>

      <main className="flex flex-1">
        {isDmSidebarVisible ? (
          <DmSidebar />
        ) : (
          <ServerSidebar serverName={selectedServer} />
        )}
        {isDmSidebarVisible ? (
          <DmSection />
        ) : (
          <ServerSection
            channelName="general"
            serverUsers={[
              {
                avatar: "https://placehold.co/50x50",
                username: "User One",
                status: "Online",
              },
              {
                avatar: "https://placehold.co/50x50",
                username: "User Two",
                status: "Online",
              },
            ]}
          />
        )}
      </main>

      <ServerTooltip
        visible={tooltip.visible}
        position={tooltip.position}
        text={tooltip.text}
      />
      <UserProfile
        visible={isProfileVisible}
        position={profilePosition}
        onClose={() => setProfileVisible(false)}
      />

      {isUserSettingsVisible && <UserSettings onClose={handleSettingsClick} />}
    </div>
  );
};

export default HomePage;
