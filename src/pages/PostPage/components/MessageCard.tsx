import { useState } from "react";
import { MessageRetrieve } from "../../../DTO/message/MessageRetrieve";
import formatComparedTime from "../utils/formatComparedTime";
import SenderInfo from "./SenderInfo";
import { createPortal } from "react-dom";
import MessageModal from "./MessageModal";
import TrashcanButton from "./TrashcanButton";
import DeletionConfirmModal from "./DeletionConfirmModal";
import WriteModal from "./WriteModal";
import MessageContent from "./MessageContent";
import { MessageCreate } from "../../../DTO/message/MessageCreate";

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

type props = {
    message: MessageRetrieve,
    isEditing?: boolean,
    handleMessageDelete?: (messageId: number) => void,
}

function MessageCard({ message = INITIAL_MESSAGE_VALUE, isEditing = false, handleMessageDelete = () => {return} }: props) {

    const [isMessageModalOpen, setIsMessageModalOpen] = useState<boolean>(false);
    const [isDeletionModalOpen, setIsDeletionModalOpen] = useState<boolean>(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);
    const [messageState, setMessageState] = useState<MessageRetrieve>(message);

    const id: number = messageState.id || 0;
    
    const handleCardClick = () => {
        (isEditing)
            ? setIsEditModalOpen(true)
            : setIsMessageModalOpen(true)
    }

    const handleTrashcanClick = (evt: any) => {
        evt.stopPropagation();
        if(!isEditing) return;
        setIsDeletionModalOpen(true);
    }

    const handleMessageDeleteWrapper = () => {
        handleMessageDelete(id);
    }

    const handleAfterEdit = (formData: MessageCreate) => {
        setMessageState((prev) => ({
            ...prev,
            sender: formData.sender,
            profileImageURL: formData.profileImageURL,
            relationship: formData.relationship,
            content: formData.content,
            font: formData.font,
        }))
    }

    const font: string = messageState.font.toLowerCase();
    const fontClass: string = `font-[${font}]`;
    
    return (
        <>
            <div className={"CARD h-[17.5rem] rounded-2xl bg-white pt-7 px-6 pb-6 flex flex-col cursor-pointer shadow-[0_2px_12px_0_rgba(0,0,0,0.08)] max-[1200px]:h-[17.75rem] max-md:h-[14.375rem]"} onClick={handleCardClick}>
                <div className="pb-4 border-solid border-b border-[#EEEEEE] flex justify-between">
                    <SenderInfo message={messageState} />
                    {isEditing && <TrashcanButton onClick={handleTrashcanClick} />}
                </div>
                <div className={fontClass + " truncate grow mb-4"}>
                    <MessageContent rawString={messageState.content} />
                </div>
                <div className="DATE text-[#999999] text-[0.75rem] font-normal">{formatComparedTime(messageState.createdAt)}</div>
            </div>
            {isMessageModalOpen && createPortal(
                <MessageModal message={messageState} setIsMessageModalOpen={setIsMessageModalOpen} />,
                document.body
            )}
            {(isDeletionModalOpen) && createPortal(
                <DeletionConfirmModal handleModalOpen={setIsDeletionModalOpen} handleDelete={handleMessageDeleteWrapper} />,
                document.body
            )}
            {(isEditModalOpen) && createPortal(
                <WriteModal recipientId={id} handleModalOpen={setIsEditModalOpen} message={messageState} handleAfterSubmit={handleAfterEdit} />,
                document.body
            )}
        </>
    )
}

export default MessageCard;