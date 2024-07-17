import React from "react";
import { useState } from "react";
import IconShare from "../../assets/icons/IconShare.png";

interface ShareButtonProps {
  url: string;
}

const ShareButton: React.FC<ShareButtonProps> = ({ url }) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const shareToKakao = () => {};
  const shareToUrl = () => {
    navigator.clipboard.writeText(url);
    alert("URL이 클립보드에 복사되었습니다.");
  };

  return (
    <>
      <button
        onClick={toggleDropdown}
        className="px-[16px] py-[6px] border border-solid border-[#cccccc] rounded-[6px] ml-[13px]"
      >
        <img src={IconShare} alt="공유하기 버튼" />
      </button>

      {isDropdownVisible && (
        <div>
          <button
            onClick={() => {
              shareToKakao();
              setIsDropdownVisible(false);
            }}
          >
            카카오톡 공유
          </button>
          <button
            onClick={() => {
              shareToUrl();
              setIsDropdownVisible(false);
            }}
          >
            URL 공유
          </button>
        </div>
      )}
    </>
  );
};

export default ShareButton;
