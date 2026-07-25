import React, { useState } from "react";
import SecondFunction from "./SecondFunction";
// 1. Import the GIF as a module so Vite bundles it properly
import bearLoveGif from "../assets/bear-love.gif"; // Adjust path if needed (e.g. "../assets/bear-love.gif")

export default function CoffeeProposal() {
  const [accepted, setAccepted] = useState(false);
  const [yesScale, setYesScale] = useState(1);
  const [noPosition, setNoPosition] = useState({ top: "auto", left: "auto" });

  if (accepted) {
    return <SecondFunction />;
  }

  const handleNoClick = () => {
    setYesScale((prev) => prev + 0.15);

    const randomTop = Math.random() * (window.innerHeight - 100);
    const randomLeft = Math.random() * (window.innerWidth - 100);

    setNoPosition({
      top: `${randomTop}px`,
      left: `${randomLeft}px`,
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-orange-200 text-white font-sans p-4 relative overflow-hidden">
      {/* Central Container Card */}
      <div className="max-w-md w-full bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl flex flex-col items-center relative z-10">
        {/* Bear GIF Container */}
        <div className="w-32 h-32 my-6 flex items-center justify-center border-2 border-dashed border-white/30 rounded-lg overflow-hidden">
          <img
            src={bearLoveGif}
            alt="Jumping Bear"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Main Question inside the Card */}
        <h1 className="text-3xl font-semibold text-center mb-8 leading-tight text-black">
          Would you like to get coffee with me?
        </h1>

        {/* Buttons Group inside the Card */}
        <div className="flex gap-4 items-center justify-center w-full relative h-20">
          {/* YES BUTTON */}
          <button
            onClick={() => setAccepted(true)}
            style={{ transform: `scale(${yesScale})` }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 rounded-full text-lg font-bold transition-all duration-200 shadow-lg active:scale-95 z-20"
          >
            YES
          </button>

          {/* NO BUTTON */}
          <button
            onClick={handleNoClick}
            style={
              noPosition.top === "auto"
                ? { position: "static" }
                : { position: "fixed", ...noPosition }
            }
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full text-md font-medium transition-all duration-100 shadow-md active:scale-95 z-30"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}
