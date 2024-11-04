import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { MdEmail, MdLock, MdPerson, MdKey } from "react-icons/md";
import { Link } from "react-router-dom";

const getRandomOffset = (maxOffset) => Math.random() * maxOffset;
const getRandomDuration = (min, max) => Math.random() * (max - min) + min;
const getRandomFloatHeight = (min, max) => Math.random() * (max - min) + min;

const runes = [
  "ᚠ", "ᚢ", "ᚦ", "ᚨ", "ᚱ", "ᚷ", "ᚹ", "ᚺ", "ᚾ", 
  "ᛃ", "ᛇ", "ᛈ", "ᛉ", "ᛊ", "ᛏ", "ᛒ", "ᛖ", "ᛗ", "ᛚ", 
  "ᛝ", "ᛞ", "ᛟ", "ᛠ", "ᛡ", "ᛣ", "ᛥ", "ᛦ", "ᚴ", "ᛩ", 
  "ᛪ", "ᛯ", "ᛰ", "ᛲ", "ᛳ", "ᛴ", "ᛵ", "ᛶ", "ᛷ", "ᛸ", 
  "ᛋ", "ᛂ", "ᛨ"
]

export default function Register() {
  const runeCount = 70;
  const gridColumns = 10;
  const gridRows = Math.ceil(runeCount / gridColumns);
  const cellWidth = 100 / gridColumns;
  const cellHeight = 100 / gridRows;
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [invitationCode, setInvitationCode] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [runeElements, setRuneElements] = useState([]);

  useEffect(() => {
    const generatedRunes = Array.from({ length: runeCount }).map((_, index) => {
      const column = index % gridColumns;
      const row = Math.floor(index / gridColumns);

      const topPosition = row * cellHeight + getRandomOffset(10);
      const leftPosition = column * cellWidth + getRandomOffset(10);
      const animationDuration = getRandomDuration(3, 8);
      const floatHeight = getRandomFloatHeight(10, 30);

      return (
        <span
          key={index}
          className="rune"
          style={{
            position: "absolute",
            top: `${topPosition}%`,
            left: `${leftPosition}%`,
            fontSize: `${getRandomOffset(20) + 20}px`,
            animation: `fadeInScale 1.5s ease-in-out forwards, float-${index} ${animationDuration}s ease-in-out infinite`,
            transform: `translate(-50%, -50%)`,
          }}
        >
          {runes[Math.floor(Math.random() * runes.length)]}{" "}
          <style>{`
            @keyframes float-${index} {
              0%, 100% {
                transform: translateY(0);
              }
              50% {
                transform: translateY(-${floatHeight}px);
              }
            }
            @keyframes fadeInScale {
              0% {
                opacity: 0;
                transform: scale(0.5);
              }
              100% {
                opacity: 1;
                transform: scale(1);
              }
            }
          `}</style>
        </span>
      );
    });

    setRuneElements(generatedRunes);
  }, [runeCount]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="runes-bg relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
      <Link
        to="/"
        className="rune-font absolute left-6 top-6 z-20 text-4xl text-white"
      >
        Rune
        <span className="noto-font ml-1.5 text-sm text-gray-400">0.1.0</span>
      </Link>

      <form
        onSubmit={handleSubmit}
        className="z-10 w-full max-w-sm rounded-lg border-[3px] border-indigo-800 bg-gray-800 p-6"
      >
        <h1 className="mb-5 text-center text-[2.1rem] font-extrabold text-white">
          Register
        </h1>

        <div className="mb-4">
          <label
            htmlFor="username"
            className="mb-1 flex items-center text-sm font-medium text-gray-300"
          >
            <MdPerson className="mr-0.5 text-indigo-500" size={20} />
            Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="mt-2 block w-full rounded-md border border-gray-600 bg-gray-700 p-2 text-gray-200 transition duration-150 ease-in-out hover:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          {errors.username && (
            <p className="mt-1 text-sm text-red-500">{errors.username}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="mb-1 flex items-center text-sm font-medium text-gray-300"
          >
            <MdEmail className="mr-1 text-indigo-500" size={20} />
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-2 block w-full rounded-md border border-gray-600 bg-gray-700 p-2 text-gray-200 transition duration-150 ease-in-out hover:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="mb-1 flex items-center text-sm font-medium text-gray-300"
          >
            <MdLock className="mr-0.5 text-indigo-500" size={20} />
            Password
          </label>
          <div className="relative flex items-center">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 block w-full rounded-md border border-gray-600 bg-gray-700 p-2 pr-10 text-gray-200 transition duration-150 ease-in-out hover:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <div
              className="absolute right-3 top-3 cursor-pointer text-gray-400"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? (
                <AiFillEyeInvisible size={24} />
              ) : (
                <AiFillEye size={24} />
              )}
            </div>
          </div>
          {errors.password && (
            <p className="mt-1 text-sm text-red-500">{errors.password}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="invitationCode"
            className="mb-1 flex items-center text-sm font-medium text-gray-300"
          >
            <MdKey className="mr-1 text-indigo-500" size={20} />
            Invitation Code
          </label>
          <input
            type="text"
            id="invitationCode"
            value={invitationCode}
            onChange={(e) => setInvitationCode(e.target.value)}
            required
            className="mt-2 block w-full rounded-md border border-gray-600 bg-gray-700 p-2 text-gray-200 transition duration-150 ease-in-out hover:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <button
          type="submit"
          className="mt-2 w-full rounded-md bg-indigo-800 py-3 text-white shadow-md transition duration-150 ease-in-out hover:bg-indigo-700"
        >
          Register
        </button>

        <div className="mt-6 text-center text-gray-400">
          <p>
            Already have an account?{" "}
            <Link to="/login" className="text-indigo-500 hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </form>

      <footer className="absolute bottom-4 flex items-center text-sm text-gray-400">
        Made with
        <svg
          className="mx-1 h-4 w-4 fill-current text-red-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
        by&nbsp;
        <a
          href="https://github.com/karssak"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-indigo-400"
        >
          karssak
        </a>
      </footer>

      <div className="runes-container absolute inset-0 overflow-hidden">
        {runeElements}
      </div>
    </div>
  );
}
