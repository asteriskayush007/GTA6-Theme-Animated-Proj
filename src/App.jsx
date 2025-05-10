import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import { FaPlaystation, FaXbox } from "react-icons/fa";
import { RiStarSmileLine } from "react-icons/ri";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import BackgroundMusic from "./component/BackgroundMusic";

gsap.registerPlugin(ScrollTrigger);

function App() {
  let [showContent, setShowContent] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      ease: "power1.inOut",
      transformOrigin: "50% 50%",
      duration: 2,
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "expo.inOut",
      transform: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          document.querySelector(".svg").remove();
          setShowContent(true);
          this.kill();
        }
      },
    });
  });

  useGSAP(() => {
    if (!showContent) return;
    gsap.to(".main", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-1",
      ease: "expo.easeInout",
    });
    gsap.to(".sky", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-.5",
      ease: "expo.easeInout",
    });
    gsap.to(".bg", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-.3",
      ease: "expo.easeInout",
    });
    gsap.to(".girlbg", {
      scale: 1,
      x: "-50%",
      bottom: "-43%",
      rotate: 0,
      duration: 2,
      delay: "-.1",
      ease: "expo.easeInout",
    });
    gsap.to(".text", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-.1",
      ease: "expo.easeInout",
    });

    const main = document.querySelector(".main");

    main?.addEventListener("mousemove", function (e) {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".imagesdiv .text", {
        x: `${xMove * 0.4}%`,
      });
      gsap.to(".sky", {
        x: xMove,
      });
      gsap.to(".bg", {
        x: xMove * 1.7,
      });
    });
  }, [showContent]);

  return (
    <>
      
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <BackgroundMusic/>
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {showContent && (
        <div className="main w-full rotate-[-10deg] scale-[1.7]">
          <div className="landing overflow-hidden relative w-full h-screen bg-black">
            <div className="navbar absolute top-0 left-0 z-[10] w-full py-10 px-10">
              <div className="logo flex gap-7">
                <div className="lines flex flex-col gap-[6px]">
                  <div className="line w-15 h-2 bg-white"></div>
                  <div className="line w-8 h-2 bg-white"></div>
                  <div className="line w-5 h-2 bg-white"></div>
                </div>
                <h3 className="text-4xl -mt-[10px] leading-none text-amber-50">
                  RockStar
                </h3>
              </div>
            </div>

            <div className="imagesdiv overflow-hidden relative w-full h-screen">
              <img
                className="sky scale-[1.5] rotate-[-25deg] absolute top-0 left-0 w-full h-full object-cover"
                src="./sky.png"
                alt=""
              />
              <img
                className="bg scale-[1.8] rotate-[-15deg] absolute top-0 left-0 w-full h-full object-cover"
                src="./bg.png"
                alt=""
              />
              <div className="text absolute text-white flex flex-col gap-4 top-15 left-1/2 -translate-x-1/2 scale-[1.4] rotate-[-10deg]">
                <h1 className="text-[10rem] leading-none -ml-35">grand</h1>
                <h1 className="text-[10rem] leading-none ml-20">theft</h1>
                <h1 className="text-[10rem] leading-none -ml-20">auto VI</h1>
              </div>
              <img
                className="girlbg absolute -bottom-[150%] left-1/2 -translate-x-1/2 scale-[3] rotate-[-20deg]"
                src="./girlbg.png"
                alt=""
              />
            </div>
            <div className="btmbar text-white absolute bottom-0 left-0 w-full py-15 px-10 bg-gradient-to-t from-black to-transparent">
              <div className="flex gap-4 items-center">
                <i className="text-4xl ri-arrow-down-line"></i>
                <h3 className="text-xl font-pricedown">Scroll Down</h3>
              </div>
              <img
                className="absolute top-1/2 left-1/2 -translate-1/2 h-[65px]"
                src="./ps5.png"
                alt=""
              />
              <i className="Sound ri-volume-up-fill ml-[90%] text-3xl"></i>
            </div>
          </div>
          <div className="w-full h-screen flex px-10 items-center justify-center bg-black">
            <div className="cntr w-full flex text-white h-[80%]">
              <div className="limg relative w-1/2 h-full">
                <img src="./imag.png" alt="" />
              </div>
              <div className="rg relative w-1/2 h-full">
                <h1 className="text-8xl mt-20">BIENVENUE À LEONIDA</h1>
                <p className="mt-15 font-[Helvetica_Now_Display] text-2xl">
                  <span className="text-4xl font-[pricedown]">"</span>GTA 6 is
                  one of the most awaited games by{" "}
                  <span className="font-bold">Rockstar Games</span>, set to
                  release with stunning graphics and an expansive open world.
                  The game is rumored to feature Vice City and possibly multiple
                  playable protagonists. Fans are excited about the improved AI,
                  realistic physics, and dynamic weather systems.{" "}
                  <span className="text-4xl font-[pricedown]">"</span>
                </p>
                <p className="mt-10 font-[Helvetica_Now_Display] text-2xl">
                  GTA 6 is expected to push the boundaries of storytelling and
                  gameplay in open-world games. It has already created massive
                  hype in the gaming community worldwide!
                </p>
                <input
                  className="p-3 border-1 text-black bg-[#FCD076] text-2xl mt-10 hover:bg-black hover:text-[#FCD076]"
                  type="submit"
                  value="Book Now"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-black to-gray-900 text-center">
            <div className="relative mb-10">
              {/* VI text */}
              <div className="text-[20rem] font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400 bg-clip-text text-transparent select-none">
                VI
              </div>
              {/* grand theft auto text overlapping VI */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text absolute text-white flex flex-col gap-4 top-15 left-1/2 -translate-x-1/2 mt-30">
                  <h1 className="text-[3rem] leading-none -ml-30">grand</h1>
                  <h1 className="text-[3rem] leading-none ml-20">theft</h1>
                  <h1 className="text-[3rem] leading-none -ml-25">auto</h1>
                </div>
              </div>
            </div>

            {/* Release text */}
            <div className="space-y-2">
              <div className="text-[7rem] leading-none font-extrabold bg-gradient-to-r from-orange-300 to-pink-500 bg-clip-text text-transparent">
                COMING
              </div>
              <div className="text-[7rem] leading-none font-extrabold bg-gradient-to-r from-orange-300 to-pink-500 bg-clip-text text-transparent">
                MAY 26
              </div>
              <div className="text-[7rem] leading-none font-extrabold bg-gradient-to-r from-orange-300 to-pink-500 bg-clip-text text-transparent">
                2026
              </div>
            </div>
          </div>

          
          
          <div className="bg-gray-900 text-gray-300 px-6 py-10 text-center">
            {/* Platforms */}
            <div className="mb-6">
              <p className="mb-2 text-6xl">Available on:</p>
              <div className="flex justify-center mt-2 gap-6 text-5xl">
                <FaPlaystation />
                <FaXbox />
              </div>
            </div>

            {/* Rockstar Propaganda Button */}
            <div className="mb-6 flex flex-col md:flex-row items-center justify-center border border-gray-700 rounded-full px-6 py-4 max-w-6xl mx-auto">
              <div className="flex items-center gap-2 mb-2 md:mb-0 md:mr-4">
                <RiStarSmileLine className="text-2xl" />
                <span className="font-bold text-[15px] font-[Helvetica_Now_Display]">GET ROCKSTAR PROPAGANDA</span>
              </div>
              <p className="text-[15px] text-gray-400 font-[Helvetica_Now_Display]">
                Get the latest game announcements, updates on special events and
                offers, and much more from Rockstar Games.
              </p>
            </div>

            {/* Footer Links */}
            <div className="mb-4 flex flex-wrap justify-center gap-7 text-[15px] font-[Helvetica_Now_Display]">
              <span>Corporate</span>
              <span>Privacy</span>
              <span>Cookie Settings</span>
              <span>Cookie Policy</span>
              <span>Legal</span>
              <span>Do Not Sell or Share My Personal Information</span>
            </div>

            {/* ESRB Section */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-xs font-[Helvetica_Now_Display]">
              <div className="p-2">
                <div className="block h-[30px] w-[30px]"><img src="./logo18.png" alt="" /></div>
              </div>
              <p className="font-[Helvetica_Now_Display]">
                May contain content inappropriate for children. Visit{" "}
                <a href="https://www.esrb.org" className="underline font-[Helvetica_Now_Display]">
                  esrb.org
                </a>{" "}
                for rating information.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
