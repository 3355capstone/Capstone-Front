import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// 임시 mock 데이터

const MainPage = () => {
  const navigate = useNavigate();

  const [popularPostArray, setPopularPostArray] = useState([]);

  useEffect(() => {
    fetch("/data/PopularPostItems.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPopularPostArray(data);
      });
  }, []);

  return (
    <Container>
      <TitleImgBox></TitleImgBox>
      <PopularPostBox>
        <Title>최근 인기 동행 게시글</Title>
        <SubTitle>최근 인기 동행글을 확인해보세요</SubTitle>
        <PopularPostArea>
          {popularPostArray.map(({ postName, tags, imageUrl }) => {
            return (
              <PostItem>
                <div>
                  <img width="200px" height="150px" src={imageUrl} />
                </div>
                <div>
                  <p>{postName}</p>
                </div>
                <div>
                  <p>{tags}</p>
                </div>
              </PostItem>
            );
          })}
        </PopularPostArea>
      </PopularPostBox>
      <PopularPlaceBox>
        <Title>서울 인기 관광지</Title>
        <SubTitle>오직 서울만의 명소를 확인해보세요</SubTitle>
      </PopularPlaceBox>
      <Temporary>
        <div>MainPage</div>
        <button
          onClick={() => {
            navigate("/sign-in");
          }}
        >
          로그인
        </button>
        <button
          onClick={() => {
            navigate("/sign-up");
          }}
        >
          회원가입
        </button>
        <button
          onClick={() => {
            navigate("/community");
          }}
        >
          커뮤니티
        </button>
        <button
          onClick={() => {
            navigate("/course-recommendation");
          }}
        >
          코스 추천
        </button>
        <button
          onClick={() => {
            navigate("/my-page");
          }}
        >
          마이페이지
        </button>
      </Temporary>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  background-color: ${({ theme }) => theme.backgroundColor};
`;

const TitleImgBox = styled.div`
  display: flex;
  width: 100vw;
  height: 200px;
`;

const PopularPostBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 45vh;
  padding: 10px;
`;

const Title = styled.p`
  font-size: 20px;
  margin: 10px 0px;
`;

const SubTitle = styled.p`
  font-size: 15px;
  margin: 5px 0px;
  color: grey;
`;

const PopularPostArea = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25%, auto));
  gap: 15px 15px;
  padding: 10px;
`;

const PostItem = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;

  img {
    border-radius: 10px;
  }
  p {
    margin: 3px;
  }
`;

const PopularPlaceBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 40vh;
  padding: 10px;
`;

const Temporary = styled.div``;

export default MainPage;
