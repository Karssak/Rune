import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { MdEmail, MdLock } from "react-icons/md";
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

const LoginPage = () => {
  const runeCount = 70;
  const gridColumns = 10;
  const gridRows = Math.ceil(runeCount / gridColumns);
  const cellWidth = 100 / gridColumns;
  const cellHeight = 100 / gridRows;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
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
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
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
        className="z-10 w-full max-w-sm rounded-lg border-[3px] border-blue-700 bg-gray-800 p-6"
      >
        <h1 className="mb-6 text-center text-[2.1rem] font-extrabold text-white">
          Login
        </h1>

        <div className="mb-4">
          <label className="mb-1 flex items-center text-sm font-medium text-gray-300">
            <MdEmail className="mr-1 text-blue-500" size={20} />
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-2 block w-full rounded-md border border-gray-600 bg-gray-700 p-2 text-gray-200 transition duration-150 ease-in-out hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="mb-1 flex items-center text-sm font-medium text-gray-300">
            <MdLock className="mr-0.5 text-blue-500" size={20} />
            Password
          </label>
          <div className="relative flex items-center">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 block w-full rounded-md border border-gray-600 bg-gray-700 p-2 pr-10 text-gray-200 transition duration-150 ease-in-out hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
        </div>

        <button
          type="submit"
          className="mt-2 w-full rounded-md bg-blue-800 py-3 text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700"
          disabled={isLoading}
        >
          {isLoading ? "Logging in..." : "Login"}
        </button>

        <div className="mb-1 mt-6 text-center text-gray-300">
          <p>
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-500 hover:underline">
              Register
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

      <div className="runes-container">{runeElements}</div>
    </div>
  );
};

export default LoginPage;
