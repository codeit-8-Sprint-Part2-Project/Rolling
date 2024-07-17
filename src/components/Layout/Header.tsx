import React from "react";
import NavLogo from "../UI/NavLogo";
import NavButton from "../UI/NavButton";
import NavContainer from "../UI/NavContainer";

const Header: React.FC = () => {
  return (
    <NavContainer>
      <NavLogo />
      <NavButton>롤링 페이퍼 만들기</NavButton>
    </NavContainer>
  );
};

export default Header;
