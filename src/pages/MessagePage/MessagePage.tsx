import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { convertToRaw, EditorState } from 'draft-js';
import InputProfileSection from "./components/InputProfileSection";
import RelationshipSelectSection from "./components/RelationshipSelectSection";
import FontSelectSection from "./components/FontSelectSection";
import InputSenderSection from "./components/InputSenderSection";
import ToastEditor from "./components/ToastEditor";
import MessagePageButtons from "./components/MessagePageButtons";
import { MessageCreate } from "../../DTO/message/MessageCreate";
import { postMessage } from "../PostPage/api/api";
import { createPortal } from "react-dom";
import LazyLoading from "../PostPage/components/LazyLoading";

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

const MessagePage: React.FC = () => {

  const { recipientId } = useParams() as { recipientId: string };
  const [formData, setFormData] = useState<MessageCreate>(INITIAL_FORM_VALUES);
  const [editorState, setEditorState] = useState<EditorState>(EditorState.createEmpty());
  const [isPostPending, setIsPostPending] = useState<boolean>(false);
  const navigate = useNavigate();

  const changeFormData = (key: string, value: any) => {
    setFormData((prev: MessageCreate) => ({
      ...prev,
      [key]: value,
    }))
  }

  useEffect(() => {
    changeFormData("recipientId", +recipientId)
  }, [recipientId]);
  
  const handleSenderChange = (newSender: string) => {
    changeFormData("sender", newSender);
  };

  const handleRelationshipChange = (newRelationship: RelationShip) => {
    changeFormData("relationship", newRelationship);
  };

  const handleFontChange = (newFont: Font) => {
    changeFormData("font", newFont);
  };

  const handleProfileImageChange = (newUrl: string) => {
    changeFormData("profileImageURL", newUrl);
  }

  const handleSubmit = async () => {
    const isFormValid = formData.recipientId && formData.sender && editorState.getCurrentContent().hasText();
    
    if(!isFormValid) {
      alert("유효성 이슈");
      return;
    }

    try {
      setIsPostPending(true);
      postMessage(recipientId, formData);
    } catch(error:any) {
      alert(`handlePost에서 발생한 오류: ${error.message}`);
    } finally {
      setIsPostPending(false);
      navigate(`/post/${recipientId}`)
    }
  }

  const handleSubmitClick = () => {
    handleSubmit();
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

  return (
    <>
      <div className="flex justify-center mt-12 mb-20 font-pretendard">
        <div className="flex flex-col w-full max-w-[720px] gap-12">
          <InputSenderSection
            sender={formData.sender}
            onSenderChange={handleSenderChange}
          />
          <InputProfileSection 
            profileImageURL={formData.profileImageURL}
            onProfileImageChange={handleProfileImageChange}
          />
          <RelationshipSelectSection
            selectedRelationship={formData.relationship}
            onRelationshipChange={handleRelationshipChange}
          />
          <ToastEditor
            editorState={editorState}
            onChange={setEditorState}
          />
          <FontSelectSection
            selectedFont={formData.font}
            onFontChange={handleFontChange}
          />
          <MessagePageButtons
            recipientId={recipientId}
            handleSubmitClick={handleSubmitClick}
          />
        </div>
      </div>
      {isPostPending && createPortal(
        <LazyLoading />,
        document.body
      )}
    </>
  );
};

export default MessagePage;
