import React, { SetStateAction, useState } from "react";
import { EditorState } from "draft-js";
import WriteModalButtons from "./WriteModalButtons";
import { MessageCreate } from "../../../DTO/message/MessageCreate";
import WriteModalSender from "./WriteModalSender";
import InputProfileSection from "../../MessagePage/components/InputProfileSection";
import RelationshipSelectSection from "../../MessagePage/components/RelationshipSelectSection";
import TextEditor from "../../MessagePage/components/TextEditor";
import FontSelectSection from "../../MessagePage/components/FontSelectSection";
import { MessageRetrieve } from "../../../DTO/message/MessageRetrieve";
import useInitialMessage from "./hooks/useInitialMessage";

type RelationShip = "친구" | "지인" | "동료" | "가족";
type Font = "Noto Sans" | "Pretendard" | "나눔명조" | "나눔손글씨 손편지체";

type props = {
    recipientId: number,
    handleModalOpen: React.Dispatch<SetStateAction<boolean>>,
    message?: MessageRetrieve,
}

function WriteModal({ recipientId, handleModalOpen, message }: props) {

    const { initialForm, initialContent } = useInitialMessage(message);
    
    const [editorState, setEditorState] = useState<EditorState>(() => EditorState.createWithContent(initialContent));
    const [formData, setFormData] = useState<MessageCreate>(initialForm);

    const handleFormChange = (key: string, value: any) => {
        setFormData(prev => ({
            ...prev,
            [key]: value,
        }));
    }

    const handleSenderChange = (newSender: string) => handleFormChange("sender", newSender);
    const handleProfileImageChange = (newUrl: string) => handleFormChange("profileImageURL", newUrl);
    const handleRelationshipChange = (newRelationship: RelationShip) => handleFormChange("relationship", newRelationship);
    const handleFontChange = (newFont: Font) => handleFormChange("font", newFont);

    const handleBackButtonClick = (evt: any) => {
        evt.preventDefault();
        handleModalOpen(false);
    }

    return (
        <div className="bg-black/50 flex justify-center items-center fixed inset-0 z-50 font-pretendard">
            <form className="w-[48rem] h-[56rem] bg-white rounded-2xl p-8 flex flex-col gap-[3.125rem] overflow-y-scroll">
                <WriteModalSender sender={formData.sender} handleSenderChange={handleSenderChange} />
                <InputProfileSection profileImageURL={formData.profileImageURL} onProfileImageChange={handleProfileImageChange} />
                <RelationshipSelectSection selectedRelationship={formData.relationship} onRelationshipChange={handleRelationshipChange} />
                <TextEditor editorState={editorState} onChange={setEditorState} />
                <FontSelectSection selectedFont={formData.font} onFontChange={handleFontChange} />
                <WriteModalButtons handleBackButtonClick={handleBackButtonClick} />
            </form>
        </div>
    )
}

export default WriteModal;