import { useState } from "react";
import { MessageRetrieve } from "../../DTO/message/MessageRetrieve";
import formatComparedTime from "../../pages/PostPage/utils/formatComparedTime";
import SenderInfo from "./SenderInfo";
import { createPortal } from "react-dom";
import MessageModal from "./MessageModal";

const INITIAL_MESSAGE_VALUE: MessageRetrieve = {
    id : 0,
    recipientId : 0,
    sender : '',
    profileImageURL : '',
    relationship : "친구",
    content : '',
    font : 'Noto Sans',
    createdAt : new Date(),
}

function MessageCard({ message = INITIAL_MESSAGE_VALUE }: { message: MessageRetrieve }) {

    const [isMessageModalOpen, setIsMessageModalOpen] = useState<boolean>(false);

    const handleCardClick = () => {
        setIsMessageModalOpen(true);
        console.log("handleCardClick Called");
    }
    
    return (
        <div className="CARD h-[17.5rem] rounded-2xl bg-white pt-7 px-6 pb-6 flex flex-col gap-4 cursor-pointer" onClick={handleCardClick}>
            <div className="pb-4 border-solid border-b border-[#EEEEEE]">
                <SenderInfo message={message} />
            </div>
            <div className="CONTENT grow truncate text-wrap" dangerouslySetInnerHTML={{__html: message.content}} />
            <div className="DATE text-[#999999] text-[0.75rem] font-normal">{formatComparedTime(message.createdAt)}</div>
            {isMessageModalOpen && createPortal(
                <MessageModal message={message} setIsMessageModalOpen={setIsMessageModalOpen} />,
                document.body
            )}
        </div>
    )
}

export default MessageCard;