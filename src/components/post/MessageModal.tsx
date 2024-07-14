import React, { SetStateAction } from "react";
import { MessageRetrieve } from "../../DTO/message/MessageRetrieve";
import formatComparedTime from "../../pages/PostPage/utils/formatComparedTime";
import SenderInfo from "./SenderInfo";

type props = {
    message: MessageRetrieve;
    setIsMessageModalOpen: React.Dispatch<SetStateAction<boolean>>;
}

function MessageModal({ message, setIsMessageModalOpen }: props) {
    
    const handleButtonClick = (e: any) => {
        e.stopPropagation();
        setIsMessageModalOpen(false);
    }
    
    return (
        <div className="bg-black/50 flex justify-center items-center fixed inset-0">
            <div className="w-[37.5rem] h-[29.75rem] bg-white rounded-2xl p-10 flex flex-col items-center">
                <div className="w-full flex justify-between items-center pb-5 border-solid border-b border-[#EEEEEE] mb-4">
                    <SenderInfo message={message} />
                    <span className="DATE text-[#999999] text-sm font-normal">{formatComparedTime(message.createdAt)}</span>
                </div>
                <div className="w-full grow text-wrap mb-6" dangerouslySetInnerHTML={{__html: message.content}} />
                <button className="w-[7.5rem] h-10 bg-[#9935FF] border-none text-white text-base font-normal rounded-lg" onClick={handleButtonClick}>
                    확인
                </button>
            </div>
        </div>
    )
}

export default MessageModal;