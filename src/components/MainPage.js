import React from "react";
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

const MainPage = () => {
  const runeCount = 70;
  const gridColumns = 10;
  const gridRows = Math.ceil(runeCount / gridColumns);
  const cellWidth = 100 / gridColumns;
  const cellHeight = 100 / gridRows;

  return (
    <div className="runes-bg relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
      <div className="rune-font absolute left-6 top-6 z-20 text-4xl text-white">
        Rune
        <span className="noto-font ml-1.5 text-sm text-gray-400">0.1.0</span>
      </div>

      <h1 className="mb-4 text-5xl font-bold text-white">
        Welcome to <span className="rune-font">Rune</span>
      </h1>
      <p className="mb-6 max-w-lg text-center text-lg text-gray-200">
        Rune is safe, secure, and open-source messenger to stay connected.
        Whether you're chatting with friends or building communities, Rune makes
        sure your interactions are private and protected.
      </p>
      <div className="z-10 flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
        <Link to="/login">
          <button className="w-full transform rounded-md bg-gradient-to-r from-blue-700 to-blue-800 px-6 py-[0.65rem] text-white transition duration-500 hover:scale-105 hover:from-blue-600 hover:to-blue-700 active:scale-[0.8] md:w-auto">
            Log In
          </button>
        </Link>
        <Link to="/register">
          <button className="w-full transform rounded-md border border-indigo-500 px-6 py-[0.65rem] text-indigo-500 transition duration-500 hover:scale-105 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-indigo-600 hover:text-white active:scale-[0.8] md:w-auto">
            Sign Up
          </button>
        </Link>
      </div>

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

      <div className="runes-container">
        {Array.from({ length: runeCount }).map((_, index) => {
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
        })}
      </div>
    </div>
  );
};

export default MainPage;
