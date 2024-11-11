import React, { useEffect } from "react";

const UserProfile = ({ visible, position, onClose }) => {
  useEffect(() => {
    if (!visible) return;

    const handleClickOutside = (event) => {
      if (!event.target.closest(".user-profile")) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [visible, onClose]);

  if (!visible) return null;

  return (
    <div
      className="user-profile absolute h-[24rem] w-[17rem] overflow-hidden rounded-lg shadow-lg"
      style={{
        top: position.top,
        left: position.left,
        transform: "translate(0, -100%)",
        background: "linear-gradient(135deg, #4a2a89 0%, #243b6b 100%)",
      }}
    >
      <div className="h-20 w-full bg-gray-700"></div>

      <div className="relative flex flex-col items-start p-4">
        <div className="relative -mt-12 flex flex-col items-start">
          <div className="relative flex h-[74px] w-[74px] cursor-pointer items-center justify-center rounded-full p-[2px] ring-[3px] ring-[#3b9d73]">
            <img
              src="https://placehold.co/70x70"
              alt="User Avatar"
              className="h-[70px] w-[70px] rounded-full"
            />
          </div>
        </div>

        <div className="mt-2 text-left">
          <h2 className="text-lg font-semibold text-white">Username</h2>
          <p className="text-gray-300">user@example.com</p>
        </div>

        <div className="mt-4 text-left text-sm text-gray-400">
          <h3 className="font-semibold text-white">Bio</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            laoreet velit vel neque faucibus, sit amet mollis justo cursus.
          </p>
        </div>

        <div className="mt-4 text-left text-sm text-gray-400">
          <h3 className="font-semibold text-white">User ID</h3>
          <p>User123456789</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
