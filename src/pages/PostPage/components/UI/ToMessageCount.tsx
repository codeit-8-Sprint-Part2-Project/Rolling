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
  const [data, setData] = useState<Recipient | null>(null);

  useEffect(() => {
    const fetchCount = async () => {
      try {
        const params = productid ? { productid } : {};
        const Counts = await getByPostId(params);

        setData(Counts);
      } catch (error) {
        console.error("총 메세지를 불러오지 못했습니다.", error);
      }
    };

    fetchCount();
  }, [productid]);

  if (!data) {
    return <p>총 메세지를 불러오지 못했습니다.</p>;
  }

  const displayedProfiles = data?.recentMessages?.slice(0, 3);
  const countsProfiles =
    data?.recentMessages && data.recentMessages.length > 3
      ? data.recentMessages.length - 3
      : 0;

  return (
    <div className="flex items-center gap-[11px] pr-[28px]">
      <div
        className="flex items-center relative"
        style={{ width: `${((displayedProfiles?.length || 0) - 1) * 24}px` }}
      >
        {displayedProfiles?.map((profile, index) => (
          <img
            key={profile.id}
            className="border border-solid border-[#ffffff] border-[1.4px] absolute"
            src={profile.profileImageURL}
            alt="이모지 보낸 사람들 프로필사진"
            width="24px"
            height="24px"
            style={{
              left: `${index * 15}px`,
              zIndex: `${index * 2}`,
              clipPath: "circle(50%)",
            }}
          />
        ))}
      </div>

      {countsProfiles > 0 && (
        <div
          className="w-[24px] h-[24px] border border-solid border-[#e3e3e3] rounded-full font-pretendard font-[500] text-[#484848] text-[12px]"
          style={{
            left: `${(displayedProfiles?.length || 0) * 15}px`,
            zIndex: `${(displayedProfiles?.length || 0) * 2}}`,
          }}
        >
          +{countsProfiles}
        </div>
      )}
      <p className="font-pretendard font-[400] text-[18px] text-[#181818]">
        <span className="font-[700]">{data.recentMessages?.length}</span>명이
        작성했어요!
      </p>
    </div>
  );
}

export default ToMessageCount;
