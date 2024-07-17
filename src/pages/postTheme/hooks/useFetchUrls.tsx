import { useState, useEffect } from "react";

interface FetchUrlsResult {
  urls: string[];
  error: Error | null;
}

const useFetchUrls = (
  urlType: string,
  setSelectedImageUrl: (url: string) => void
): FetchUrlsResult => {
  const [urls, setUrls] = useState<string[]>([]);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchUrls = async () => {
      try {
        const apiUrl = `https://rolling-api.vercel.app/${urlType}/`;
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data && data.imageUrls && data.imageUrls.length > 0) {
          setUrls(data.imageUrls);

          // 첫 번째 이미지 URL 선택
          setSelectedImageUrl(data.imageUrls[0]);
        }
      } catch (error) {
        console.error(`${urlType} 패치 실패:`, error);
        setError(error as Error);
      }
    };

    fetchUrls();
  }, [urlType]);

  return { urls, error };
};

export default useFetchUrls;
