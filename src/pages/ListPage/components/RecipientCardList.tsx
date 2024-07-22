import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RecipientCard from './RecipientCard';

interface RecentMessage {
    id: number;
    messageCount: number;
    sender: string;
    profileImageURL: string;
}

interface Recipient {
    id: string;
    messageCount: number;
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

const SlideButton: React.FC<{ direction: 'prev' | 'next', onClick: () => void }> = ({ direction, onClick }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <button
            className={`
                w-[40px] h-[40px] rounded-full absolute top-1/2 
                ${direction === 'prev' ? 'left-[-5px]' : 'right-[-5px]'}
                transform -translate-y-1/2 
                bg-[rgba(255,255,255,0.9)] 
                shadow-[0px_4px_8px_0px_rgba(0,0,0,0.08)] 
                border border-gray-300 
                flex items-center justify-center cursor-pointer z-10
                transition-all duration-300 ease-in-out
                ${isHovered ? 'bg-[#f0f0f0] scale-110' : ''}
            `}
            onClick={onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <svg
                width={direction === 'prev' ? "9" : "16"}
                height={direction === 'prev' ? "14" : "16"}
                viewBox={direction === 'prev' ? "0 0 9 14" : "0 0 16 16"}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`transition-all duration-300 ease-in-out ${isHovered ? 'scale-110' : ''}`}
            >
                <path
                    d={direction === 'prev' ? "M7.46154 13L1 7L7.46154 1" : "M5.53846 14L12 8L5.53846 2"}
                    stroke={isHovered ? "#9935FF" : "#101010"}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </button>
    );
};

const RecipientCardList: React.FC<RecipientCardListProps> = ({ data }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1220);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);
    const cardsToShow = 4;

    const totalCards = data.results.length;
    const maxIndex = Math.max(0, Math.ceil((totalCards - cardsToShow) / cardsToShow) * cardsToShow);

    useEffect(() => {
        const handleResize = () => {
            const wasMobile = isMobile;
            const isNowMobile = window.innerWidth < 1220;
            if (wasMobile !== isNowMobile) {
                localStorage.setItem('reloaded', 'true');
                window.location.reload();
            }
            setIsMobile(isNowMobile);
        };

        if (localStorage.getItem('reloaded') === 'true') {
            localStorage.removeItem('reloaded');
        } else {
            handleResize();
        }

        window.addEventListener('resize', handleResize);
        
        // 컴포넌트가 마운트된 후 애니메이션 시작
        setIsLoaded(true);

        return () => window.removeEventListener('resize', handleResize);
    }, [isMobile]);

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

    const cardAnimationStyles = `
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        .card-animation {
            opacity: 0;
            animation: fadeInUp 0.5s ease-out forwards;
        }
    `;

    if (isMobile) {
        return (
            <div className="overflow-x-auto overflow-y-hidden custom-scrollbar">
                <style>{customScrollbarStyles}</style>
                <style>{cardAnimationStyles}</style>
                <div className="flex">
                    {data.results.map((recipient, index) => (
                        <div 
                            className={`flex-shrink-0 w-[300px] p-3 card-animation`}
                            key={recipient.id}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <Link to={`/post/${recipient.id}`}>
                                <RecipientCard
                                    name={recipient.name}
                                    recentMessages={recipient.recentMessages}
                                    topReactions={recipient.topReactions}
                                    backgroundColor={recipient.backgroundColor}
                                    backgroundImageURL={recipient.backgroundImageURL}
                                    messageCount={recipient.messageCount}
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
            <style>{cardAnimationStyles}</style>
            {currentIndex > 0 && (
                <SlideButton direction="prev" onClick={prevSlide} />
            )}
            <div className="overflow-hidden w-full">
                <div
                    className="flex transition-transform duration-500"
                    style={{ transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)` }}
                >
                    {data.results.map((recipient, index) => (
                        <div 
                            className={`min-w-[25%] box-border p-3 card-animation`}
                            key={recipient.id}
                            style={{ 
                                animationDelay: `${index * 0.1}s`,
                                visibility: isLoaded ? 'visible' : 'hidden'
                            }}
                        >
                            <Link to={`/post/${recipient.id}`}>
                                <RecipientCard
                                    name={recipient.name}
                                    recentMessages={recipient.recentMessages}
                                    topReactions={recipient.topReactions}
                                    backgroundColor={recipient.backgroundColor}
                                    backgroundImageURL={recipient.backgroundImageURL}
                                    messageCount={recipient.messageCount}
                                />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            {currentIndex < maxIndex && (
                <SlideButton direction="next" onClick={nextSlide} />
            )}
        </div>
    );
};

export default RecipientCardList;
