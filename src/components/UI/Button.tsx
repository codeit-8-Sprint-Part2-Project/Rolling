import React from 'react';
import { NavLink } from 'react-router-dom';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  btnName: string;
  isActive?: boolean;
  variant?: boolean;
}

interface LinkButtonProps {
  path: string;
  btnName: string;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ type = 'button', btnName, isActive = false, variant }) => {
  const variantClass = variant ? 'bg-[#9747FF] text-white' : 'bg-gray-200 text-black';

  return (
    <button
      className={`w-[280px] h-[56px] absolute top-[24px] left-[461px] gap-0 border-t border-opacity-0 px-4 py-2 rounded-[12px] ${variantClass}`}
      disabled={!isActive}
      type={type}
    >
      {btnName}
    </button>
  );
};

export const LinkButton: React.FC<LinkButtonProps> = ({ path, btnName, className }) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <NavLink
        to={path}
        className="w-[280px] h-[56px] bg-[#9747FF] text-white px-4 py-2 rounded-[12px] flex items-center justify-center"
      >
        {btnName}
      </NavLink>
    </div>
  );
};