import { useCallback, useEffect, useState } from "react";
import { deleteMessage, deleteRecipient, getRecipient } from "../api/api";
import PlusCard from "./PlusCard";
import { MessageRetrieve } from "../../../DTO/message/MessageRetrieve";
import MessageCardList from "./MessageCardList";
import { createPortal } from "react-dom";
import LazyLoading from "./LazyLoading";
import RecipientDeleteCard from "./RecipientDeleteCard";
import { useNavigate } from "react-router-dom";
import MainSectionButtons from "./MainSectionButtons";
import useRequest from "../hooks/useRequest";
// import WriteModal from "./WriteModal";

export interface Recipient {
    id?: number;
    team: string;
    name: string;
    backgroundColor: string;
    backgroundImageURL?: string;
    createdAt?: Date;
    messageCount?: string;
    recentMessages?: MessageRetrieve[];
    reactionCount?: number;
    topReactions?: string;
}

const BACKGROUND_COLORS: {
    [index: string]: string;
} = {
    beige: "bg-[#FFE2AD]",
    purple: "bg-[#ECD9FF]",
    blue: "bg-[#B1E4FF]",
    green: "bg-[#D0F5C3]",
};

const INITIAL_RECIPIENT_VALUE: Recipient = {
    team: "",
    name: "",
    backgroundColor: "",
    backgroundImageURL: "",
    };

function Posts({ id }: { id: string }) {
    
    const [recipient, setRecipient] = useState<Recipient>(INITIAL_RECIPIENT_VALUE);
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [isRecipientDeleteOpen, setIsRecipientDeleteOpen] = useState<boolean>(false);
    // const [isWriteModalOpen, setIsWriteModalOpen] = useState<boolean>(false);

    const { isPending, wrappedRequest } = useRequest();

    const navigate = useNavigate();

    const handleLoad = useCallback (async () => {
        const result = await wrappedRequest(getRecipient, id);
        setRecipient(result);
    }, [id, wrappedRequest])

    const backgroundColor: string = BACKGROUND_COLORS[recipient.backgroundColor] || "bg-[#FFE2AD]";
    const whatsButtonText = () => {
        return isEditing ? "돌아가기" : "수정하기";
    }

    const backgroundImageURL: string = recipient.backgroundImageURL || '';
    const recentMessages: MessageRetrieve[] = recipient.recentMessages || [];

    // 메시지 삭제 함수
    const handleMessageDelete = (messageId: number) => {
        wrappedRequest(deleteMessage, messageId);

        const updatedMessages: MessageRetrieve[] = recentMessages.filter((message) => message.id !== messageId);
        setRecipient((preValues) => ({
            ...preValues,
            recentMessages: updatedMessages,
        }));
    }

    // 게시판 삭제 함수
    const handleRecipientDelete = async () => {
        wrappedRequest(deleteRecipient, id);
        navigate("/list");
    }

    // 수정하기 / 돌아가기 버튼 클릭 제어 함수
    const handleEditButtonClick = () => setIsEditing(!isEditing)
    const handleBackButtonclick = () => navigate("/list")

    useEffect(() => {
        handleLoad();
    }, [handleLoad]);
    
    return (
        <>
            <main style={{ backgroundImage: `url(${backgroundImageURL})` }} className={backgroundColor + " min-h-screen pt-[7.0625rem] pb-[2.375rem] bg-no-repeat bg-cover font-pretendard"}>
                <div className="CARDS-CONTAINER max-w-[78rem] mx-auto px-6 grid grid-cols-3 gap-x-6 gap-y-7 relative max-[1200px]:grid-cols-2 max-[1200px]:gap-4 max-md:grid-cols-1">
                    {isEditing
                        ? <RecipientDeleteCard
                            isRecipientDeleteOpen={isRecipientDeleteOpen}
                            setIsRecipientDeleteOpen={setIsRecipientDeleteOpen}
                            handleRecipientDelete={handleRecipientDelete}
                        />
                        : <PlusCard id={id} />
                    }
                    <MessageCardList
                        recentMessages={recentMessages}
                        isEditing={isEditing}
                        handleMessageDelete={handleMessageDelete}
                    />
                    <MainSectionButtons
                        handleEditButtonClick={handleEditButtonClick}
                        handleBackButtonClick={handleBackButtonclick}
                        isDeletionPending={isPending}
                        whatsButtonText={whatsButtonText}
                    />
                </div>
            </main>
            {isPending && createPortal(
                        <LazyLoading />,
                        document.body
                    )}
            {/* {isWriteModalOpen && createPortal(
                <WriteModal />,
                document.body
            )} */}
        </>
    )
}

export default Posts;
