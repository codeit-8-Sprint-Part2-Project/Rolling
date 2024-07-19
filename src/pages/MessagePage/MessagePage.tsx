import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { EditorState } from 'draft-js';
import InputProfileSection from "./components/InputProfileSection";
import RelationshipSelectSection from "./components/RelationshipSelectSection";
import FontSelectSection from "./components/FontSelectSection";
import InputSenderSection from "./components/InputSenderSection";
import ToastEditor from "./components/ToastEditor";
import MessagePageButtons from "./components/MessagePageButtons";
import { MessageCreate } from "../../DTO/message/MessageCreate";

type RelationShip = "친구" | "지인" | "동료" | "가족";
type Font = "Noto Sans" | "Pretendard" | "나눔 명조" | "나눔손글씨" | "손편지체";

const INITIAL_FORM_VALUES: MessageCreate = {
  team: "8-1",
  recipientId: 0,
  sender: '',
  profileImageURL: null,
  relationship: "친구",
  content: '',
  font: "Noto Sans",
}

const MessagePage: React.FC = () => {

  const { recipientId } = useParams() as { recipientId: string };
  const [formData, setFormData] = useState<MessageCreate>(INITIAL_FORM_VALUES);
  const [editorState, setEditorState] = useState<EditorState>(EditorState.createEmpty());

  const changeFormData = (key: string, value: any) => {
    setFormData((prev: MessageCreate) => ({
      ...prev,
      [key]: value,
    }))
  }

  useEffect(() => {
    setFormData((prev: MessageCreate) => ({
      ...prev,
      recipientId: +recipientId,
    }))
  }, [recipientId]);
  
  const handleSenderChange = (newSender: string) => {
    changeFormData("sender", newSender);
  };

  const handleRelationshipChange = (newRelationship: RelationShip) => {
    changeFormData("relationship", newRelationship);
  };

  const handleToastEditorChange = (newContent: string) => {
    changeFormData("content", newContent);
  };

  const handleFontChange = (newFont: Font) => {
    changeFormData("font", newFont);
  };

  const handleProfileImageChange = (newUrl: string) => {
    changeFormData("profileImageURL", newUrl);
  }

  return (
    <div className="flex justify-center mt-12 mb-20">
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
        <MessagePageButtons recipientId={recipientId} />
      </div>
    </div>
  );
};

export default MessagePage;
