import React, { useState } from "react";
import InputProfileSection from "./components/InputProfileSection";
import RelationshipSelectSection from "./components/RelationshipSelectSection";

type RelationShip = "친구" | "지인" | "동료" | "가족";

const MessagePage: React.FC = () => {
  const [relationship, setRelationship] = useState<RelationShip>("지인");

  const handleImageUpload = (imageUrl: string) => {
    console.log("Uploaded image URL:", imageUrl);
  };

  const handleRelationshipChange = (newRelationship: RelationShip) => {
    setRelationship(newRelationship);
  };

  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center">
        <InputProfileSection onImageUpload={handleImageUpload} />
        <RelationshipSelectSection
          selectedRelationship={relationship}
          onRelationshipChange={handleRelationshipChange}
        />
      </div>
    </div>
  );
};

export default MessagePage;
