import React from "react";
import InputProfileSection from "./components/InputProfileSection";

const MessagePage: React.FC = () => {
    const handleImageUpload = (imageUrl: string) => {
      console.log('Uploaded image URL:', imageUrl);
    };
  
    return (
      <div>
        <InputProfileSection onImageUpload={handleImageUpload} />
      </div>
    );
  };
  
  export default MessagePage;
