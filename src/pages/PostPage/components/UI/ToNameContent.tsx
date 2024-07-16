import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getByPostId } from "../../api/getByPostId";

interface Recipient {
  id?: number;
  team: string;
  name: string;
  backgroundColor: string;
  backgroundImageURL?: string;
  createdAt?: Date;
  messageCount?: string;
  reactionCount?: number;
  topReactions?: string;
}

function ToNameContent() {
  const { productid } = useParams();
  const [name, setName] = useState<Recipient | null>(null);

  useEffect(() => {
    const fetchName = async () => {
      try {
        const params = productid ? { productid } : {};
        const names = await getByPostId(params);

        setName(names);
      } catch (error) {
        console.error("이름을 불러오지 못했습니다.", error);
      }
    };

    fetchName();
  }, [productid]);

  if (!name) {
    return <p>이름을 불러오지 못했습니다.</p>;
  }

  return (
    <h1 className="font-pretendard font-bold text-[28px] text-[#2b2b2b]">
      To. {name.name}
    </h1>
  );
}

export default ToNameContent;
