import React, { useState, useEffect } from 'react';
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

interface BestRecipientCardListProps {
    data: {
        results: Recipient[];
    };
}

const BestRecipientCardList: React.FC<BestRecipientCardListProps> = ({ data }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const cardsToShow = 4;

    const [sortedData, setSortedData] = useState<Recipient[]>([]);

    useEffect(() => {
        const sortedRecipients = [...data.results].sort(
            (a, b) => b.recentMessages.length - a.recentMessages.length
        );
        setSortedData(sortedRecipients);
    }, [data.results]);

    const totalCards = sortedData.length;
    const maxIndex = Math.max(0, totalCards - cardsToShow);

    const prevSlide = () => {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
    };

    return (
        <div className="relative">
            <button
                className="rounded-full absolute top-1/2 left-0 transform -translate-y-1/2 bg-white border border-gray-300 px-3 py-1 cursor-pointer z-10"
                onClick={prevSlide}
                disabled={currentIndex === 0}
            >
                {"<"}
            </button>
            <div className="overflow-hidden w-full">
                <div
                    className="flex transition-transform duration-500"
                    style={{ transform: `translateX(-${currentIndex * 25}%)` }}
                >
                    {sortedData.map((recipient) => (
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
            <button
                className="rounded-full absolute top-1/2 right-0 transform -translate-y-1/2 bg-white border border-gray-300 px-3 py-1 cursor-pointer z-10"
                onClick={nextSlide}
                disabled={currentIndex === maxIndex}
            >
                {">"}
            </button>
        </div>
    );
};

export default BestRecipientCardList;