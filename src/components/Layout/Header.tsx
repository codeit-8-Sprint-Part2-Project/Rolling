import { ReactElement } from "react";
import NavLogo from "../UI/NavLogo";
import NavButton from "../UI/NavButton";
import NavContainer from "../UI/NavContainer";
import { useLocation } from "react-router-dom";

const Header = (): ReactElement => {
  const location = useLocation();

  const isListorHomePage =
    location.pathname === "/list" || location.pathname === "/";

  return (
    <NavContainer className={`${!isListorHomePage ? "max-md:hidden" : ""}`}>
      <NavLogo />
      {isListorHomePage && <NavButton>롤링 페이퍼 만들기</NavButton>}
    </NavContainer>
  );
};

export default Header;
