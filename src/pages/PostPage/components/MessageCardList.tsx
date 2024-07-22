import { MessageRetrieve } from "../../../DTO/message/MessageRetrieve";
import MessageCard from "./MessageCard";

type prop = {
    messages: MessageRetrieve[],
    isEditing?: boolean,
    handleMessageDelete?: (messageId: number) => void,
}

function MessageCardList({ messages, isEditing = false, handleMessageDelete }: prop) {

    return (
        <>
            {messages.map(
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