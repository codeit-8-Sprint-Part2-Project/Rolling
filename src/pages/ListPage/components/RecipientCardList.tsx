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

interface RecipientCardListProps {
    data: {
        results: Recipient[];
    };
}

const RecipientCardList: React.FC<RecipientCardListProps> = ({ data }) => {
    const [isMobile, setIsMobile] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const cardsToShow = 4;

    const totalCards = data.results.length;
    const maxIndex = Math.max(0, Math.ceil((totalCards - cardsToShow) / cardsToShow) * cardsToShow);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1220);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const prevSlide = () => {
        setCurrentIndex((prev) => Math.max(prev - cardsToShow, 0));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => Math.min(prev + cardsToShow, maxIndex));
    };

    const customScrollbarStyles = `
        .custom-scrollbar::-webkit-scrollbar {
            width: 8px;
            height: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
            background-color: rgba(100, 100, 100, 0.5);
            border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
            background-color: transparent;
        }
    `;

    if (isMobile) {
        return (
            <div className="overflow-x-auto overflow-y-hidden custom-scrollbar">
                <style>{customScrollbarStyles}</style>
                <div className="flex">
                    {data.results.map((recipient) => (
                        <div className="flex-shrink-0 w-[300px] p-3" key={recipient.id}>
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
        );
    }
    return (
        <div className="relative">
            {currentIndex > 0 && (
                <button
    className="w-[40px] h-[40px] rounded-full absolute top-1/2 left-[-5px] transform -translate-y-1/2 bg-[rgba(255,255,255,0.9)] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.08)] border border-gray-300 flex items-center justify-center cursor-pointer z-10"
    onClick={prevSlide}
>
    <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.46154 13L1 7L7.46154 1" stroke="#101010" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
</button>

            )}
            <div className="overflow-hidden w-full">
                <div
                    className="flex transition-transform duration-500"
                    style={{ transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)` }}
                >
                    {data.results.map((recipient) => (
                        <div className="min-w-[25%] box-border p-3" key={recipient.id}>
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
            {currentIndex < maxIndex && (
                <button
                    className="w-[40px] h-[40px] rounded-full right-[-5px] absolute top-1/2 right-0 transform -translate-y-1/2 bg-[rgba(255,255,255,0.9)] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.08)] border border-gray-300 px-3 py-1 cursor-pointer z-10"
                    onClick={nextSlide}
                >
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.53846 14L12 8L5.53846 2" stroke="#101010" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                </button>
            )}
        </div>
    );
};

export default RecipientCardList;
