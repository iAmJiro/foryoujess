import React, { useState } from "react";
import SecondFunction from "./SecondFunction"; // Import your success component

// Placeholder: Replace this URL with your actual jumping bear GIF
const BEAR_GIF_URL = "../src/assets/bear-love.gif";

export default function CoffeeProposal() {
  const [accepted, setAccepted] = useState(false);
  const [yesScale, setYesScale] = useState(1);
  const [noPosition, setNoPosition] = useState({ top: "auto", left: "auto" });

  // 1. Logic: If the user says Yes, load the SecondFunction
  if (accepted) {
    return <SecondFunction />;
  }

  // 2. Logic: The "No" button interaction
  const handleNoClick = () => {
    // Increase the scale of the YES button by 15% each time
    setYesScale((prev) => prev + 0.15);

    // Calculate random position for the NO button
    // 100px padding ensures it doesn't clip off the screen edge
    const randomTop = Math.random() * (window.innerHeight - 100);
    const randomLeft = Math.random() * (window.innerWidth - 100);

    setNoPosition({
      top: `${randomTop}px`,
      left: `${randomLeft}px`,
    });
  };

  return (
    // Standard Tailwind Layout: Flex container, centered content
    <div className="min-h-screen flex flex-col items-center justify-center bg-sky-900 text-white font-sans p-4 relative overflow-hidden">
      {/* 3. The Central Container (The rounded card in the diagram) */}
      <div className="max-w-md w-full bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl flex flex-col items-center relative z-10">
        {/* 4. The Bear GIF Placeholder */}
        <div className="w-32 h-32 my-6 flex items-center justify-center border-2 border-dashed border-white/30 rounded-lg overflow-hidden">
          {BEAR_GIF_URL ? (
            <img
              src={BEAR_GIF_URL}
              alt="Jumping Bear"
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-xs text-white/50 text-center">Bear GIF</span>
          )}
        </div>
        {/* 5. The Main Question */}
        <h1 className="text-3xl font-semibold text-center mb-10 leading-tight">
          {" "}
        </h1>
        Would you like to get coffee with me?
      </div>

      {/* 6. The Buttons Group */}
      <div className="flex gap-4 items-center justify-center w-full relative h-20">
        {/* THE YES BUTTON */}
        <button
          onClick={() => setAccepted(true)}
          style={{ transform: `scale(${yesScale})` }} // <--- Applied visual scaling
          className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 rounded-full text-lg font-bold transition-all duration-200 shadow-lg active:scale-95 z-20"
        >
          YES
        </button>

        {/* THE NO BUTTON (This button moves) */}
        <button
          onClick={handleNoClick}
          // If positions are 'auto', it stays in the flex layout.
          // When randomTop is set, it teleports.
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
  );
}
