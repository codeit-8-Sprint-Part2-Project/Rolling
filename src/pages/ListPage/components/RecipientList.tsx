
import React from 'react';
import { Link } from 'react-router-dom';

interface RecipientCardListProps {
    data: any; // 수신자 데이터
}

const RecipientCardList: React.FC<RecipientCardListProps> = ({ data }) => {
    return (
        <div className="grid grid-cols-4 gap-4">
            {data.results.map((recipient: any) => (
                <Link key={recipient.id} to={`/post/${recipient.id}`}>
                    <div className="p-4 border border-gray-200 rounded-lg cursor-pointer">
                        <h3 className="font-bold text-lg">To. {recipient.name}</h3>
                        <p className="text-sm">{recipient.messageCount}명이 작성했어요!</p>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default RecipientCardList;
