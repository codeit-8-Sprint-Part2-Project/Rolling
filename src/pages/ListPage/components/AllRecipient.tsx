import React, { useEffect, useState } from 'react';
import RecipientCardList from './RecipientCardList';
import getRecipient from '../api/getRecipient';
import TitleButton from "./UI/TitleButton";
import LoadingSpinner from './UI/LoadingSpinner';
import Title from "./UI/Title";

const AllRecipient: React.FC = () => {
    const [recipientData, setRecipientData] = useState<any>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1220);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getRecipient();
                setRecipientData(result);
            } catch (error) {
                console.error("데이터를 불러오는 중 오류가 발생했습니다.", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1220);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="max-w-[1201px] mx-auto">
            <div style={{ marginLeft: isMobile ? '20px' : 'auto' }}>
                <Title text="최근에 만든 롤링 페이퍼 ⭐" />
            </div>

            {isLoading ? (
                <LoadingSpinner />
            ) : (
                recipientData && <RecipientCardList data={recipientData} />
            )}

            <div className="mt-4">
                <TitleButton>나도 만들어보기</TitleButton>
            </div>
        </div>
    );
};

export default AllRecipient;
