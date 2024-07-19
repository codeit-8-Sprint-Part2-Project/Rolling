import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import IconShare from "../../assets/icons/IconShare.png";
import IconUrlCompleted from "../../assets/icons/IconUrlCompleted.png";
import IconUrlClose from "../../assets/icons/IconUrlClose.png";

Modal.setAppElement("#root");

interface ShareButtonProps {
  url: string;
}

const ShareButton: React.FC<ShareButtonProps> = ({ url }) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const shareToKakao = () => {
    if (window.Kakao && window.Kakao.Link) {
      window.Kakao.Link.sendCustom({
        templateId: 110180,
      });
    } else {
      console.error("카카오 공유하기를 실행하는데 오류가 있습니다.");
    }
  };

  const shareToUrl = () => {
    navigator.clipboard.writeText(url);
    setIsModalOpen(true);
  };

  useEffect(() => {
    if (window.Kakao) {
      try {
        if (!window.Kakao.isInitialized()) {
          window.Kakao.init(process.env.REACT_APP_KAKAO_JAVASCRIPT_KEY);
          console.log("Kakao SDK initialized");
        }
      } catch (e) {
        console.error("Kakao SDK initialization error:", e);
      }
    }
  }, []);

  useEffect(() => {
    let timerId: number;
    if (isModalOpen) {
      timerId = window.setTimeout(() => {
        setIsModalOpen(false);
      }, 5000);
    }
    return () => {
      window.clearTimeout(timerId);
    };
  }, [isModalOpen]);

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="px-[8px] md:px-[16px] py-[6px] border border-solid border-[#cccccc] rounded-[6px] ml-[13px]"
      >
        <img
          src={IconShare}
          alt="공유하기 버튼"
          className="min-w-[20px] min-h-[20px] md:w-[24px] md:h-[24px]"
        />
      </button>

      {isDropdownVisible && (
        <div className="flex flex-col px-[1px] py-[10px] bg-[#ffffff] border border-[#cccccc] rounded-[8px] shadow-custom absolute top-[45px] left-[-60px] z-10">
          <button
            onClick={() => {
              shareToKakao();
              setIsDropdownVisible(false);
            }}
            className="w-[138px] px-[16px] py-[12px] font-pretendard font-[400] text-[16px] text-[#181818] text-left hover:bg-[#f6f6f6]"
          >
            카카오톡 공유
          </button>
          <button
            onClick={() => {
              shareToUrl();
              setIsDropdownVisible(false);
            }}
            className="w-[138px] px-[16px] py-[12px] font-pretendard font-[400] text-[16px] text-[#181818] text-left hover:bg-[#f6f6f6]"
          >
            URL 공유
          </button>
        </div>
      )}

      <Modal
        isOpen={isModalOpen}
        style={{
          content: {
            position: "fixed",
            left: "50%",
            right: "auto",
            top: "auto",
            bottom: "3%",
            transform: "translate(-50%, -50%)",
            height: "auto",
            background: "none",
            border: "none",
            padding: "0",
            overflow: "visible",
          },
          overlay: {
            backgroundColor: "transparent",
          },
        }}
      >
        <div className="w-[524px] h-[64px] px-[30px] flex bg-black/80 rounded-[8px] justify-between items-center">
          <div className="flex gap-[12px]">
            <img
              className="max-w-[24px] max-h-[24px]"
              src={IconUrlCompleted}
              alt="복사 완료"
            />
            <p className="font-pretendard font-[400] text-[16px] text-[#ffffff]">
              URL이 복사 되었습니다.
            </p>
          </div>
          <button onClick={() => setIsModalOpen(false)}>
            <img
              className="max-w-[24px] max-h-[24px]"
              src={IconUrlClose}
              alt="창 닫기"
            />
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default ShareButton;
