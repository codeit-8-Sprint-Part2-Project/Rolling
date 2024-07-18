import React from "react";
import NavLogo from "../UI/NavLogo";
import NavButton from "../UI/NavButton";
import NavContainer from "../UI/NavContainer";
import { useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <NavContainer>
      <NavLogo />
      {(location.pathname === "/list" || location.pathname === "/") && (
        <NavButton>롤링 페이퍼 만들기</NavButton>
      )}
    </NavContainer>
  );
};

export default Header;
