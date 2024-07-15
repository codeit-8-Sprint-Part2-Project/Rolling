import React, { useEffect, useState } from 'react';
import Section from '../../../components/UI/Section';
import { LinkButton } from '../../../components/UI/Button'; 
import RecipientCardList from './RecipientCardList';
import getRecipient from '../api/getRecipient'; // getRecipient 함수 불러오기

const AllRecipient: React.FC = () => {
    const [recipientData, setRecipientData] = useState<any>(null); // 수신자 데이터 상태

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getRecipient(); // API 호출
                setRecipientData(result); // 데이터 설정
            } catch (error) {
                console.error("데이터를 불러오는 중 오류가 발생했습니다.", error);
            }
        };

        fetchData(); // fetchData 함수 실행
    }, []);

    return (
        <div>
            <Section>
                <div>
                    <div className="flex-grow-3 flex-shrink-0 basis-0">
                        <h2 className="font-bold text-2xl">최근에 만든 롤링 페이퍼 ⭐️️</h2>
                    </div>
                </div>
            </Section>

            {recipientData && (
                <>
                    <Section>
                        <RecipientCardList data={recipientData} /> {/* RecipientCardList에 데이터 전달 */}
                    </Section>
                </>
            )}
            <div className="mt-4">
                <LinkButton path="../post" btnName="나도 만들어보기" />
            </div>

        </div>
    );
};

export default AllRecipient;
