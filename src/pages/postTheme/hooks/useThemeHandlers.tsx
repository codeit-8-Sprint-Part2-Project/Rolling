const useThemeHandlers = (
  isThemeType: boolean,
  setIsThemeType: React.Dispatch<React.SetStateAction<boolean>>,
  setIsButtonDisabled: React.Dispatch<React.SetStateAction<boolean>>,
  themeData: any,
  setSelectedImageUrl: React.Dispatch<React.SetStateAction<string | null>>,
  setSelectedColor: React.Dispatch<React.SetStateAction<string>>
) => {
  // 테마 타입의 가시성을 관리하는 이벤트 핸들러, 기본 값은 컬러
  const handleShowColorOptions = () => {
    setIsThemeType(true);
    setIsButtonDisabled(false);
    setSelectedImageUrl(null);
  };

  const handleShowImageOptions = () => {
    setIsThemeType(false);
    setIsButtonDisabled(themeData.backgroundImageURL === null);
    setSelectedColor("beige");
  };

  return {
    handleShowColorOptions,
    handleShowImageOptions,
  };
};

export default useThemeHandlers;
