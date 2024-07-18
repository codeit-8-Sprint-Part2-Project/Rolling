import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { ThemePreviewProps } from "../constants/propTypes";
import { getColorClass } from "../utils/getColorClass";

interface ExtendedThemePreviewProps extends ThemePreviewProps {
  isThemeType: boolean;
}

const ThemePreview: React.FC<ExtendedThemePreviewProps> = ({ themeData }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const backgroundColorClass = getColorClass(themeData.backgroundColor);

  // 모달창 버튼 이벤트 관리
  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  // Modal 외부의 요소 제한
  useEffect(() => {
    Modal.setAppElement("body");
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={handleOpenModal}
        className="absolute right-0 w-[140px] h-full max-md:w-[122px] rounded-sm bg-gray-200"
      >
        미리 보기
      </button>
      <Modal
        isOpen={isOpen}
        onRequestClose={handleCloseModal}
        contentLabel="미리보기 모달"
      >
        <div className="w-full h-full flex items-center justify-center rounded-lg">
          <div
            className={`w-full h-full ${backgroundColorClass}`}
            style={{
              backgroundImage: `url(${themeData.backgroundImageURL})`,
              backgroundSize: "cover",
            }}
          />
        </div>
        <button
          onClick={handleCloseModal}
          className="w-full mt-4 p-2 bg-violet-500 text-white rounded"
        >
          닫기
        </button>
      </Modal>
    </>
  );
};

export default ThemePreview;
