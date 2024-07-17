import React, { SetStateAction } from "react";
import { MessageRetrieve } from "../../../DTO/message/MessageRetrieve";
import MessageCard from "./MessageCard";

type prop = {
    recentMessages: MessageRetrieve[];
    isEditing?: boolean;
    setSelectDeletion?: React.Dispatch<SetStateAction<number>>;
    handleMessageDelete?: () => void;
}

function MessageCardList({ recentMessages, isEditing = false, setSelectDeletion, handleMessageDelete }: prop) {

    return (
        <>
            {recentMessages.map(
                (message) =>
                    <MessageCard
                        key={message.id}
                        message={message}
                        isEditing={isEditing}
                        setSelectDeletion={setSelectDeletion}
                        handleMessageDelete={handleMessageDelete}
                    />
            )}
        </>
    )
}

export default MessageCardList;