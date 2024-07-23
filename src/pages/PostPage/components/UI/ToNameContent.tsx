import { ReactElement, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getByPostId } from "../../api/getByPostId";
import { MessageRetrieve } from "../../../../DTO/message/MessageRetrieve";
import RoundedLoadingBar from "./RoundedLoadingBar";

interface ToNameContentProps {
  className?: string;
}

interface Recipient {
  id?: number;
  team: string;
  name: string;
  backgroundColor: string;
  backgroundImageURL?: string;
  createdAt?: Date;
  messageCount?: string;
  recentMessages?: MessageRetrieve[];
  reactionCount?: number;
  topReactions?: string;
}

const ToNameContent = ({
  className = "",
}: ToNameContentProps): ReactElement => {
  // 상태 변수 정의
  const { recipientId } = useParams();
  const [data, setData] = useState<Recipient | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // 이름을 불러오는 함수
  useEffect(() => {
    const fetchName = async () => {
      try {
        const params = recipientId ? { recipientId } : {};
        const names = await getByPostId(params);

        setData(names);
      } catch (error) {
        console.error("이름을 불러오지 못했습니다.", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchName();
  }, [recipientId]);

  return (
    <>
      {isLoading ? (
        <RoundedLoadingBar />
      ) : (
        <h1
          className={`font-pretendard font-bold text-[18px] md:text-[28px] text-[#2b2b2b] ${className}`}
        >
          To. {data?.name}
        </h1>
      )}
    </>
  );
};

export default ToNameContent;
