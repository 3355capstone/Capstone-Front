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
      <HeaderMargin></HeaderMargin>
      <TitleImgBox>
        <img src="/images/main_page/main_banner.png" />
      </TitleImgBox>
      <PopularPostBox>
        <Title>최근 인기 동행 게시글</Title>
        <SubTitle>최근 인기 동행글을 확인해보세요</SubTitle>
        <PopularPostArea>
          {popularPostArray.map(({ id, postName, tags, imageUrl }) => {
            const tag = `#${tags} `;

            return (
              <PostItem
                key={id}
                onClick={() => {
                  navigate(`/post/${id}`);
                }}
              >
                <div>
                  <img height="150px" src={imageUrl} />
                </div>
                <div>
                  <p class="postname">{postName}</p>
                </div>
                <div>
                  <p class="tags">{tags.map((tag) => `# ${tag}, `)}</p>
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
  height: 80px;
`;

const TitleImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  margin: 3vh 0;
  /* height: 30vh; */

  img {
    width: 85vw;
    border-radius: 20px;
  }

  @media only screen and (max-width: 800px) {
    img {
      margin: 2vh 2vw;
      width: 85vw;
    }
  }
`;

const PopularPostBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  /* height: 500px; */
  margin: 2vh 5vw;
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
  grid-template-columns: repeat(auto-fill, minmax(250px, 250px));
  gap: 15px 15px;
  margin: 10px 0px;
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
  margin: 2vh 5vw;
  padding: 10px;
`;

const PopularPlaceArea = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25%, auto));
  gap: 15px 15px;
  margin: 10px 0px;
  padding: 10px;
`;

const PopularPlaceItem = styled.div`
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

const FooterMargin = styled.div`
  height: 80px;
`;

export default MainPage;
