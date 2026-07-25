import React, { useState } from "react";

// Placeholder: Replace with a cozy celebrate/happy bear GIF URL
const CELEBRATE_BEAR_GIF =
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3Z6Z3B4Z3B4Z3B4/v1.Y2lkPTc5MGI3NjExM3Z6Z3B4/giphy.gif";

export default function SecondFunction() {
  const [kartingAccepted, setKartingAccepted] = useState(false);
  const [yesScale, setYesScale] = useState(1);
  const [noPosition, setNoPosition] = useState({ top: "auto", left: "auto" });

  const handleNoClick = () => {
    // Grow the YES button
    setYesScale((prev) => prev + 0.15);

    // Randomly relocate the NO button across the screen
    const randomTop = Math.random() * (window.innerHeight - 100);
    const randomLeft = Math.random() * (window.innerWidth - 100);

    setNoPosition({
      top: `${randomTop}px`,
      left: `${randomLeft}px`,
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-sky-900 text-white font-sans p-4 relative overflow-hidden">
      <div className="max-w-md w-full bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl flex flex-col items-center text-center relative z-10">
        {/* Happy GIF */}
        <div className="w-40 h-40 mb-6 rounded-full overflow-hidden border-4 border-emerald-400 shadow-lg flex items-center justify-center bg-white/20">
          <img
            src={CELEBRATE_BEAR_GIF}
            alt="Celebrating Bear"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Success Title */}
        <h1 className="text-3xl font-extrabold text-emerald-300 mb-3">
          Yay! It's a date! ☕✨
        </h1>

        <p className="text-lg text-white/90 mb-8">
          I knew you'd say yes eventually! Soooo go carting after???
        </p>

        {/* Conditional Rendering: Show final message when Yes is pressed */}
        {kartingAccepted ? (
          <div className="bg-emerald-500/20 border border-emerald-400/50 p-4 rounded-xl text-emerald-200 font-semibold animate-bounce">
            🏎️ Double yes!! Send me a message to pick the cafe & track! 📱
          </div>
        ) : (
          /* Interactive Yes/No Buttons */
          <div className="flex gap-4 items-center justify-center w-full relative h-20">
            {/* YES BUTTON */}
            <button
              onClick={() => setKartingAccepted(true)}
              style={{ transform: `scale(${yesScale})` }}
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-10 py-3 rounded-full text-lg font-bold transition-all duration-200 shadow-lg active:scale-95 z-20"
            >
              YES!
            </button>

            {/* NO BUTTON (Teleports on click) */}
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
        )}
      </div>
    </div>
  );
}
