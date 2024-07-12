import React from "react";
import NavLogo from "../UI/NavLogo";
import NavButton from "../UI/NavButton";
import HeaderContainer from "../UI/NavContainer";

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <NavLogo />
      <NavButton>롤링 페이퍼 만들기</NavButton>
    </HeaderContainer>
  );
};

export default Header;
