import { useState } from "react";
import { MessageRetrieve } from "../../DTO/message/MessageRetrieve";
import formatComparedTime from "../../pages/PostPage/utils/formatComparedTime";
import SenderInfo from "./SenderInfo";
import { createPortal } from "react-dom";
import MessageModal from "./MessageModal";
import TrashcanButton from "./TrashcanButton";

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

type prop = {
    message: MessageRetrieve;
    isEditing?: boolean;
    selectDeletion?: number;
    handleSelectDeletion?: (id: number) => void;
}

function MessageCard({ message = INITIAL_MESSAGE_VALUE, isEditing = false, selectDeletion, handleSelectDeletion = () => {return} }: prop) {

    const [isMessageModalOpen, setIsMessageModalOpen] = useState<boolean>(false);

    const id: number = message.id || 0;
    
    const handleCardClick = () => {
        if(isEditing) return;
        setIsMessageModalOpen(true);
    }

    const handleTrashcanClick = () => {
        if(!isEditing) return;
        if(id === selectDeletion) handleSelectDeletion(0);
        else handleSelectDeletion(id);
    }

    const hoverCursor = () => {
        if (isEditing) return " cursor-default";
        return " cursor-pointer";
    }

    const selectDeletionOpacity = () => {
        if (id === selectDeletion) return " opacity-50";
        return '';
    }
    
    return (
        <>
            <div className={"CARD h-[17.5rem] rounded-2xl bg-white pt-7 px-6 pb-6 flex flex-col gap-4" + hoverCursor() + selectDeletionOpacity()} onClick={handleCardClick}>
                <div className="pb-4 border-solid border-b border-[#EEEEEE] flex justify-between">
                    <SenderInfo message={message} />
                    {isEditing && <TrashcanButton onClick={handleTrashcanClick} />}
                </div>
                <div className="CONTENT grow truncate text-wrap" dangerouslySetInnerHTML={{__html: message.content}} />
                <div className="DATE text-[#999999] text-[0.75rem] font-normal">{formatComparedTime(message.createdAt)}</div>
            </div>
            {isMessageModalOpen && createPortal(
                    <MessageModal message={message} setIsMessageModalOpen={setIsMessageModalOpen} />,
                    document.body
                )}
        </>
    )
}

export default MessageCard;