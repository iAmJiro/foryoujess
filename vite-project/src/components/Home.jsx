import React, { useState } from "react";

import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import img4 from "../images/img4.jpg";
import img5 from "../images/img5.jpg";
import catGif from "../images/cat.gif";
import locationImg from "../images/location.png";

function Home() {
  const [selected, setSelected] = useState("");
  const [noLeft, setNoLeft] = useState(0);
  const [yesScale, setYesScale] = useState(1);
  const [showCat, setShowCat] = useState(false);

  const images = [img1, img2, img3, img4, img5];

  const positions = [
    { top: "10%", left: "5%" }, // top-left
    { top: "10%", left: "70%" }, // top-right
    { top: "50%", left: "0%" }, // middle-left
    { top: "50%", left: "80%" }, // middle-right
    { top: "80%", left: "40%" }, // bottom-center
  ];
  const handleClick = (option) => {
    setSelected(option);

    if (option === "no") {
      setNoLeft((prev) => prev + 50); // instant move
      setYesScale((prev) => prev + 0.5); // instant grow
    }

    if (option === "yes") {
      setShowCat(true);
    }
  };

  return (
    <div className="motherdiv relative min-h-screen overflow-hidden bg-pink-400 flex items-center justify-center">
      {!showCat && (
        <>
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="valentine"
              style={{
                position: "absolute",
                top: positions[index].top,
                left: positions[index].left,
                width: "250px",
                height: "250px",
                borderRadius: "20px",
                zIndex: 1,
                opacity: 0.85,
              }}
            />
          ))}

          <div className="home-container relative z-10 text-center flex flex-col justify-center items-center min-h-screen">
            <h1 className="text-4xl font-bold pt-10">
              hi beaooootiful, will you be my valentine?
            </h1>

            <p className="mt-2 text-lg">
              ps: i'd be a really nice date for you!
            </p>

            <div className="flex gap-6 justify-center mt-10 relative">
              <button
                onClick={() => handleClick("yes")}
                style={{
                  transform: `scale(${yesScale})`,
                  padding: "12px 24px",
                  fontSize: "1.25rem",
                  backgroundColor: "#fff",
                  cursor: "pointer",
                }}
              >
                Yes
              </button>

              <button
                onClick={() => handleClick("no")}
                style={{
                  position: "relative",
                  left: noLeft + "px",
                  padding: "12px 24px",
                  fontSize: "1.25rem",
                  backgroundColor: "#fff",
                  cursor: "pointer",
                }}
              >
                No
              </button>
            </div>
          </div>
        </>
      )}

      {showCat && (
        <div className="celebration flex w-full h-full items-center justify-center">
          <img
            src={catGif}
            alt="yay cat"
            style={{
              width: "300px",
              height: "300px",
              marginRight: "50px",
            }}
          />

          {/* Wrap text + location image in a vertical column */}
          <div className="flex flex-col items-center">
            <h1
              style={{
                fontSize: "4rem",
                fontWeight: "bold",
                color: "#fff",
                textAlign: "center",
              }}
            >
              yay ill see you for coffee at this cafe!
            </h1>

            <img
              src={locationImg}
              alt="location"
              style={{
                width: "400px",
                height: "400px",
                marginTop: "20px",
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
