import { ReactElement } from "react";
import BodyContainer from "../UI/BodyContainer";
import MainContainer from "../UI/MainContainer";
import TitleContainer from "../UI/TitleContainer";
import TitlePoint from "../UI/TitlePoint";
import TitleHeadContents from "../UI/TitleHeadContents";
import TitleContents from "../UI/TitleContents";
import TitleButton from "../UI/TitleButton";
import HomepageNotLogin from "../../assets/images/HomepageNotLogin.png";
import HomepageAddEmoji from "../../assets/images/HomepageAddEmoji.png";
import TitleLine from "../UI/TitleLine";

const HomepageMain = (): ReactElement => {
  return (
    <div className="px-6">
      <BodyContainer>
        <MainContainer>
          <TitleContainer>
            <TitlePoint>Point. 01</TitlePoint>
            <TitleHeadContents>
              <TitleLine>누구나 손쉽게, 온라인 </TitleLine>
              <TitleLine>롤링 페이퍼를 만들 수 있어요</TitleLine>
            </TitleHeadContents>
            <TitleContents>로그인 없이 자유롭게 만들어요.</TitleContents>
          </TitleContainer>
          <img
            src={HomepageNotLogin}
            alt="자유롭게 롤링페이퍼를 생성하는 이미지"
          />
        </MainContainer>
        <MainContainer reverse>
          <TitleContainer reverse>
            <TitlePoint>Point. 02</TitlePoint>
            <TitleHeadContents>
              <TitleLine>서로에게 이모지로 감정을 </TitleLine>
              <TitleLine>표현해보세요</TitleLine>
            </TitleHeadContents>
            <TitleContents>
              롤링 페이퍼에 이모지를 추가할 수 있어요.
            </TitleContents>
          </TitleContainer>
          <img
            src={HomepageAddEmoji}
            alt="롤링 페이퍼에 이모지를 선택하는 이미지"
            className="pt-[12px]"
          />
        </MainContainer>
      </BodyContainer>
      {/* aria-label을 활용하여 스크린 리더를 사용하는 사용자 접근성 향상 */}
      <TitleButton aria-label="사이트 구경하기">구경해보기</TitleButton>
    </div>
  );
};

export default HomepageMain;
