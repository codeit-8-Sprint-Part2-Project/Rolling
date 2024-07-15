import { useEffect, useState } from "react";
import { getRecipient } from "../../pages/PostPage/api/api";
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

function Posts({ id, isEditing = false }: { id: string, isEditing?: boolean }) {
    
    const [recipient, setRecipient] = useState<Recipient>(INITIAL_RECIPIENT_VALUE);
    const [selectDeletion, setSelectDeletion] = useState<number>(0);

    const handleLoad = async () => {
        const result = await getRecipient(id);
        setRecipient(result);
    }

    const backgroundColor: string = BACKGROUND_COLORS[recipient.backgroundColor] || "bg-[#FFE2AD]";
    const backgroundImageURL: string = recipient.backgroundImageURL || '';

    const recentMessages: MessageRetrieve[] = recipient.recentMessages || [];

    const handleSelectDeletion = (id: number) => {
        setSelectDeletion(id);
    }

    const handleDelete = () => {
        if(!selectDeletion) return;
        alert("handleDelete is working");
    }

    useEffect(() => {
        handleLoad();
    }, []);
    
    return (
        <div style={{ backgroundImage: `url(${backgroundImageURL})` }} className={backgroundColor + " h-screen pt-[7.0625rem] bg-no-repeat bg-cover"}>
            <div className="CARDS-CONTAINER max-w-[78rem] mx-auto px-6 grid grid-cols-3 gap-x-6 gap-y-7 relative">
                {isEditing || <PlusCard />}
                <MessageCardList
                    recentMessages={recentMessages}
                    isEditing={isEditing}
                    selectDeletion={selectDeletion}
                    handleSelectDeletion={handleSelectDeletion}
                />
                {isEditing && 
                    <button
                        className="w-[5.75rem] h-10 rounded-md border-none bg-[#9935FF] text-white text-base font-normal absolute right-6 top-[-3.125rem]"
                        onClick={handleDelete}
                    >
                        삭제하기
                    </button>
                }
            </div>
        </div>
    )
}

export default Posts;