import { MessageRetrieve } from "../../DTO/message/MessageRetrieve";
import MessageCard from "./MessageCard";

type prop = {
    recentMessages: MessageRetrieve[];
    isEditing?: boolean;
    selectDeletion?: number;
    handleSelectDeletion?: (id: number) => void;
}

function MessageCardList({ recentMessages, isEditing = false, selectDeletion, handleSelectDeletion }: prop) {

    return (
        <>
            {recentMessages.map(
                (message) =>
                    <MessageCard
                        key={message.id}
                        message={message}
                        isEditing={isEditing}
                        selectDeletion={selectDeletion}
                        handleSelectDeletion={handleSelectDeletion}
                    />
            )}
        </>
    )
}

export default MessageCardList;