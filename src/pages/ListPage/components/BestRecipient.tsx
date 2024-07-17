import React, { useEffect, useState } from 'react';
import BestRecipientCardList from './RecipientCardList';
import getRecipient from '../api/getRecipient';

const BestRecipient: React.FC = () => {
    const [recipientData, setRecipientData] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getRecipient();
                console.log("API 응답 데이터:", result); // 데이터 구조 확인
                
                // 데이터 구조에 따라 적절히 처리
                const processedData = Array.isArray(result) ? result : result.results || [];
                
                // messageCount를 기준으로 내림차순 정렬
                const sortedData = processedData.sort((a, b) => b.messageCount - a.messageCount);
                
                setRecipientData({ results: sortedData });
            } catch (error) {
                console.error("데이터를 불러오는 중 오류가 발생했습니다.", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="max-w-[1201px] mx-auto">
            <div>
                <div className="flex-grow-3 flex-shrink-0 basis-0">
                    <h2 className="font-bold text-2xl">인기 롤링 페이퍼 🔥️</h2>
                </div>
            </div>

            {recipientData && (
                <>
                    <BestRecipientCardList data={recipientData} />
                </>
            )}
        </div>
    );
};

export default BestRecipient;
