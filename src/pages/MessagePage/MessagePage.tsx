import React, { useState } from "react";
import InputProfileSection from "./components/InputProfileSection";
import RelationshipSelectSection from "./components/RelationshipSelectSection";
import FontSelectSection from "./components/FontSelectSection";
import InputSenderSection from "./components/InputSenderSection";
import ToastEditor from "./components/ToastEditor";
import MessagePageButtons from "./components/MessagePageButtons";

type RelationShip = "친구" | "지인" | "동료" | "가족";
type Font = "Noto Sans" | "Pretendard" | "나눔 면조" | "나눔손글씨" | "손편지체";


const MessagePage: React.FC = () => {

  const [sender, setSender] = useState<string>('');

  const handleSenderChange = (newSender: string) => {
    setSender(newSender);
  };

  const [relationship, setRelationship] = useState<RelationShip>("지인");
  
  const handleRelationshipChange = (newRelationship: RelationShip) => {
    setRelationship(newRelationship);
  };

  const [body, setBody] = React.useState('');

  const handleToastEditorChange = (value: string) => {
    setBody(value);
  };

  const [font, setFont] = useState<Font>("Noto Sans");
  
  const handleFontChange = (newFont: Font) => {
    setFont(newFont);
  };

  const handleImageUpload = (imageUrl: string) => {
    console.log("Uploaded image URL:", imageUrl);
  };

  return (
    <div className="flex justify-center mt-12 mb-20">
      <div className="flex flex-col w-full max-w-[720px] gap-12">
        <InputSenderSection
          sender={sender}
          onSenderChange={handleSenderChange}
        />
        <InputProfileSection 
          onImageUpload={handleImageUpload} 
        />
        <RelationshipSelectSection
          selectedRelationship={relationship}
          onRelationshipChange={handleRelationshipChange}
        />
        <ToastEditor
          body={body}
          setBody={handleToastEditorChange} 
        />
        <FontSelectSection
          selectedFont={font}
          onFontChange={handleFontChange}
        />
        <MessagePageButtons />
      </div>
    </div>
  );
};

export default MessagePage;
