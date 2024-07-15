import React from "react";

interface RecipientCardProps {
    name: string;
    messageCount: number;
}

const RecipientCard: React.FC<RecipientCardProps> = ({ name, messageCount }) => {
    return (
        <div className="w-[275px] h-[260px] p-4 mb-4 border rounded-tl-[16px] rounded-tr-[0px] rounded-br-[0px] rounded-bl-[0px] opacity-[1]">
            <h2 className="font-pretendard text-[24px] font-bold leading-[36px] tracking-[-0.01em] text-left">
                To. {name}
            </h2>
            <p className="font-pretendard text-[16px] font-bold leading-[26px] tracking-[-0.01em] text-left inline">
                {messageCount}
            </p>
            <span className="font-pretendard text-[16px] font-normal leading-[26px] tracking-[-0.01em] text-left inline">
                명이 작성했어요!
            </span>
        </div>
    );
};

export default RecipientCard;
