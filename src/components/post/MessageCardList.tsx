import { MessageRetrieve } from "../../DTO/message/MessageRetrieve";
import MessageCard from "./MessageCard";

function MessageCardList({ recentMessages }: { recentMessages: MessageRetrieve[]}) {

    return (
        <>
            {recentMessages.map(
                (message) => <MessageCard key={message.id} message={message} />
            )}
        </>
    )
}

export default MessageCardList;