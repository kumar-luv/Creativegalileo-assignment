import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserCog } from "react-icons/fa";

const Sidebar = () => {
  const [isActive, setIsActive] = useState(false);

  const handleLinkClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
      <div
        className={`text-white cursor-pointer w-full justify-center flex gap-2 items-center text-center  ${
          isActive ? "bg-purple-950" : "bg-purple-500"
        }`}
      >
        <FaUserCog className="text-2xl" />
        <Link to="/customer" onClick={handleLinkClick}>
          Manage Customers
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
