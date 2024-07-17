import React from "react";

interface RecipientCardProps {
    name: string;
    recentMessages: any[]; // recentMessages의 타입은 실제 API 응답에 따라 조정해야 합니다.
}

const RecipientCard: React.FC<RecipientCardProps> = ({ name, recentMessages }) => {
    return (
        <div className="w-[275px] h-[260px] p-4 mb-4 border rounded-tl-[16px] rounded-tr-[0px] rounded-br-[0px] rounded-bl-[0px] opacity-[1]">
            <h2 className="font-pretendard text-[24px] font-bold leading-[36px] tracking-[-0.01em] text-left">
                To. {name}
            </h2>
            <p className="font-pretendard text-[16px] font-bold leading-[26px] tracking-[-0.01em] text-left inline">
                {recentMessages.length}
            </p>
            <span className="font-pretendard text-[16px] font-normal leading-[26px] tracking-[-0.01em] text-left inline">
                명이 작성했어요!
            </span>
        </div>
    );
};

export default RecipientCard;
