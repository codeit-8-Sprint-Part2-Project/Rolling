import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getByPostId } from "../../api/getByPostId";
import { MessageRetrieve } from "../../../../DTO/message/MessageRetrieve";

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

function ToMessageCount() {
  const { productid } = useParams();
  const [Count, setCount] = useState<Recipient | null>(null);

  useEffect(() => {
    const fetchCount = async () => {
      try {
        const params = productid ? { productid } : {};
        const Counts = await getByPostId(params);

        setCount(Counts);
      } catch (error) {
        console.error("총 메세지를 불러오지 못했습니다.", error);
      }
    };

    fetchCount();
  }, [productid]);

  if (!Count) {
    return <p>총 메세지를 불러오지 못했습니다.</p>;
  }

  return <p className="">{Count.recentMessages?.length}명이 작성했어요!</p>;
}

export default ToMessageCount;
