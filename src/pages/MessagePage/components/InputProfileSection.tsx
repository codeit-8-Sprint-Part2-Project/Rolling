import React, { useState } from 'react';
import useProfileImages from '../hooks/useProfileImage';

interface InputProfileSectionProps {
  onImageUpload: (imageUrl: string) => void;
}

const InputProfileSection: React.FC<InputProfileSectionProps> = ({ onImageUpload }) => {
  const [selectedImageUrl, setSelectedImageUrl] = useState<string | null>(null);
  const profileImages = useProfileImages();

  const getDisplayImageUrl = (): string => {
    if (selectedImageUrl) {
      return selectedImageUrl;
    } else if (profileImages && profileImages.imageUrls.length > 0) {
      return profileImages.imageUrls[0];
    } else {
      return 'Rolling/src/assets/images/defaultProfileImage.png';
    }
  };
  
  return (
    <section className="flex flex-col gap-12 w-full">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <p className="font-bold text-2xl">프로필 이미지</p>
          <div>
            <img src={getDisplayImageUrl()} alt="프로필 이미지" />
            <input type="file" />
            <p className="text-gray-500">프로필 이미지를 선택해주세요!</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-4">
          {profileImages?.imageUrls.map((imageUrl, index) => (
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

export default InputProfileSection;
