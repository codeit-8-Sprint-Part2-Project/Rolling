import React, { useEffect, useState } from 'react';
import RecipientCardList from './RecipientCardList';
import getRecipient from '../api/getRecipient'; // getRecipient 함수 불러오기
import TitleButton from "./UI/TitleButton";
import LoadingSpinner from './UI/LoadingSpinner'; // Assuming you have a LoadingSpinner component

const AllRecipient: React.FC = () => {
    const [recipientData, setRecipientData] = useState<any>(null); // 수신자 데이터 상태
    const [isLoading, setIsLoading] = useState<boolean>(true); // 로딩 상태

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getRecipient(); // API 호출
                setRecipientData(result); // 데이터 설정
            } catch (error) {
                console.error("데이터를 불러오는 중 오류가 발생했습니다.", error);
            } finally {
                setIsLoading(false); // 데이터 로드 완료 후 로딩 상태 변경
            }
        };

        fetchData(); // fetchData 함수 실행
    }, []);

    return (
        <div className="max-w-[1201px] mx-auto">
            <div>
                <div className="flex-grow-3 flex-shrink-0 basis-0">
                    <h2 className="font-bold text-2xl">최근에 만든 롤링 페이퍼 ⭐️️</h2>
                </div>
            </div>

            {isLoading ? (
                <LoadingSpinner /> // 로딩 중이면 스피너 표시
            ) : (
                recipientData && <RecipientCardList data={recipientData} /> // 데이터가 있으면 리스트 표시
            )}

            <div className="mt-4">
                <TitleButton>나도 만들어보기</TitleButton>
            </div>
        </div>
    );
};

export default AllRecipient;
