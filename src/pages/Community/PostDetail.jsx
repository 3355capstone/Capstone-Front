import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
// import TagSelect from "./InnerComponent/TagSelect";

const PostDetail = () => {
  const navigate = useNavigate();

  const { postId } = useParams();

  const [finalSixTags, setFinalSixTags] = useState([]);

  const [postData, setPostData] = useState([]);

  useEffect(() => {
    fetch("/data/PostData.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setPostData(data);
      });
  }, []);

  useEffect(() => {
    console.log("Array from child updated:", finalSixTags);
  }, [finalSixTags]);

  return (
    <Container>
      <HeaderMargin></HeaderMargin>
      <div>PostEdit {postId}</div>
      <PostShowBox>
        <Title>게시글 제목</Title>
        <SubTitle>조회수 391 | 작성자 삼삼오오</SubTitle>
        <TitleBox>
          <TitleShow />
        </TitleBox>
        <ContentBox>
          <ContentShow />
        </ContentBox>
        {/* <ImageBox></ImageBox> */}
        <PlaceSelectBox>
          <PlaceSelectShow>여행지: </PlaceSelectShow>
        </PlaceSelectBox>
        <WriterInfoBox>
          <SubTitle>작성자 정보</SubTitle>
          {/* <ImageAttachInput type="file" accept="image/*" /> */}
        </WriterInfoBox>
        <TagsSelectedShowBox>
          <TagsSelected>선택한 태그들 표시</TagsSelected>
        </TagsSelectedShowBox>
      </PostShowBox>
      <PostRecommendBox>
        <Title>당신에게 맞는 동행글을 추천합니다</Title>
        {/* <SubTitle>조회수 391 | 작성자 삼삼오오</SubTitle> */}
        <PostRecommendShow>
          {postData.map(({ id, title, tags, imageUrl }) => {
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

const TagsSelectedShowBox = styled.div``;

const TagsSelected = styled.div``;

// const ImageBox = styled.div``;

//
const PostRecommendBox = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */
  margin-top: 100px;
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
