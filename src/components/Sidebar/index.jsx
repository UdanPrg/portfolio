import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavItems from "./NavItems";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  // Example array options to render in the sidebar
  const options = [
    { icon: "home", title: "Home", url: "/" },
    { icon: "info", title: "About", url: "/about" },
    { icon: "cog", title: "Settings", url: "/settings" },
    { icon: "question-circle", title: "Help", url: "/help" },
    { icon: "envelope", title: "Contact", url: "/contact" },
    { icon: "user", title: "Profile", url: "/profile" },
    { icon: "sign-out-alt", title: "Logout", url: "/logout" },
  ];
  return (
    <div
      className={`bg-aw-dark-30 text-white p-4 ${
        isOpen ? "w-64" : "w-16"
      } h-full border-r border-aw-bluegray transition-width duration-500`}
    >
      <div
        className={`flex items-center justify-end mb-4`}
      >
        {isOpen ? (
          <button
            onClick={toggleSidebar}
            className="text-neutral-200 cursor-pointer pr-3"
          >
            <FontAwesomeIcon icon="fa-solid fa-chevron-left " />
          </button>
        ) : (
          <button
            onClick={toggleSidebar}
            className="text-neutral-200 cursor-pointer pr-3"
          >
            <FontAwesomeIcon icon="fa-solid fa-chevron-right " />
          </button>
        )}
      </div>
      <div className="flex flex-col items-start justify-between space-x-2 w-full relative">
        {options.map((option, index) => (
          <NavItems
            key={index}
            hiddenNavItem={isOpen}
            active={false}
            activeSidebar={setIsOpen}
            icon={option.icon}
            title={option.title}
            url={option.url}
          />
        ))}
      </div>
    </div>
  );
}
