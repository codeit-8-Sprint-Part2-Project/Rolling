import { useState, useEffect } from "react";
import { BASE_URL } from "../api/getRecipients";

interface FetchUrlsResult {
  urls: string[];
  error: Error | null;
}

// 주어진 urlType에 따라 apiCall, 데이터 추출 후 URL 배열 반환
const useGetUrls = (
  urlType: string,
  extractUrls: (data: any) => string[]
): FetchUrlsResult => {
  const [urls, setUrls] = useState<string[]>([]);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchUrls = async () => {
      try {
        const apiUrl = `${BASE_URL}/${urlType}/`;
        const response = await fetch(apiUrl);
        const data = await response.json();

        const extractedUrls = extractUrls(data);

        if (extractedUrls && extractedUrls.length > 0) {
          setUrls(extractedUrls);
        }
      } catch (error) {
        console.error(`${urlType} apiCall 실패:`, error);
        setError(error as Error);
      }
    };

    fetchUrls();
  }, [urlType, extractUrls]);

  return { urls, error };
};

export default useGetUrls;
