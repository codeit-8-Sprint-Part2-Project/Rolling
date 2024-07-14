import { MessageRetrieve } from "../../DTO/message/MessageRetrieve";
import formatComparedTime from "../../pages/PostPage/utils/formatComparedTime";
import RelationshipLabel from "./RelationshipLabel";

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

    return (
        <div className="CARD h-[17.5rem] rounded-2xl bg-white pt-7 px-6 pb-6 flex flex-col gap-4 cursor-pointer">
            <div className="SENDER-INFO h-[4.4375rem] flex pb-2.5 border-solid border-b border-[#EEEEEE] gap-3.5">
                <img src={message.profileImageURL} className="w-14" alt={message.sender} />
                <div className="flex flex-col gap-1.5">
                    <div>
                        <span className="text-black text-[1.25rem] leading-6 font-normal">From. </span>
                        <span className="text-black text-[1.25rem] leading-6 font-bold">{message.sender}</span>
                    </div>
                    <RelationshipLabel relationship={message.relationship} />
                </div>
            </div>
            <div className="CONTENT grow truncate" dangerouslySetInnerHTML={{__html: message.content}} />
            <div className="text-[#999999] DATE text-[0.75rem] font-normal">{formatComparedTime(message.createdAt)}</div>
        </div>
    )
}

export default MessageCard;