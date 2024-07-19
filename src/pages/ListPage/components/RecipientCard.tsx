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
            {backgroundColor === "purple" && backgroundImageURL === null &&(
                <div 
                    className="absolute right-0 bottom-0 w-[336px] h-[169px] rounded-tl-[90.5px] overflow-hidden"
                    style={{
                        background: 'rgba(220, 185, 255, 0.4)',
                        transform: 'translate(55%, 30%)',
                    }}
                />
            )}
            {backgroundColor === "beige" && backgroundImageURL === null &&(
                <div 
                    className="absolute right-0 bottom-0 w-[332px] h-[169px] rounded-tl-[51px] overflow-hidden"
                    style={{
                        background: 'rgba(255, 211, 130, 0.7)',
                        transform: 'translate(60%, 30%)',
                    }}
                />
            )}
            {backgroundColor === "blue" && backgroundImageURL === null &&(
                <svg
                    className="absolute"
                    style={{ transform: 'translate(85%, 70%)' }}
                    width="142"
                    height="142"
                    viewBox="0 0 142 142"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M74.4299 16.6978C88.1712 -5.00283 119.829 -5.00284 133.57 16.6978L202.482 125.526C217.239 148.829 200.495 179.25 172.912 179.25H35.0878C7.5049 179.25 -9.23877 148.829 5.51768 125.526L74.4299 16.6978Z"
                        fill="#9DDDFF"
                    />
                </svg>
            )}
            {backgroundColor === "green" && backgroundImageURL === null &&(
                <div 
                    className="absolute right-0 bottom-0 w-[336px] h-[169px] rounded-tl-[90.5px] overflow-hidden"
                    style={{
                        background: 'rgba(155, 226, 130, 0.3)',
                        transform: 'translate(55%, 30%)',
                    }}
                />
            )}
            {backgroundImageURL && (
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            )}
            <div className={`p-2 rounded-md relative flex flex-col justify-between h-full z-10 ${textColorClass}`}>
                <div>
                    <h2 className={`font-pretendard text-[24px] font-bold leading-[36px] tracking-[-0.01em] text-left`}>
                        To. {name}
                    </h2>
                    {recentMessages.length === 0 && (
                        <div className="mt-2">
                            <p className={`font-pretendard text-[16px] font-bold leading-[26px] tracking-[-0.01em] text-left inline`}>
                                0
                            </p>
                            <span className={`font-pretendard text-[16px] font-normal leading-[26px] tracking-[-0.01em] text-left inline`}>
                                명이 작성했어요!
                            </span>
                        </div>
                    )}
                    {recentMessages.length > 0 && (
                        <div className="mt-2 relative">
                            <div className="flex flex-wrap gap-[-30px] h-7">
                                {recentMessages.map((message, index) => (
                                    <React.Fragment key={message.id}>
                                        <img
                                            src={message.profileImageURL}
                                            alt={message.sender}
                                            className="w-7 h-7 object-cover rounded-full border-2 border-white"
                                            style={{
                                                position: "absolute",
                                                left: `${index * 20}px`,
                                                zIndex: index,
                                            }}
                                        />
                                        {index === recentMessages.length - 1 && (
                                            <div
                                                style={{
                                                    position: "absolute",
                                                    left: `${(index + 1) * 20}px`,
                                                    zIndex: index + 1,
                                                }}
                                            >
                                                <div
                                                    style={{
                                                        width: "28px", // 동일한 크기
                                                        height: "28px", // 동일한 크기
                                                        backgroundColor: "white",
                                                        borderRadius: "50%",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                    }}
                                                >
                                                    <p
                                                        style={{
                                                            fontFamily: "Pretendard",
                                                            fontSize: "12px",
                                                            fontWeight: 400,
                                                            lineHeight: "18px",
                                                            letterSpacing: "-0.005em",
                                                            textAlign: "left",
                                                            color: "rgba(85, 85, 85, 1)",
                                                            margin: 0,
                                                        }}
                                                    >
                                                        <span>+</span>
                                                        {recentMessages.length}
                                                    </p>
                                                </div>
                                            </div>
                                        )}
                                    </React.Fragment>
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
                    )}
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
