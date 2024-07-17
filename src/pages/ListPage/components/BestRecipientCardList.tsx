import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RecipientCard from './RecipientCard';

interface Recipient {
  id: string;
  name: string;
  recentMessages: string;
  messageCount: number;
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
  const cardsToShow = 4; // 한 번에 보여줄 카드 수

  // 데이터를 메시지 수 기준으로 내림차순 정렬하는 상태 변수
  const [sortedData, setSortedData] = useState<Recipient[]>([]);

  // 데이터가 변경될 때마다 정렬하여 sortedData 업데이트
  useEffect(() => {
    const sortedRecipients = [...data.results].sort(
      (a, b) => b.recentMessages.length - a.recentMessages.length
    );
    setSortedData(sortedRecipients);
  }, [data.results]);

  const totalCards = sortedData.length;
  const maxIndex = Math.ceil(totalCards / cardsToShow) - 1;

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  return (
    <div className="relative">
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white border border-gray-300 px-3 py-1 cursor-pointer z-10"
        onClick={prevSlide}
        disabled={currentIndex === 0}
      >
        {"<"}
      </button>
      <div className="overflow-hidden w-full">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {sortedData.map((recipient, index) => (
            <div className="min-w-[25%] box-border p-2" key={recipient.id}>
              <Link to={`/post/${recipient.id}`}>
                <RecipientCard
                  name={recipient.name}
                  recentMessages={recipient.recentMessages}
                  topReactions={recipient.topReactions}
                  backgroundColor={recipient.backgroundColor}
                  backgroundImageURL={recipient.backgroundImageURL} // 배경 이미지 URL 전달
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white border border-gray-300 px-3 py-1 cursor-pointer z-10"
        onClick={nextSlide}
        disabled={currentIndex === maxIndex}
      >
        {">"}
      </button>
    </div>
  );
};

export default BestRecipientCardList;
