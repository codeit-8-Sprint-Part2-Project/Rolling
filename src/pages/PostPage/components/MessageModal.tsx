import React, { SetStateAction } from "react";
import { MessageRetrieve } from "../../../DTO/message/MessageRetrieve";
import formatComparedTime from "../utils/formatComparedTime";
import SenderInfo from "./SenderInfo";
import MessageContent from "./MessageContent";

type props = {
    message: MessageRetrieve;
    setIsMessageModalOpen: React.Dispatch<SetStateAction<boolean>>;
}

function MessageModal({ message, setIsMessageModalOpen }: props) {
    
    const handleButtonClick = () => {
        setIsMessageModalOpen(false);
    }

    const font: string = message.font.toLowerCase();
    const fontClass: string = `font-[${font}]`
    
    return (
        <div className="bg-black/50 flex justify-center items-center fixed inset-0 z-50 font-pretendard">
            <div className="w-[37.5rem] h-[29.75rem] mx-6 bg-white rounded-2xl p-10 flex flex-col items-center">
                <div className="w-full flex justify-between items-center pb-5 border-solid border-b border-[#EEEEEE]">
                    <SenderInfo message={message} />
                    <div className="text-[#999999] text-sm font-normal ml-1">{formatComparedTime(message.createdAt)}</div>
                </div>
                <div className={fontClass + " w-full max-h-64 grow text-wrap mb-6 overflow-y-scroll"}>
                    <MessageContent rawString={message.content} />
                </div>
                <button className="w-[7.5rem] h-10 bg-[#9935FF] border-none text-white text-base font-normal rounded-lg hover:bg-[#861DEE]" onClick={handleButtonClick}>
                    확인
                </button>
            </div>
        </div>
    )
}

export default MessageModal;