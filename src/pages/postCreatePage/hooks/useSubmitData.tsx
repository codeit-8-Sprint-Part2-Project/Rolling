import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContextProps } from "../constants/propTypes";
import { INIT_THEME_VALUE } from "../constants/initial";

const useSubmitData = (
  themeData: ThemeContextProps["themeData"],
  setThemeData: (data: ThemeContextProps["themeData"]) => void
) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://rolling-api.vercel.app/8-1/recipients/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(themeData),
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`서버 응답 에러: ${response.status} ${errorText}`);
      }

      await response.json();

      // 데이터 전송 후 입력 필드 초기화
      setThemeData(INIT_THEME_VALUE);
      navigate(`/post/${themeData.id}`);
    } catch (error) {
      console.error("폼 데이터 전송 실패:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return { handleSubmit, isSubmitting };
};

export default useSubmitData;
