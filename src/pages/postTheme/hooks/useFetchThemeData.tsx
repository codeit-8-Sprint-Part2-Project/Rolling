import { useState, useEffect } from "react";
import { getRecipients } from "../api/themeApi";
import { ThemeData } from "../constants/propTypes";

const useFetchThemeData = (initialTeam: string) => {
  const [themeData, setThemeData] = useState<ThemeData>({
    id: "",
    team: initialTeam,
    name: "",
    backgroundColor: "beige",
    backgroundImageURL: null,
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<unknown>(null);

  const fetchThemeData = async (team: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await getRecipients({ team, limit: 1 });
      if (data.results.length > 0) {
        const recipient = data.results[0];
        setThemeData({
          id: recipient.id,
          team: recipient.team,
          name: recipient.name,
          backgroundColor: recipient.backgroundColor,
          backgroundImageURL: recipient.backgroundImageURL,
        });
        console.log("apiCall 성공:", recipient);
      }
    } catch (error) {
      setError(error);
      console.error("apiCall 실패:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (initialTeam) {
      fetchThemeData(initialTeam);
    }
  }, [initialTeam]);

  return { themeData, fetchThemeData, isLoading, error, setThemeData };
};

export default useFetchThemeData;
