import React from "react";
import useProfileImages from "../hooks/useProfileImage";

const MyComponent = () => {
  const profileImages = useProfileImages();

  if (!profileImages) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {profileImages.imageUrls.map((imageUrl, index) => (
        <img key={index} src={imageUrl} alt={`Profile Image ${index}`} />
      ))}
    </div>
  );
};

export default MyComponent;