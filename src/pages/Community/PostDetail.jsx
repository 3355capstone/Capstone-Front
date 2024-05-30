import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
// import TagSelect from "./InnerComponent/TagSelect";

const PostDetail = () => {
  const navigate = useNavigate();
  const { postId } = useParams();

  const [finalSixTags, setFinalSixTags] = useState([]);

  const [lastPostData, setLastPostData] = useState({
    postId: postId,
    title: "강남 같이 가실 분 구해요",
    content:
      "2월 5일에 같이 강남에 있는 디저트 카페 돌아다니실 분 구합니다. 저는 20대 여자에요",
    filePath: null,
    viewCount: 0,
    place: "강릉",
    tags: ["쇼핑", "일식", "혼자여행", "명소탐방"],
    userInfo: {
      email: "dd@naver.com",
      nickname: null,
      age: 20,
      country: null,
      gender: null,
    },
  });

  const [recommandPostsData, setRecommandPostsData] = useState([]);

  // 게시글 데이터 백엔드로부터 불러오기
  useEffect(() => {
    fetch(`http://10.10.29.204:8080/post/${postId}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setLastPostData(data);
      });
  }, []);

  // 동행글 추천 데이터 받아오기 (임시)
  useEffect(() => {
    fetch("/data/PostData.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setRecommandPostsData(data);
      });
  }, []);

  useEffect(() => {
    console.log("Array from child updated:", finalSixTags);
  }, [finalSixTags]);

  // 게시글 정보, 사용자 정보 구조 분해 할당하기
  const { title, content, viewCount, place, tags, userInfo } = lastPostData;
  const { nickname, age, country, gender } = userInfo;

  return (
    <Container>
      <HeaderMargin></HeaderMargin>
      {/* <div>PostEdit {postId}</div> */}
      <PostShowBox>
        <Title>{title}</Title>
        {/* <Title>안녕하세요?</Title> */}
        <SubTitle>
          조회수 391 | 작성자 삼삼오오{nickname} ({age}세, {gender})
        </SubTitle>
        {/* <SubTitle>조회수 391 | 작성자 삼삼오오</SubTitle> */}
        <TitleBox>
          <TitleShow />
        </TitleBox>
        <ImageBox>
          <ImageShow src={""} />
          {/* <ImageShow /> */}
        </ImageBox>
        <ContentBox>
          <ContentShow>{content}</ContentShow>
          {/* <ContentShow>안녕하세요 같이 여행하실래요?</ContentShow> */}
        </ContentBox>
        <PlaceSelectBox>
          <PlaceSelectShow>여행지: {place}</PlaceSelectShow>
          {/* <PlaceSelectShow>여행지: 서울 근교</PlaceSelectShow> */}
        </PlaceSelectBox>
        <WriterInfoBox>
          <SubTitle>〈 작성자 정보 〉</SubTitle>
          <SubTitle>이름: {nickname}</SubTitle>
          {/* <SubTitle>이름: 삼삼오오</SubTitle> */}
          <SubTitle>
            나이, 성별: {age}세, {gender}
          </SubTitle>
          {/* <SubTitle>나이, 성별: 29세, 남성</SubTitle> */}
          <SubTitle>자기소개: 자기소개자기소개</SubTitle>
        </WriterInfoBox>
        <TagsSelectedShowBox>
          <TagsSelected>◆ 선택한 태그들 표시 ◆</TagsSelected>
          <TagsSelected>{tags.map((tag) => `#${tag}, `)}</TagsSelected>
          {/* <TagsSelected>#안녕, #안녕</TagsSelected> */}
        </TagsSelectedShowBox>
      </PostShowBox>
      <PostRecommendBox>
        <Title>당신에게 맞는 동행글을 추천합니다</Title>
        {/* <SubTitle>조회수 391 | 작성자 삼삼오오</SubTitle> */}
        <PostRecommendShow>
          {recommandPostsData.map(({ id, title, tags, imageUrl }) => {
            // const TAGS = [...tags];

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
                  <p class="postname">{title}</p>
                </div>
                <div>
                  <p class="tags">{tags.map((tag) => `# ${tag}, `)}</p>
                </div>
              </PostItem>
            );
          })}
        </PostRecommendShow>
      </PostRecommendBox>
      <PostCompleteBtn
        onClick={() => {
          console.log(finalSixTags);
        }}
      ></PostCompleteBtn>
      <FooterMargin></FooterMargin>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  background-color: ${({ theme }) => theme.backgroundColor};
`;

const HeaderMargin = styled.div`
  height: 80px;
`;

const PostShowBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

const Title = styled.div`
  width: 80vw;
  font-size: 20px;
  border-bottom: 2px solid black;
  margin-bottom: 15px;
`;

const SubTitle = styled.div`
  width: 80vw;
  font-size: 15px;
  margin-bottom: 15px;
`;

const TagSelectCheck = styled.div``;

const TagCheck = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  margin: 50px 0px;

  div {
    margin-bottom: 30px;
  }
`;

const TitleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

const TitleShow = styled.div`
  border: none;
  border-bottom: 0.5px solid grey;
  width: 80vw;
  height: 30px;
  font-size: 14px;

  &::placeholder {
    font-size: 14px;
    padding: 5px;
  }
`;

const ImageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

const ImageShow = styled.img``;

const ContentBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentShow = styled.div`
  border: none;
  border-bottom: 0.5px solid grey;
  background-color: white;
  width: 80vw;
  height: 300px;
  font-size: 14px;

  &::placeholder {
    font-size: 14px;
    padding: 5px;
  }
`;

const PlaceSelectBox = styled.div`
  margin-block: 10px;
`;

const PlaceSelectShow = styled.div`
  border: none;
  border-bottom: 0.5px solid grey;
  /* background-color: white; */
  width: 80vw;
  height: 30px;
  font-size: 14px;

  &::placeholder {
    font-size: 14px;
    padding: 5px;
  }
`;

const WriterInfoBox = styled.div`
  margin-top: 20px;
`;

const TagsSelectedShowBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

const TagsSelected = styled.div`
  line-height: 40px;
`;

// const ImageBox = styled.div``;

//
const PostRecommendBox = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */
  margin-top: 150px;
`;

const PostRecommendShow = styled.div`
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

//
const PostCompleteBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FooterMargin = styled.div`
  height: 80px;
`;

export default PostDetail;
