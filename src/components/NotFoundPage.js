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

const quotes = [
  "Not all who wander are lost, but you might be. 🧭",
  "Oops! You’ve discovered the secret void of the internet. 🌌",
  "Even the best explorers take a wrong turn sometimes.",
  "Looks like you're in uncharted territory. Let’s get you back on track!",
  "It’s not a bug, it’s a feature… of being lost.",
  "This page is hiding better than Waldo. 🕵️‍♂️",
  "The page you seek is beyond the reach of mere mortals.",
  "404: The page you were looking for is on vacation. 🏖️",
  "Houston, we have a problem… this page is missing. 🚀",
  "You’ve gone off the map, but we’ll help you find your way.",
  "Error 404: The universe has misplaced your destination.",
  "Sometimes we take the wrong path, but that’s how we grow. 🌱",
  "Don't cry because it's gone. Smile because you can go back home! 😊",
  "Life is about the journey, not the destination—except this time.",
  "This isn’t where you parked your car, is it?",
  "404: The pixels you’re looking for are unavailable.",
  "Oops, the internet elves took this page for maintenance. 🧝‍♂️",
  "Are we lost? Or are we just finding a new adventure?",
  "Let’s agree this is a detour, not a dead end. 🚧",
  "Somewhere, someone is laughing at this 404 joke. Maybe you too?",
];

const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

const NotFoundPage = () => {
  const runeCount = 50;
  const gridColumns = 10;
  const gridRows = Math.ceil(runeCount / gridColumns);
  const cellWidth = 100 / gridColumns;
  const cellHeight = 100 / gridRows;

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gray-900">
      {}
      <div className="runes-container absolute inset-0">
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
              className="rune text-white opacity-30"
              style={{
                position: "absolute",
                top: `${topPosition}%`,
                left: `${leftPosition}%`,
                fontSize: `${getRandomOffset(20) + 20}px`,
                animation: `fadeInScale 1.5s ease-in-out forwards, float-${index} ${animationDuration}s ease-in-out infinite`,
                transform: `translate(-50%, -50%)`,
              }}
            >
              {runes[Math.floor(Math.random() * runes.length)]}
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

      {}
      <Link
        to="/"
        className="rune-font absolute left-6 top-6 z-20 text-4xl text-white"
      >
        Rune
        <span className="noto-font ml-1.5 text-sm text-gray-400">0.1.0</span>
      </Link>

      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <h1 className="text-[15rem] font-extrabold text-white opacity-5">
          404
        </h1>
      </div>
      <div className="z-10 text-center">
        <h2 className="mb-4 text-4xl font-bold text-white">Page Not Found</h2>
        <p className="mb-4 text-white">
          The page you are looking for doesn’t exist or has been moved.
        </p>
        <p className="mb-4 text-lg italic text-gray-400">"{randomQuote}"</p>
        <Link to="/">
          <button className="transform rounded-md bg-gradient-to-r from-blue-700 to-blue-800 px-6 py-[0.65rem] text-white transition duration-500 hover:scale-105 hover:from-blue-600 hover:to-blue-700 active:scale-[0.9]">
            Go Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
