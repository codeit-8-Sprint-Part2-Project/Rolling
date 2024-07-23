import * as React from "react";
import IcCheckTheme from "../../../../assets/icons/check.png";

const ThemeCheckIc: React.FC = () => (
  <img
    src={IcCheckTheme}
    alt="배경화면 선택 아이콘"
    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12"
  />
);

export default ThemeCheckIc;
