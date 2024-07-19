import { useState, useEffect } from 'react';

interface ProfileImage {
  imageUrls: string[];
}

const useProfileImages = () => {
  const [profileImages, setProfileImages] = useState<ProfileImage | null>(null);

  useEffect(() => {
    const fetchProfileImages = async () => {
      try {
        const response = await fetch('https://rolling-api.vercel.app/profile-images/');
        const data = await response.json();
        setProfileImages(data);
      } catch (error) {
        console.error('Error fetching profile images:', error);
      }
    };

    fetchProfileImages();
  }, []);

  return profileImages;
};

export default useProfileImages;