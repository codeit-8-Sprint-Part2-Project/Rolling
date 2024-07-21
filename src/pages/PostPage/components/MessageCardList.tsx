import { MessageRetrieve } from "../../../DTO/message/MessageRetrieve";
import MessageCard from "./MessageCard";

type prop = {
    recentMessages: MessageRetrieve[],
    isEditing?: boolean,
    handleMessageDelete?: (messageId: number) => void,
}

function MessageCardList({ recentMessages, isEditing = false, handleMessageDelete }: prop) {

    return (
        <>
            {recentMessages.map(
                (message) =>
                    <MessageCard
                        key={message.id}
                        message={message}
                        isEditing={isEditing}
                        handleMessageDelete={handleMessageDelete}
                    />
            )}
        </>
    )
}

export default MessageCardList;