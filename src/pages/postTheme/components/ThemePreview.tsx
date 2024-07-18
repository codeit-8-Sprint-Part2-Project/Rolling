import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { ThemePreviewProps } from "../constants/propTypes";
import { getColorClass } from "../utils/getColorClass";

interface ExtendedThemePreviewProps extends ThemePreviewProps {
  isThemeType: boolean;
}

const ThemePreview: React.FC<ExtendedThemePreviewProps> = ({ themeData }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const backgroundColorClass = getColorClass(themeData.backgroundColor);

  // 모달창 버튼 이벤트 관리
  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  // 데이터 값이 변경될 때마다 이름 유효성 검사
  useEffect(() => {
    setIsDisabled(!themeData.name?.trim());
  }, [themeData]);

  // Modal 외부의 요소 제한
  useEffect(() => {
    Modal.setAppElement("body");
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={handleOpenModal}
        className={`absolute right-0 w-[140px] h-full max-md:w-[122px] rounded-sm ${
          isDisabled ? "bg-gray-200" : "bg-violet-500 text-white"
        }`}
        disabled={isDisabled}
      >
        미리 보기
      </button>
      <Modal
        isOpen={isOpen}
        onRequestClose={handleCloseModal}
        contentLabel="미리보기 모달"
      >
        <div className="w-full h-full flex items-center justify-center rounded-lg">
          <main
            className={`w-full h-full ${backgroundColorClass}`}
            style={{
              backgroundImage: `url(${themeData.backgroundImageURL})`,
              backgroundSize: "cover",
            }}
          >
            {/* 여기에 빈 post 페이지 스타일을 긁어옵니다.
            x-iframe-option to deny */}
          </main>
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
