import React from "react";

interface RecipientCardProps {
  name: string;
  recentMessages: string;
  topReactions: { emoji: string; count: number }[];
  backgroundColor: string;
  backgroundImageURL?: string | null; // backgroundImageURL이 null일 수 있음을 명시
}

const RecipientCard: React.FC<RecipientCardProps> = ({
  name,
  recentMessages,
  topReactions,
  backgroundColor,
  backgroundImageURL,
}) => {
  let bgColorClass = "";

  switch (backgroundColor) {
    case "beige":
      bgColorClass = "bg-[#FFE2AD]";
      break;
    case "purple":
      bgColorClass = "bg-[#ECD9FF]";
      break;
    case "blue":
      bgColorClass = "bg-[#B1E4FF]";
      break;
    case "green":
      bgColorClass = "bg-[#D0F5C3]";
      break;
    default:
      bgColorClass = "";
      break;
  }


  const cardStyle: React.CSSProperties = {
    backgroundImage: backgroundImageURL ? `url(${backgroundImageURL})` : undefined,
    backgroundSize: "cover", 
    backgroundPosition: "center", 
  };  

  const bgColorStyle = backgroundImageURL ? "" : bgColorClass;

  return (
    <div
      className={`w-[275px] h-[260px] p-4 mb-4 border rounded-[16px] border-solid border-[#0000001A] shadow-md ${bgColorStyle}`}
      style={cardStyle}
    >
      <div className="p-2 rounded-md">
        <h2 className="font-pretendard text-[24px] font-bold leading-[36px] tracking-[-0.01em] text-left">
          To. {name}
        </h2>
        <p className="font-pretendard text-[16px] font-bold leading-[26px] tracking-[-0.01em] text-left inline">
          {recentMessages.length}
        </p>
        <span className="font-pretendard text-[16px] font-normal leading-[26px] tracking-[-0.01em] text-left inline">
          명이 작성했어요!
        </span>
        <div className="mt-2">
          <ul className="flex flex-wrap gap-2">
            {topReactions.map((reaction, index) => (
              <li key={index} className="flex items-center gap-1 bg-[#0000008A] px-2 py-1 rounded-full">
                {reaction.emoji} 
                <span className="font-pretendard text-16 font-normal leading-20 text-white">
                  {reaction.count}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RecipientCard;
