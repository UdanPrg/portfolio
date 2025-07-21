import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "motion/react";

export default function Home() {
  const box = {
    width: 100,
    height: 100,
    backgroundColor: "rgba(200, 200, 200, 0.8)",
    borderRadius: 5,
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-(--main-height) bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome to Home Page</h1>
      <p className="text-gray-700 text-justify">
        This is the home page of the application where you can find various
        features and functionalities. lorem*50
      </p>
      <div className="mt-4">
        <motion.button
          whileHover={{ scale: 1.5, rotate: -10 }}
          whileTap={{ scale: 0.95 }}
          onHoverStart={() => console.log("hover started!")}
          style={box}
        >
          <FontAwesomeIcon
            icon="fa-solid fa-home"
            className="text-3xl text-blue-500"
          />
        </motion.button>
      </div>
    </div>
  );
}
