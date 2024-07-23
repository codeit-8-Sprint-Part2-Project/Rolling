import React, { useEffect, useState } from 'react';
import BestRecipientCardList from './RecipientCardList';
import getRecipient from '../api/getRecipient';
import LoadingSpinner from './UI/LoadingSpinner';
import Title from "./UI/Title";

const BestRecipient: React.FC = () => {
    const [recipientData, setRecipientData] = useState<any>(null); // 수신자 데이터 상태
    const [isLoading, setIsLoading] = useState<boolean>(true); // 로딩 상태
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1220); // 모바일 여부 상태

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getRecipient(); // API 호출
                console.log("API 응답 데이터:", result); // 데이터 구조 확인

                // 데이터 구조에 따라 적절히 처리
                const processedData = Array.isArray(result) ? result : result.results || [];

                // messageCount를 기준으로 내림차순 정렬
                const sortedData = processedData.sort((a, b) => b.messageCount - a.messageCount);

                setRecipientData({ results: sortedData });
            } catch (error) {
                console.error("데이터를 불러오는 중 오류가 발생했습니다.", error);
            } finally {
                setIsLoading(false); // 데이터 로드 완료 후 로딩 상태 변경
            }
        };

        fetchData(); // fetchData 함수 실행
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1220); // 창 크기 변경 시 모바일 여부 업데이트
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize); // 컴포넌트 언마운트 시 이벤트 제거
        };
    }, []);

    return (
        <div className="max-w-[1201px] mx-auto">
            <div style={{ marginLeft: isMobile ? '20px' : 'auto' }}>
                <Title text="인기 롤링 페이퍼 🔥️" />
            </div>

            {isLoading ? (
                <LoadingSpinner /> // 로딩 중이면 스피너 표시
            ) : (
                recipientData && <BestRecipientCardList data={recipientData} /> // 데이터가 있으면 리스트 표시
            )}
        </div>
    );
};

export default BestRecipient;
