import { useState } from "react";

const useClickAnimation = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (callback: () => void) => {
    setIsClicked(true);
    callback();

    setTimeout(() => {
      setIsClicked(false);
    }, 200);
  };

  return { isClicked, handleClick };
};

export default useClickAnimation;
