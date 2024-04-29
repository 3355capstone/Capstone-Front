import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// 임시 mock 데이터

const MainPage = () => {
  const navigate = useNavigate();

  const [popularPostArray, setPopularPostArray] = useState([]);
  const [popularPlaceArray, setPopularPlaceArray] = useState([]);

  useEffect(() => {
    fetch("/data/PopularPostItems.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setPopularPostArray(data);
      });
  }, []);

  useEffect(() => {
    fetch("/data/PopularPlaceItems.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setPopularPlaceArray(data);
      });
  }, []);

  return (
    <Container>
      <TitleImgBox>
        <img src="/images/main_page/main_banner.png" />
      </TitleImgBox>
      <PopularPostBox>
        <Title>최근 인기 동행 게시글</Title>
        <SubTitle>최근 인기 동행글을 확인해보세요</SubTitle>
        <PopularPostArea>
          {popularPostArray.map(({ postName, tags, imageUrl }) => {
            const tag = `#${tags} `;

            return (
              <PostItem>
                <div>
                  <img height="150px" src={imageUrl} />
                </div>
                <div>
                  <p class="postname">{postName}</p>
                </div>
                <div>
                  <p class="tags">{tag}</p>
                </div>
              </PostItem>
            );
          })}
        </PopularPostArea>
      </PopularPostBox>
      <PopularPlaceBox>
        <Title>서울 인기 관광지</Title>
        <SubTitle>오직 서울만의 명소를 확인해보세요</SubTitle>
        <PopularPlaceArea>
          {popularPlaceArray.map(({ placeName, description, imageUrl }) => {
            return (
              <PopularPlaceItem>
                <div>
                  <img height="150px" src={imageUrl} />
                </div>
                <div>
                  <p class="postname">{placeName}</p>
                </div>
                <div>
                  <p class="tags">{description}</p>
                </div>
              </PopularPlaceItem>
            );
          })}
        </PopularPlaceArea>
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
  justify-content: center;
  align-items: center;
  width: 100vw;
  /* height: 30vh; */

  img {
    margin: 2vh 2vw;
    border-radius: 5px;
  }

  @media only screen and (max-width: 800px) {
    img {
      margin: 2vh 2vw;
      border-radius: 5px;
      width: 90vw;
    }
  }
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
  border-radius: 10px;

  img {
    border-radius: 10px;
    /* background-size: cover; */
    object-fit: cover;
  }
  p {
    margin: 7px;
  }
  .postname {
    font-size: 16px;
  }
  .tags {
    font-size: 12px;
  }
`;

const PopularPlaceBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 40vh;
  padding: 10px;
`;

const PopularPlaceArea = styled.div``;

const PopularPlaceItem = styled.div``;

const Temporary = styled.div``;

export default MainPage;
