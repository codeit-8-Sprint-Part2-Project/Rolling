import React, { useState } from "react";
import InputProfileSection from "./components/InputProfileSection";
import RelationshipSelectSection from "./components/RelationshipSelectSection";
import FontSelectSection from "./components/FontSelectSection";

type RelationShip = "친구" | "지인" | "동료" | "가족";
type Font = "Noto Sans" | "Pretendard" | "나눔 면조" | "나눔손글씨" | "손편지체";


const MessagePage: React.FC = () => {


  const [relationship, setRelationship] = useState<RelationShip>("지인");
  
  const handleRelationshipChange = (newRelationship: RelationShip) => {
    setRelationship(newRelationship);
  };

  const [font, setFont] = useState<Font>("Noto Sans");
  
  const handleFontChange = (newFont: Font) => {
    setFont(newFont);
  };

  const handleImageUpload = (imageUrl: string) => {
    console.log("Uploaded image URL:", imageUrl);
  };

  

  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center">
        <InputProfileSection onImageUpload={handleImageUpload} />
        <RelationshipSelectSection
          selectedRelationship={relationship}
          onRelationshipChange={handleRelationshipChange}
        />
        <FontSelectSection
          selectedFont={font}
          onFontChange={handleFontChange}
        />
      </div>
    </div>
  );
};

export default MessagePage;
