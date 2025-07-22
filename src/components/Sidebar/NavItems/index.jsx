import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function NavItems({
  hiddenNavItem,
  active,
  activeSidebar,
  icon,
  title,
  url,
}) {
 
  return (
    <Link
      to={url}
      className={`grid grid-cols-6 p-2 rounded-lg cursor-pointer hover:bg-pf-dark-20 transition-colors duration-200 w-full ${
        active ? "bg-pf-bluegray" : ""
      }`}
    >
      <div className={`flex items-center justify-center col-span-1`}>
        <FontAwesomeIcon
          icon={`fa-solid fa-${icon}`}
          className="text-lg cursor-pointer"
        />
      </div>
      <span className={` text-sm font-medium transition-all duration-300 ${hiddenNavItem? 'col-span-3 scale-100 opacity-100':'scale-0 opacity-0'}`}>{title}</span>
    </Link>
  );
}
