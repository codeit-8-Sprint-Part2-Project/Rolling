import React, { SetStateAction, useState } from "react";
import MyEditor from "./MyEditor";
import { EditorState } from "draft-js";
import WriteModalButtons from "./WriteModalButtons";
import { MessageCreate } from "../../../DTO/message/MessageCreate";
import WriteModalSender from "./WriteModalSender";

type RelationShip = "친구" | "지인" | "동료" | "가족";
type Font = "Noto Sans" | "Pretendard" | "나눔명조" | "나눔손글씨 손편지체";

const INITIAL_FORM_VALUES: MessageCreate = {
    team: "8-1",
    recipientId: 0,
    sender: '',
    profileImageURL: "https://learn-codeit-kr-static.s3.ap-northeast-2.amazonaws.com/sprint-proj-image/default_avatar.png",
    relationship: "친구",
    content: '',
    font: "Noto Sans",
}

type props = {
    recipientId: number,
    handleModalOpen: React.Dispatch<SetStateAction<boolean>>;
}

function WriteModal({ recipientId, handleModalOpen }: props) {

    const [editorState, setEditorState] = useState<EditorState>(() => EditorState.createEmpty());
    const [formData, setFormData] = useState<MessageCreate>(INITIAL_FORM_VALUES);

    const handleFormChange = (key: string, value: any) => {
        setFormData(prev => ({
            ...prev,
            [key]: value,
        }));
    }

    const handleSenderChange = (newSender: string) => handleFormChange("sender", newSender);

    const handleBackButtonClick = (evt: any) => {
        evt.preventDefault();
        handleModalOpen(false);
    }

    return (
        <div className="bg-black/50 flex justify-center items-center fixed inset-0 z-50 font-pretendard">
            <form className="w-[48rem] h-[56rem] bg-white rounded-2xl p-8 flex flex-col gap-[3.125rem] relative">
                <WriteModalSender sender={formData.sender} handleSenderChange={handleSenderChange} />
                <MyEditor editorState={editorState} onChange={setEditorState} />
                <WriteModalButtons handleBackButtonClick={handleBackButtonClick} />
            </form>
        </div>
    )
}

export default WriteModal;