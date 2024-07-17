import React, { useState } from 'react';
import useProfileImages from "../hooks/useProfileImage";

const inputProfileSection: React.FC = () => {
  const profileImages = useProfileImages();
  const [selectedImageUrl, setSelectedImageUrl] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedImageUrl(URL.createObjectURL(event.target.files[0]));
    } else {
      setSelectedImageUrl(null);
    }
  };
  // 사용자 이미지 선택 확인 함수 
  const getDisplayImageUrl = (): string => {
    if (selectedImageUrl) {
      return selectedImageUrl;
    } else if (profileImages && profileImages.imageUrls.length > 0) {
      return profileImages.imageUrls[0];
    } else {
      return 'Rolling/src/assets/images/defaultProfileImage.png';
    }
  };

  if (!profileImages) {
    return <div>Loading...</div>;
  }
  return (
    <section className="flex flex-col gap-12 w-full">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <p className="font-bold text-2xl">프로필 이미지</p>
          <div>
            <img src={getDisplayImageUrl()} alt="프로필 이미지" />
            <input type="file" onChange={handleImageUpload} />
            <p className="text-gray-500">프로필 이미지를 선택해주세요!</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-4">
          {profileImages.imageUrls.map((imageUrl, index) => (
            <button
              key={index}
              className="bg-gray-200 rounded-md px-4 py-2 hover:bg-gray-300"
              onClick={() => setSelectedImageUrl(imageUrl)}
            >
              <img src={imageUrl} alt={`Image ${index}`} className="w-20 h-20 object-cover" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default inputProfileSection;