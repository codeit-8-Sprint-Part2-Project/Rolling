import React, { useEffect, useState } from "react";
import InputProfileSection from "./components/InputProfileSection";
import RelationshipSelectSection from "./components/RelationshipSelectSection";
import FontSelectSection from "./components/FontSelectSection";
import InputSenderSection from "./components/InputSenderSection";
import ToastEditor from "./components/ToastEditor";
import MessagePageButtons from "./components/MessagePageButtons";
import { useParams } from "react-router-dom";

type RelationShip = "친구" | "지인" | "동료" | "가족";
type Font = "Noto Sans" | "Pretendard" | "나눔 명조" | "나눔손글씨" | "손편지체";

type SubmitFormType = {
  team: string,
  recipientId: number,
  sender: string,
  profileImageURL: string | null,
  relationship: RelationShip,
  content: string,
  font: Font,
}

const INITIAL_FORM_VALUES: SubmitFormType = {
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
  const [formData, setFormData] = useState<SubmitFormType>(INITIAL_FORM_VALUES);

  const changeFormData = (key: string, value: any) => {
    setFormData((prev: SubmitFormType) => ({
      ...prev,
      [key]: value,
    }))
  }

  useEffect(() => {
    setFormData((prev: SubmitFormType) => ({
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

  const [body, setBody] = React.useState('');

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
          body={body}
          setBody={handleToastEditorChange} 
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
