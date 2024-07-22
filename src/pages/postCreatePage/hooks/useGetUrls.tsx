import { useState, useEffect, useRef } from "react";
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
  const hasFetched = useRef(false); // 데이터가 이미 fetch되었는지 여부

  useEffect(() => {
    const fetchUrls = async () => {
      if (hasFetched.current) return; // 이미 데이터가 fetch되었으면 아무것도 하지 않음

      try {
        const apiUrl = `${BASE_URL}/${urlType}/`;
        const response = await fetch(apiUrl);
        const data = await response.json();

        const extractedUrls = extractUrls(data).filter(
          (url, index, self) => self.indexOf(url) === index
        );

        if (extractedUrls && extractedUrls.length > 0) {
          setUrls(extractedUrls);
        }

        hasFetched.current = true; // 데이터 fetch 완료
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
