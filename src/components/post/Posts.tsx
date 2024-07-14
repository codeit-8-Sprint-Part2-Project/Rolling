import { useEffect, useState } from "react";
import getRecipient from "../../pages/PostPage/api/getRecipient";
import PlusCard from "./PlusCard";
import { MessageRetrieve } from "../../DTO/message/MessageRetrieve";
import MessageCardList from "./MessageCardList";

interface Recipient {
    id? : number;
    team : string;
    name : string;
    backgroundColor : string;
    backgroundImageURL? : string;
    createdAt? : Date;
    messageCount? : string;
    recentMessages? : MessageRetrieve[];
    reactionCount? : number;
    topReactions? : string;
}

const BACKGROUND_COLORS: {
    [index: string]: string,
} = {
    beige: "bg-[#FFE2AD]",
    purple: "bg-[#ECD9FF]",
    blue: "bg-[#B1E4FF]",
    green: "bg-[#D0F5C3]",
}

const INITIAL_RECIPIENT_VALUE: Recipient = {
    team: '',
    name: '',
    backgroundColor: '',
    backgroundImageURL: '',
}

function Posts({ id }: { id: string }) {
    
    const [recipient, setRecipient] = useState<Recipient>(INITIAL_RECIPIENT_VALUE);

    const handleLoad = async () => {
        const result = await getRecipient(id);
        setRecipient(result);
    }

    const backgroundColor: string = BACKGROUND_COLORS[recipient.backgroundColor];
    const backgroundImageURL: string = recipient.backgroundImageURL || '';

    const recentMessages = recipient.recentMessages || [];

    useEffect(() => {
        handleLoad();
    }, []);

    console.log(recipient);
    
    return (
        <div style={{ backgroundImage: `url(${backgroundImageURL})` }} className={backgroundColor + " h-screen pt-[7.0625rem] bg-no-repeat bg-cover"}>
            <div className="CARDS-CONTAINER max-w-[78rem] mx-auto px-6 grid grid-cols-3 gap-x-6 gap-y-7">
                <PlusCard />
                <MessageCardList recentMessages={recentMessages} />
            </div>
        </div>
    )
}

export default Posts;