import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MessageRetrieve } from "../../../../DTO/message/MessageRetrieve";
import RoundedLoadingBar from "./RoundedLoadingBar";
import { getByMessage } from "../../api/getByMessage";

interface Message {
  count: number;
  next?: string;
  previous?: string;
  results: MessageRetrieve[];
}

function ToMessageCount() {
  // 상태 변수 정의
  const { recipientId } = useParams();
  const [data, setData] = useState<Message | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // 메세지 카운트를 가져오는 함수
  useEffect(() => {
    const fetchCount = async () => {
      try {
        const params = recipientId ? { recipientId } : {};
        const Counts = await getByMessage(params);

        setData(Counts);
      } catch (error) {
        console.error("총 메세지를 불러오지 못했습니다.", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCount();
  }, [recipientId]);

  // 프로필 이미지 보여줄 3개를 설정
  const displayedProfiles = data?.results.slice(0, 3);
  // 3개가 넘어가면 + 몇 개로 표시할게 있는지 확인하기 위한 설정
  const countsProfiles =
    data?.results && data.results.length > 3 ? data.results.length - 3 : 0;

  return (
    <>
      {isLoading ? (
        <RoundedLoadingBar />
      ) : (
        <div className="hidden items-center gap-[11px] pr-7 min-1155:flex">
          <div
            className="flex items-center relative"
            style={{
              width: `${
                data?.results.length === 1
                  ? 24
                  : data?.results.length === 2
                  ? 39
                  : data?.results.length === 3
                  ? 54
                  : 69
              }px`,
            }}
          >
            {displayedProfiles?.map((profile, index) => (
              <img
                key={profile.id}
                className="border-solid border-white border-[1.4px] absolute rounded-full"
                src={profile.profileImageURL}
                alt="이모지 보낸 사람들 프로필사진"
                width="24px"
                height="24px"
                style={{
                  left: `${index * 15}px`,
                  zIndex: `${index * 2}`,
                }}
              />
            ))}
            {countsProfiles > 0 && (
              <div
                className="flex w-6 h-6 border border-solid border-[#e3e3e3] rounded-full font-pretendard font-[500] text-[#484848] text-[12px] bg-white absolute z-10 items-center justify-center"
                style={{
                  left: `${(displayedProfiles?.length || 0) * 15}px`,
                }}
              >
                +{countsProfiles}
              </div>
            )}
          </div>
          <p className="font-pretendard font-[400] text-[18px] text-[#181818]">
            <span className="font-bold">{data?.results?.length}</span>
            명이 작성했어요!
          </p>
        </div>
      )}
    </>
  );
}

export default ToMessageCount;
