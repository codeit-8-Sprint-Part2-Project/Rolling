import { BackgroundColor } from "../constants/enum";

// Tailwind CSS 클래스 이름을 value에 따라 동적으로 생성하는 함수
export const getColorClass = (color: string) => {
  switch (color) {
    case BackgroundColor.Beige:
      return "bg-beige";
    case BackgroundColor.Purple:
      return "bg-purple-200";
    case BackgroundColor.Blue:
      return "bg-blue-200";
    case BackgroundColor.Green:
      return "bg-green-200";
    default:
      return "";
  }
};

export {};
