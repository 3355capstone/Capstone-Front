import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Kakao from "./InnerComponent/Kakao";

// 임시 mock 데이터

const CourseRecommendation = () => {
  const navigate = useNavigate();

  // useEffect(() => {
  //   fetch("/data/PopularPostItems.json", {
  //     method: "GET",
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setPopularPostArray(data);
  //     });
  // }, []);

  return (
    <Container>
      <HeaderMargin></HeaderMargin>
      <MainBox>
        <LeftSideBox>
          <p>서울 주변</p>
          <p>인기 관광지</p>
          <Title>TOP 10</Title>
          <LeftSideContentBox>
            <div>1. 익산동</div>
            <div>2. 경복궁</div>
            <div>3. 인사동</div>
            <div>4. 명동</div>
            <div>5. 경의선숲길</div>
            <div>6. 홍대</div>
            <div>7. 세빛섬</div>
            <div>8. 반포한강공원</div>
            <div>9. 서울숲</div>
            <div>10. 롯데월드</div>
          </LeftSideContentBox>
        </LeftSideBox>
        <RightSideBox>
          <UpperBox>
            <MapArea>
              <Title>인기 관광지 명 지도에 검색하기</Title>
              <ContentBox>
                {/* <Kakao /> */}
                <img src="/images/course_recommendation_page/map.png" />
              </ContentBox>
            </MapArea>
            <CourseArea>
              <Title>여행 일정</Title>
              <ContentBox>
                <img src="/images/course_recommendation_page/2.png" />
              </ContentBox>
            </CourseArea>
          </UpperBox>
          <LowerBox>
            <MapRecommendArea>
              <Title>지도 기반 추천 목록</Title>
              <ContentBox>
                <img src="/images/course_recommendation_page/3.png" />
              </ContentBox>
            </MapRecommendArea>
            <RecommendArea>
              <Title>이런 장소는 어때요?</Title>
              <ContentBox>
                <img src="/images/course_recommendation_page/4.png" />
              </ContentBox>
            </RecommendArea>
          </LowerBox>
        </RightSideBox>
      </MainBox>
      {/* <button
        onClick={() => {
          navigate("/sign-in");
        }}
      ></button> */}
      <FooterMargin></FooterMargin>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  /* margin-top: 80px; */
  background-color: ${({ theme }) => theme.backgroundColor};
`;

const HeaderMargin = styled.div`
  display: flex;
  flex-direction: column;
  height: 80px;
`;

const MainBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

const LeftSideBox = styled.div`
  width: 150px;
  margin-right: 40px;
`;

const LeftSideContentBox = styled.div`
  width: 100%;
  height: 60vh;
  background-color: #d8ebef;
  border-radius: 5px;
  padding: 10px;

  div {
    line-height: 25px;
  }
`;

const RightSideBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const UpperBox = styled.div`
  display: flex;
  margin-bottom: 80px;
`;

const MapArea = styled.div`
  width: 30vw;
  height: 30vh;
  margin-right: 40px;
`;

const Title = styled.div`
  border-bottom: 2px solid black;
  margin-bottom: 15px;
`;

const ContentBox = styled.div`
  width: 30vw;
  height: 30vh;
  background-color: white;

  img {
    width: 100%;
    height: 100%;
  }
`;

const CourseArea = styled.div`
  width: 30vw;
  height: 30vh;
`;

const LowerBox = styled.div`
  display: flex;
`;

const MapRecommendArea = styled.div`
  width: 30vw;
  height: 30vh;
  margin-right: 40px;
`;

const RecommendArea = styled.div`
  width: 30vw;
  height: 30vh;
`;

const FooterMargin = styled.div`
  height: 150px;
`;

export default CourseRecommendation;
