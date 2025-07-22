import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { AnimatePresence, motion } from "motion/react";

import AvatarImage from "@/assets/udanPrg_perfil.jpg"; // Placeholder image

export default function Home() {
  /**
   * ==============   Styles   ================
   */

  const container = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: 100,
    height: 160,
    position: "relative",
  };

  const box = {
    width: 100,
    height: 100,
    backgroundColor: "#0cdcf7",
    borderRadius: "10px",
  };

  const button = {
    backgroundColor: "#0cdcf7",
    borderRadius: "10px",
    padding: "10px 20px",
    color: "#0f1115",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  };
  const [isVisible, setIsVisible] = useState(false);
  const [status, setStatus] = useState("inactive");

  // const box = {
  //   width: 100,
  //   height: 100,
  //   backgroundColor: "rgba(200, 200, 200, 0.8)",
  //   borderRadius: 5,
  // };
  // Typewriter animation states
  const typewriterText =
    "Full Stack Developer | autod.Software Engineer | Tech Lead(in Progress)";
  const [displayedText, setDisplayedText] = useState("");
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(typewriterText.slice(0, i + 1));
      i++;
      if (i === typewriterText.length) clearInterval(interval);
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-items-start min-h-(--main-height) bg-gray-100 p-4">
      {/* Roles */}
      <div className="w-full flex justify-center items-center mb-8 sm:my-8 h-80 bg-pf-dark rounded-lg shadow-2xl p-4">
        <LazyLoadImage
          src={AvatarImage}
          alt="UdanPrg Avatar"
          effect="blur"
          className="rounded-full w-4/5 mb-4 mx-auto border-4 border-pf-ocre shadow-lg"
        />
        <motion.h1
          className="text-lg sm:text-2xl font-bold mb-4 text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {displayedText}
          <span className="animate-pulse">|</span>
        </motion.h1>
      </div>
      <div className="relative flex h-screen flex-col items-center justify-center w-full">
        <div style={container}>
          <AnimatePresence initial={false}>
            {isVisible ? (
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0,
                  position: "absolute",
                  top: 300,
                  left: 50,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  position: "absolute",
                  top: 0,
                  left: 0,
                }}
                exit={{ opacity: 0, scale: 0 }}
                style={box}
                key="box"
              />
            ) : null}
          </AnimatePresence>

          <AnimatePresence initial={false}>
            {isVisible ? (
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0,
                  position: "absolute",
                  bottom: 50,
                  left: 0,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  position: "absolute",
                  bottom: -215,
                  left: 0,
                }}
                exit={{ opacity: 0, scale: 0 }}
                style={box}
                key="box"
              />
            ) : null}
          </AnimatePresence>
          <motion.button
            style={button}
            onClick={() => setIsVisible(!isVisible)}
            whileTap={{ y: 1 }}
          >
            {isVisible ? "Hide" : "Show"}
          </motion.button>
        </div>
        {/* <motion.button
          whileHover={{ scale: 1.5, rotate: -10 }}
          whileTap={{ scale: 0.95 }}
          onHoverStart={() => console.log("hover started!")}
          style={box}
          onClick={() =>
            setStatus(
              status === "inactive"
                ? "active"
                : status === "active"
                ? "inactive"
                : "complete"
            )
          } // Toggle status on click
        >
          <FontAwesomeIcon
            icon="fa-solid fa-home"
            className="text-3xl text-blue-500"
          />
        </motion.button>
        <motion.div
          className="z-50 w-40 h-80 flex items-center justify-center"
          initial={{ opacity: 0 }}
          transition={{ duration: 1 }}
          animate={status}
          variants={{
            inactive: {
              backgroundColor: "rgba(200, 200, 200, 0.8)",
              scale: 0.95,
            },
            active: {
              backgroundColor: "rgba(100, 100, 100, 0.8)",
              scale: 1.25,
            },
            complete: {
              backgroundColor: "rgba(50, 50, 50, 0.8)",
              scale: 1.5,
              rotate: 360,
            },
          }}
        >
          <h2 className="text-2xl font-bold text-gray-800">
            Welcome to My Portfolio
          </h2>
        </motion.div> */}
      </div>
    </div>
  );
}
