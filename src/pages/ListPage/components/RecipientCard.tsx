import React from "react";

interface RecipientCardProps {
    name: string;
    recentMessages: {
        id: number;
        sender: string;
        profileImageURL: string;
    }[];
    topReactions: { emoji: string; count: number }[];
    backgroundColor: string;
    backgroundImageURL?: string | null;
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
        position: "relative",
    };

    const textColorClass = backgroundImageURL ? "text-white" : "text-black";

    return (
        <div
            className={`w-[275px] h-[260px] p-4 mb-4 border rounded-[16px] border-solid border-[#0000001A] shadow-md ${bgColorClass} relative overflow-hidden`}
            style={cardStyle}
        >
            {backgroundImageURL && (
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            )}
            <div className={`p-2 rounded-md relative flex flex-col justify-between h-full z-10 ${textColorClass}`}>
                <div>
                    <h2 className={`font-pretendard text-[24px] font-bold leading-[36px] tracking-[-0.01em] text-left`}>
                        To. {name}
                    </h2>
                    <div className="mt-2 relative">
                        <div className="flex flex-wrap gap-[-30px] h-7">
                            {recentMessages.map((message, index) => (
                                <img
                                    key={message.id}
                                    src={message.profileImageURL}
                                    alt={message.sender}
                                    className="w-7 h-7 object-cover rounded-full border-2 border-white"
                                    style={{
                                        position: "absolute",
                                        left: `${index * 20}px`,
                                        zIndex: recentMessages.length - index,
                                    }}
                                />
                            ))}
                        </div>
                        <div className="mt-2">
                            <p className={`font-pretendard text-[16px] font-bold leading-[26px] tracking-[-0.01em] text-left inline`}>
                                {recentMessages.length}
                            </p>
                            <span className={`font-pretendard text-[16px] font-normal leading-[26px] tracking-[-0.01em] text-left inline`}>
                                명이 작성했어요!
                            </span>
                        </div>
                    </div>
                </div>
                <div className="mt-2">
                    <ul className={`flex flex-wrap gap-2 border-t border-solid ${backgroundImageURL ? 'border-[#FFFFFF4D]' : 'border-[#0000001F]'} w-227 pt-4`}>
                        {topReactions.map((reaction, index) => (
                            <li
                                key={index}
                                className="flex items-center gap-1 bg-[#0000008A] px-2 py-1 rounded-full"
                                style={{ alignSelf: "flex-end" }}
                            >
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