import React from "react";
import BodyContainer from "../UI/BodyContainer";
import MainContainer from "../UI/MainContainer";
import TitleContainer from "../UI/TitleContainer";
import TitlePoint from "../UI/TitlePoint";
import TitleHeadContents from "../UI/TitleHeadContents";
import TitleContents from "../UI/TitleContents";
import TitleButton from "../UI/TitleButton";

const HomePageMain: React.FC = () => {
  return (
    <>
      <BodyContainer>
        <MainContainer>
          <TitleContainer>
            <TitlePoint>Point. 01</TitlePoint>
            <TitleHeadContents>
              <span className="inline sm:block">누구나 손쉽게, 온라인 </span>
              <span className="inline sm:block">
                롤링 페이퍼를 만들 수 있어요
              </span>
            </TitleHeadContents>
            <TitleContents>로그인 없이 자유롭게 만들어요.</TitleContents>
          </TitleContainer>
          <img
            src="/assets/images/HomepageTitle1.png"
            alt="자유롭게 롤링페이퍼를 생성하는 이미지"
          />
        </MainContainer>
        <MainContainer reverse>
          <TitleContainer>
            <TitlePoint>Point. 02</TitlePoint>
            <TitleHeadContents>
              <span className="inline sm:block">서로에게 이모지로 감정을</span>
              <span className="inline sm:block">표현해보세요</span>
            </TitleHeadContents>
            <TitleContents>
              롤링 페이퍼에 이모지를 추가할 수 있어요.
            </TitleContents>
          </TitleContainer>
          <img
            src="/assets/images/HomepageTitle2.png"
            alt="롤링 페이퍼에 이모지를 선택하는 이미지"
          />
        </MainContainer>
      </BodyContainer>
      <TitleButton>구경해보기</TitleButton>
    </>
  );
};

export default HomePageMain;
