import React from 'react';
import { Link } from 'react-router-dom';
import RecipientCard from './RecipientCard';

interface RecipientCardListProps {
    data: any; // 수신자 데이터
}

const RecipientCardList: React.FC<RecipientCardListProps> = ({ data }) => {
    return (
        <div className="grid grid-cols-4 gap-4">
            {data.results.map((recipient: any) => (
                <Link key={recipient.id} to={`/post/${recipient.id}`}>
                    <RecipientCard
                        name={recipient.name}
                        messageCount={recipient.messageCount}
                    />
                </Link>
            ))}
        </div>
    );
};

export default RecipientCardList;
