import React, { useState } from "react";

interface RecipientCardProps {
    name: string;
    messageCount: number;
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
    messageCount,
    recentMessages,
    topReactions,
    backgroundColor,
    backgroundImageURL,
}) => {
    const [isHovered, setIsHovered] = useState(false);

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
        backgroundImage: backgroundImageURL
            ? `linear-gradient(rgba(0, 0, 0, 0.54), rgba(0, 0, 0, 0.54)), url(${backgroundImageURL})`
            : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
    };

    const textColorClass = backgroundImageURL ? "text-white" : "text-black";

    return (
        <div
            className={`absolute w-[275px] h-[260px] p-4 mb-4 border rounded-[16px] border-solid border-[#0000001A] shadow-md ${bgColorClass} relative overflow-hidden transition-all duration-300 ease-in-out`}
            style={{
                ...cardStyle,
                transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                boxShadow: isHovered ? '0 10px 20px rgba(0,0,0,0.2)' : '0 4px 6px rgba(0,0,0,0.1)',
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {backgroundColor === "purple" && !backgroundImageURL && (
                <div
                    style={{ width: '142px', height: '142px', overflow: 'hidden', borderBottomRightRadius: '16px' }}
                    className="absolute right-0 bottom-0"
                >
                    <svg
                        width="142"
                        height="142"
                        viewBox="0 0 142 142"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute right-0 bottom-0"
                    >
                        <g clipPath="url(#clip0_23083_1868)">
                            <rect
                                y="6"
                                width="336"
                                height="169"
                                rx="84.5"
                                fill="#DCB9FF"
                                fillOpacity="0.4"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_23083_1868">
                                <rect width="142" height="142" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
            )}
            {backgroundColor === "beige" && backgroundImageURL === null && (
                <div
                    style={{ width: '142px', height: '142px', overflow: 'hidden', borderBottomRightRadius: '16px' }}
                    className="absolute right-0 bottom-0"
                >
                    <svg width="142" height="142" viewBox="0 0 142 142" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 57C21 28.8335 43.8335 6 72 6H302C330.167 6 353 28.8335 353 57V273C353 301.167 330.167 324 302 324H72C43.8335 324 21 301.167 21 273V57Z" fill="#FFD382" fillOpacity="0.7" />
                    </svg>
                </div>
            )}
            {backgroundColor === "blue" && backgroundImageURL === null && (
                <div
                    style={{ width: '142px', height: '142px', overflow: 'hidden', borderBottomRightRadius: '16px' }}
                    className="absolute right-0 bottom-0"
                >
                    <svg width="142" height="142" viewBox="0 0 142 142" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M74.4299 16.6978C88.1712 -5.00283 119.829 -5.00284 133.57 16.6978L202.482 125.526C217.239 148.829 200.495 179.25 172.912 179.25H35.0878C7.5049 179.25 -9.23877 148.829 5.51768 125.526L74.4299 16.6978Z" fill="#9DDDFF" />
                    </svg>
                </div>
            )}
            {backgroundColor === "green" && backgroundImageURL === null && (
                <div
                    style={{ width: '142px', height: '142px', overflow: 'hidden', borderBottomRightRadius: '16px' }}
                    className="absolute right-0 bottom-0"
                >
                    <svg width="142" height="142" viewBox="0 0 142 142" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_23083_4684)">
                            <rect y="6" width="336" height="169" rx="84.5" fill="#9BE282" fillOpacity="0.3" />
                        </g>
                        <defs>
                            <clipPath id="clip0_23083_4684">
                                <rect width="142" height="142" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
            )}
            <div className={`p-2 rounded-md relative flex flex-col justify-between h-full z-10 ${textColorClass} transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-90'}`}>
                <div>
                    <h2 className={`font-pretendard text-[24px] font-bold leading-[36px] tracking-[-0.01em] text-left`}>
                        To. {name}
                    </h2>
                    {messageCount === 0 && (
                        <div className="mt-2">
                            <p className={`font-pretendard text-[16px] font-bold leading-[26px] tracking-[-0.01em] text-left inline`}>
                                0
                            </p>
                            <span className={`font-pretendard text-[16px] font-normal leading-[26px] tracking-[-0.01em] text-left inline`}>
                                명이 작성했어요!
                            </span>
                        </div>
                    )}
                    {messageCount > 0 && (
                        <div className="mt-2 relative">
                            <div className="flex flex-wrap gap-[-30px] h-7">
                                {recentMessages.slice(0, 3).map((message, index) => (
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
                                    </React.Fragment>
                                ))}
                                {(messageCount - 3) > 0 && (
                                    <div
                                        style={{
                                            position: "absolute",
                                            left: `${3 * 20}px`,
                                            zIndex: 3,
                                        }}
                                    >
                                        <div
                                            style={{
                                                width: "33px",
                                                height: "28px",
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
                                                {messageCount - 3}
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="mt-2">
                                <p className={`font-pretendard text-[16px] font-bold leading-[26px] tracking-[-0.01em] text-left inline`}>
                                    {messageCount}
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
