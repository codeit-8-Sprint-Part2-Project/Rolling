import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RecipientCard from './RecipientCard';

interface RecentMessage {
    id: number;
    sender: string;
    profileImageURL: string;
}

interface Recipient {
    id: string;
    name: string;
    recentMessages: RecentMessage[];
    topReactions: { emoji: string; count: number }[];
    backgroundColor: string;
    backgroundImageURL?: string | null;
}

interface RecipientCardListProps {
    data: {
        results: Recipient[];
    };
}

const RecipientCardList: React.FC<RecipientCardListProps> = ({ data }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const cardsToShow = 4;

    const totalCards = data.results.length;
    const maxIndex = Math.ceil(totalCards / cardsToShow) - 1;

    const prevSlide = () => {
        setCurrentIndex((prev) => Math.max(prev - cardsToShow, 0));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => Math.min(prev + cardsToShow, maxIndex * cardsToShow));
    };

    return (
        <div className="relative">
            {currentIndex > 0 && (
                <button
                    className="rounded-full absolute top-1/2 left-0 transform -translate-y-1/2 bg-white border border-gray-300 px-3 py-1 cursor-pointer z-10"
                    onClick={prevSlide}
                >
                    {"<"}
                </button>
            )}
            <div className="overflow-hidden w-full">
                <div
                    className="flex transition-transform duration-500"
                    style={{ transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)` }}
                >
                    {data.results.map((recipient, index) => (
                        <div className="min-w-[25%] box-border p-2" key={recipient.id}>
                            <Link to={`/post/${recipient.id}`}>
                                <RecipientCard
                                    name={recipient.name}
                                    recentMessages={recipient.recentMessages}
                                    topReactions={recipient.topReactions}
                                    backgroundColor={recipient.backgroundColor}
                                    backgroundImageURL={recipient.backgroundImageURL}
                                />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            {currentIndex < maxIndex * cardsToShow && (
                <button
                    className="rounded-full absolute top-1/2 right-0 transform -translate-y-1/2 bg-white border border-gray-300 px-3 py-1 cursor-pointer z-10"
                    onClick={nextSlide}
                >
                    {">"}
                </button>
            )}
        </div>
    );
};

export default RecipientCardList;
