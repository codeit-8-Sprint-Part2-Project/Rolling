import { useCallback } from "react";

type ThemeData = {
  [key: string]: string | null;
};

type SetThemeData = React.Dispatch<React.SetStateAction<ThemeData>>;

const useUpdateThemeData = (setThemeData: SetThemeData) => {
  const updateThemeData = useCallback(
    (key: string, value: string | null) => {
      setThemeData((prevThemeData) => ({
        ...prevThemeData,
        [key]: value,
      }));
    },
    [setThemeData]
  );

  return updateThemeData;
};

export default useUpdateThemeData;
