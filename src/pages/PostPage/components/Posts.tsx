import { useEffect, useState } from "react";
import { deleteMessage, getRecipient } from "../api/api";
import PlusCard from "./PlusCard";
import { MessageRetrieve } from "../../../DTO/message/MessageRetrieve";
import MessageCardList from "./MessageCardList";
import { createPortal } from "react-dom";
import LazyLoading from "./LazyLoading";

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

function Posts({ id, isEditing = false }: { id: string; isEditing?: boolean }) {
  const [recipient, setRecipient] = useState<Recipient>(
    INITIAL_RECIPIENT_VALUE
  );
  const [selectDeletion, setSelectDeletion] = useState<number>(0);
  const [isDeletionPending, setIsDeletionPending] = useState<boolean>(false);

  const handleLoad = async () => {
    const result = await getRecipient(id);
    setRecipient(result);
  };

  const backgroundColor: string =
    BACKGROUND_COLORS[recipient.backgroundColor] || "bg-[#FFE2AD]";
  const backgroundImageURL: string = recipient.backgroundImageURL || "";

  const recentMessages: MessageRetrieve[] = recipient.recentMessages || [];

  const handleSelectDeletion = (id: number) => {
    setSelectDeletion(id);
  };

  const handleDelete = async () => {
    if (!selectDeletion) return;
    alert("삭제는 아직 구현되지 않았습니다.");

    // try {
    //     setIsDeletionPending(true);
    //     await deleteMessage(selectDeletion);
    // } catch(error: any) {
    //     alert(error.message);
    // } finally {
    //     setIsDeletionPending(false);
    // }

    // const updatedMessages: MessageRetrieve[] = recentMessages.filter((message) => message.id !== selectDeletion);
    // setRecipient((preValues) => ({
    //     ...preValues,
    //     recentMessages: updatedMessages,
    // }));
    // setSelectDeletion(0);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <>
      <main
        style={{ backgroundImage: `url(${backgroundImageURL})` }}
        className={
          backgroundColor +
          " min-h-screen pt-[7.0625rem] pb-[2.375rem] bg-no-repeat bg-cover"
        }
      >
        <div className="CARDS-CONTAINER max-w-[78rem] mx-auto px-6 grid grid-cols-3 gap-x-6 gap-y-7 relative max-[1200px]:grid-cols-2 max-[1200px]:gap-4 max-md:grid-cols-1">
          {isEditing || <PlusCard />}
          <MessageCardList
            recentMessages={recentMessages}
            isEditing={isEditing}
            selectDeletion={selectDeletion}
            handleSelectDeletion={handleSelectDeletion}
          />
          {isEditing && (
            <button
              className="w-[5.75rem] h-10 rounded-md border-none bg-[#9935FF] text-white text-base font-normal absolute right-6 top-[-3.125rem] max-[1200px]:hidden"
              onClick={handleDelete}
              disabled={isDeletionPending}
            >
              삭제하기
            </button>
          )}
          {isEditing && (
            <div className="w-full fixed bottom-6 px-6 min-[1201px:hidden]">
              <button
                className="w-full h-14 rounded-md border-none bg-[#9935FF] text-white text-base font-normal min-[1201px]:hidden"
                onClick={handleDelete}
                disabled={isDeletionPending}
              >
                삭제하기
              </button>
            </div>
          )}
          {isDeletionPending && createPortal(<LazyLoading />, document.body)}
        </div>
      </main>
    </>
  );
}

export default Posts;
