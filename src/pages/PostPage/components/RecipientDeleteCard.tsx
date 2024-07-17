import React, { SetStateAction } from "react";
import TrashcanIcon from "../../../assets/icons/deleted.svg";
import { createPortal } from "react-dom";
import DeletionConfirmModal from "./DeletionConfirmModal";

type props = {
    isRecipientDeleteOpen: boolean,
    setIsRecipientDeleteOpen: React.Dispatch<SetStateAction<boolean>>;
    handleRecipientDelete: () => void;
}

function RecipientDeleteCard( { isRecipientDeleteOpen, setIsRecipientDeleteOpen, handleRecipientDelete }: props) {

    const handleCardClick = () => {
        setIsRecipientDeleteOpen(true);
    }
    
    const handleModalOpen = (num: number) => {
        if (num > 0) {
            setIsRecipientDeleteOpen(true);
            return;
        } else {
            setIsRecipientDeleteOpen(false);
            return;
        }
    }
    
    return (
        <>
            <div className="h-[17.5rem] rounded-2xl bg-white flex flex-col justify-center items-center gap-4 cursor-pointer max-[1200px]:h-[17.75rem] max-md:h-[14.375rem]" onClick={handleCardClick}>
                <img src={TrashcanIcon} alt="게시판 삭제" className="w-20" />
                <div className="text-[#999999]">게시판 삭제하기</div>
            </div>
            {isRecipientDeleteOpen && createPortal(
                <DeletionConfirmModal handleModalOpen={setIsRecipientDeleteOpen} handleDelete={handleRecipientDelete} isRecipientDeletion={true} />,
                document.body
            )}
        </>
    )
}

export default RecipientDeleteCard;