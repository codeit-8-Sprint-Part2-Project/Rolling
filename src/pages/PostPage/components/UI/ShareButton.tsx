import { ReactElement, useEffect, useState } from "react";
import Modal from "react-modal";
import IconShare from "../../assets/icons/IconShare.png";
import IconUrlCompleted from "../../assets/icons/IconUrlCompleted.png";
import IconUrlClose from "../../assets/icons/IconUrlClose.png";

Modal.setAppElement("#root");

interface ShareButtonProps {
  url: string;
}

const ShareButton = ({ url }: ShareButtonProps): ReactElement => {
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

  const shareToUrl = async () => {
    if (!navigator.clipboard) {
      console.error("이 브라우저는 Clipboard API를 지원하지 않습니다.");
      return;
    }

    try {
      await navigator.clipboard.writeText(url);
      console.log("URL이 클립보드에 성공적으로 복사되었습니다.");
      setIsModalOpen(true);
    } catch (e) {
      console.error("URL 복사에 실패했습니다. 오류 메시지:", e);
      setIsModalOpen(false);
    }
  };

  useEffect(() => {
    if (window.Kakao) {
      try {
        if (!window.Kakao.isInitialized()) {
          window.Kakao.init(process.env.REACT_APP_KAKAO_JAVASCRIPT_KEY);
          console.log("Kakao SDK 성공적으로 호출");
        }
      } catch (e) {
        console.error("Kakao SDK 호출 오류:", e);
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
        className="px-2 md:px-4 py-1.5 border border-solid border-[#cccccc] rounded-md ml-[13px]"
      >
        <img
          src={IconShare}
          alt="공유하기 버튼"
          className="min-w-5 min-h-5 md:w-6 md:h-6"
        />
      </button>

      {isDropdownVisible && (
        <div className="flex flex-col px-[1px] py-2.5 bg-white border border-[#cccccc] rounded-lg shadow-custom absolute top-[45px] left-[-85px] md:left-[-60px] z-10">
          <button
            onClick={() => {
              shareToKakao();
              setIsDropdownVisible(false);
            }}
            className="w-[138px] px-4 py-3 font-pretendard font-[400] text-[16px] text-[#181818] text-left hover:bg-[#f6f6f6]"
          >
            카카오톡 공유
          </button>
          <button
            onClick={() => {
              shareToUrl();
              setIsDropdownVisible(false);
            }}
            className="w-[138px] px-4 py-3 font-pretendard font-[400] text-[16px] text-[#181818] text-left hover:bg-[#f6f6f6]"
          >
            URL 공유
          </button>
        </div>
      )}

      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        style={{
          content: {
            position: "fixed",
            left: "50%",
            right: "auto",
            top: "auto",
            bottom: "6%",
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
        <div className="w-[320px] md:w-[524px] h-[64px] px-[30px] flex bg-black/80 rounded-lg justify-between items-center">
          <div className="flex gap-3">
            <img
              className="max-w-6 max-h-6"
              src={IconUrlCompleted}
              alt="복사 완료"
            />
            <p className="font-pretendard font-[400] text-[16px] text-white">
              URL이 복사 되었습니다.
            </p>
          </div>
          <button onClick={() => setIsModalOpen(false)}>
            <img className="max-w-6 max-h-6" src={IconUrlClose} alt="창 닫기" />
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default ShareButton;
