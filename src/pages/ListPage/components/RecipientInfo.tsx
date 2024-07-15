import React from "react";

export interface RecipientInfoProps {
    data: any; // 데이터 props
}

const RecipientInfo: React.FC<RecipientInfoProps> = ({ data }) => {
    return (
        <div>
            {data.results.map((recipient: any) => (
                <div key={recipient.id} className="mb-4">
                    <h2 className="font-pretendard text-[24px] font-bold leading-[36px] tracking-[-0.01em] text-left">
                        To. {recipient.name}
                    </h2>
                    <p className="font-pretendard text-[16px] font-bold leading-[26px] tracking-[-0.01em] text-left inline">
                        {recipient.messageCount}
                    </p>
                    <span className="font-pretendard text-[16px] font-normal leading-[26px] tracking-[-0.01em] text-left inline">
                        명이 작성했어요!
                    </span>
                </div>
            ))}
        </div>
    );
};

export default RecipientInfo;
