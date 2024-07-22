import RelationshipLabel from "./RelationshipLabel";
import { MessageRetrieve } from "../../../DTO/message/MessageRetrieve";

function SenderInfo({ message }: { message: MessageRetrieve }) {

    return (
        <div className="h-14 flex gap-3.5 max-w-[85%]">
            <img src={message.profileImageURL} className="w-14 h-14 rounded-full border border-solid border-[#EEEEEE]" alt={message.sender} />
            <div className="flex flex-col gap-1.5 truncate">
                <div className="truncate">
                    <span className="text-black text-[1.25rem] leading-6 font-normal">From. </span>
                    <span className="text-black text-[1.25rem] leading-6 font-bold">{message.sender}</span>
                </div>
                <RelationshipLabel relationship={message.relationship} />
            </div>
        </div>
    )
}

export default SenderInfo;