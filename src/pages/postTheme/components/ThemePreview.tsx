import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { ThemePreviewProps } from "../constants/propTypes";
import { getColorClass } from "../utils/getColorClass";
import PreviewPlusCard from "../../postTheme/UI/PreviewPlusCard";

// backgroundColorClass  themeData.backgroundImageURL
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
        className="fixed inset-0 flex items-center justify-center"
        overlayClassName="fixed inset-0 bg-black bg-opacity-75"
      >
        <div className="flex flex-col bg-white rounded-lg overflow-hidden max-h-[80vh] w-full max-w-5xl p-6 max-[1248px]:mx-6">
          <div className="flex flex-col h-4/5">
            <header className="h-[4.25rem] bg-white top-0 z-10 border-b border-solid border-[#EDEDED] flex-shrink-0 max-md:h-12">
              <div className="h-full max-w-[78rem] mx-auto px-6 flex items-center">
                <span className="text-[1.75rem] leading-[2.625rem] font-bold text-lg text-[#2B2B2B] grow max-md:text-[10px]">
                  To. {themeData.name}
                </span>
              </div>
            </header>
            <main
              className={`pb-60 bg-no-repeat bg-cover ${backgroundColorClass}`}
              style={
                themeData.backgroundImageURL
                  ? {
                      backgroundImage: `url(${themeData.backgroundImageURL})`,
                      backgroundSize: "cover",
                    }
                  : {}
              }
            >
              <PreviewPlusCard />
            </main>
          </div>
          <button
            onClick={handleCloseModal}
            className="w-full mt-4 p-2 bg-violet-500 text-white rounded"
          >
            닫기
          </button>
        </div>
      </Modal>
    </>
  );
};

export default ThemePreview;
