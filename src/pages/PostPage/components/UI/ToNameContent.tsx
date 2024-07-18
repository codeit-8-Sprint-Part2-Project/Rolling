import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getByPostId } from "../../api/getByPostId";
import { MessageRetrieve } from "../../../../DTO/message/MessageRetrieve";

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

const ToNameContent: React.FC<ToNameContentProps> = ({ className }) => {
  const { productid } = useParams();
  const [data, setData] = useState<Recipient | null>(null);

  useEffect(() => {
    const fetchName = async () => {
      try {
        const params = productid ? { productid } : {};
        const names = await getByPostId(params);

        setData(names);
      } catch (error) {
        console.error("이름을 불러오지 못했습니다.", error);
      }
    };

    fetchName();
  }, [productid]);

  if (!data) {
    return <p>이름을 불러오지 못했습니다.</p>;
  }

  return (
    <h1
      className={`font-pretendard font-bold text-[18px] md:text-[28px] text-[#2b2b2b] ${className}`}
    >
      To. {data.name}
    </h1>
  );
};

export default ToNameContent;
