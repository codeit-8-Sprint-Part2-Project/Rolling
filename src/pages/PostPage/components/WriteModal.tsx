import React, { SetStateAction, useEffect, useState } from "react";
import { convertToRaw, EditorState } from "draft-js";
import WriteModalButtons from "./WriteModalButtons";
import { MessageCreate } from "../../../DTO/message/MessageCreate";
import WriteModalSender from "./WriteModalSender";
import InputProfileSection from "../../MessagePage/components/InputProfileSection";
import RelationshipSelectSection from "../../MessagePage/components/RelationshipSelectSection";
import TextEditor from "../../MessagePage/components/TextEditor";
import FontSelectSection from "../../MessagePage/components/FontSelectSection";
import { MessageRetrieve } from "../../../DTO/message/MessageRetrieve";
import useInitialMessage from "../hooks/useInitialMessage";
import useSubmitMethodPicker from "../hooks/useSubmitMethodPicker";

type RelationShip = "친구" | "지인" | "동료" | "가족";
type Font = "Noto Sans" | "Pretendard" | "나눔명조" | "나눔손글씨 손편지체";

type props = {
    recipientId: number,
    handleModalOpen: React.Dispatch<SetStateAction<boolean>>,
    message?: MessageRetrieve,
    handleAfterSubmit: (formData: MessageCreate) => void;
}

function WriteModal({ recipientId, handleModalOpen, message, handleAfterSubmit }: props) {

    const { initialForm, initialContent } = useInitialMessage(message);
    const { isPostPending, handleSubmit } = useSubmitMethodPicker(message);
    
    const [editorState, setEditorState] = useState<EditorState>(() => EditorState.createWithContent(initialContent));
    const [formData, setFormData] = useState<MessageCreate>(initialForm);
    const [isFormValid, setIsFormValid] = useState<boolean>(true);

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

    const submitId = message
        ? message.id.toString()
        : recipientId.toString();
    
    const handleBackButtonClick = (evt: any) => {
        evt.preventDefault();
        handleModalOpen(false);
    }

    const handleSubmitButtonClick = (evt: any) => {
        evt.preventDefault();
        handleSubmit(submitId, formData);
        handleAfterSubmit(formData);
        handleModalOpen(false);
    }

    useEffect(() => {
        const textContent = editorState.getCurrentContent();
        const rawContent = convertToRaw(textContent);
        const stringified = JSON.stringify(rawContent);
        setFormData((prev) => ({
        ...prev,
        content: stringified,
        }))
    }, [editorState]);

    useEffect(() => {
        if(formData.recipientId && (formData.sender.length > 0 && formData.sender.length < 41) && editorState.getCurrentContent().hasText()) setIsFormValid(true);
        else setIsFormValid(false);
    }, [formData, editorState])

    const pendingOpacityClass = isPostPending ? "opacity-50 " : '';

    return (
        <div className="bg-black/50 flex justify-center items-center fixed inset-0 z-50 font-pretendard">
            <form className={pendingOpacityClass + "w-[52rem] h-[56rem] border-4 border-solid border-[#CCCCCC] bg-white p-8 overflow-y-scroll max-md:h-full max-md:w-full max-md:px-4"}>
                <fieldset disabled={isPostPending} className="flex flex-col gap-[3.125rem]">
                    <WriteModalSender
                        sender={formData.sender}
                        handleSenderChange={handleSenderChange}
                    />
                    <InputProfileSection
                        profileImageURL={formData.profileImageURL}
                        onProfileImageChange={handleProfileImageChange}
                    />
                    <RelationshipSelectSection
                        selectedRelationship={formData.relationship}
                        onRelationshipChange={handleRelationshipChange}
                    />
                    <TextEditor
                        editorState={editorState}
                        onChange={setEditorState}
                    />
                    <FontSelectSection
                        selectedFont={formData.font}
                        onFontChange={handleFontChange}
                    />
                    <WriteModalButtons
                        handleSubmitButtonClick={handleSubmitButtonClick}
                        handleBackButtonClick={handleBackButtonClick}
                        isPostPending={isPostPending}
                        isFormValid={isFormValid}
                    />
                </fieldset>
            </form>
        </div>
    )
}

export default WriteModal;