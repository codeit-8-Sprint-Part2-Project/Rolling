import React from "react";
import { Link } from "react-router-dom";

const Nav: React.FC = () => {
  return (
    <div className="border-b border-solid border-gray-300 h-16 flex items-center">
      <div className="container mx-auto max-w-[1200px]">
        <Link to="/">
          <div className="flex flex-row items-center">
            <img
              className="mr-2"
              src="/assets/icons/IconColor.png"
              alt="Rolling 로고"
              width="27.82"
            />
            <p className="font-poppins font-bold text-xl text-gray-800">
              Rolling
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
