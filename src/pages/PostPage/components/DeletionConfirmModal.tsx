import { SetStateAction } from "react";
import TrashcanIcon from "../../../assets/icons/deleted.svg";

type props = {
    handleModalOpen: React.Dispatch<SetStateAction<boolean>>;
    handleDelete?: () => void;
    isRecipientDeletion?: boolean;
}

function DeletionConfirmModal({ handleModalOpen, handleDelete, isRecipientDeletion = false }: props) {

    const handleCancelClick = () => {
        handleModalOpen(false);
    }

    const confirmMessage = (isRecipientDeletion: boolean) => {
        return isRecipientDeletion ? "정말 게시판을 삭제할까요?" : "정말 메시지를 삭제할까요?";
    }
    
    return (
        <div className="bg-black/50 flex justify-center items-center fixed inset-0 z-50">
            <div className="w-[37.5rem] h-[29.75rem] mx-6 bg-white rounded-2xl p-10 flex flex-col items-center">
                <img src={TrashcanIcon} alt="삭제 확인" className="w-40 mt-14" />
                <div className="text-[#DC3A3A]">{confirmMessage(isRecipientDeletion)}</div>
                <div className="flex justify-between gap-4 mt-16">
                    <button className="w-[7.5rem] h-10 bg-[#9935FF] border-none text-white text-base font-normal rounded-lg hover:bg-[#861DEE]" onClick={handleDelete}>
                        삭제
                    </button>
                    <button className="w-[7.5rem] h-10 bg-[#FFFFFF] border border-solid border-[#9935FF] text-[#861DEE] text-base font-normal rounded-lg hover:border-[#861DEE] hover:bg-[#F8F0FF] hover:text-[#9935FF]" onClick={handleCancelClick}>
                        취소
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeletionConfirmModal;