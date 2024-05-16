import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import TagSelect from "./InnerComponent/TagSelect";

const PostEdit = () => {
  const { postId } = useParams();

  const [finalSixTags, setFinalSixTags] = useState([]);

  useEffect(() => {
    console.log("Array from child updated:", finalSixTags);
  }, [finalSixTags]);

  return (
    <Container>
      <HeaderMargin></HeaderMargin>
      <div>PostEdit {postId}</div>
      <PostWriteBox>
        <InfoTitle>게시글 작성하기</InfoTitle>
        <InfoSubTitle>당신의 여행을 소개해주세요</InfoSubTitle>
        <TitleBox>
          <TitleInput placeholder="제목을 입력해주세요" />
        </TitleBox>
        <ContentBox>
          <ContentInput type="textarea" placeholder="내용을 입력해주세요" />
        </ContentBox>
        <ImageAttachBox>
          <ImageAttachInput type="file" accept="image/*" />
        </ImageAttachBox>
        <ImageBox></ImageBox>
      </PostWriteBox>
      <TagSelectCheck>
        <TagSelect handleFinalSixTags={setFinalSixTags} />
        <TagCheck>
          <div>◆ 선택한 태그 확인 ◆</div>
          <div>{finalSixTags.map((tag) => `# ${tag}, `)}</div>
        </TagCheck>
      </TagSelectCheck>
      <PostComplete
        onClick={() => {
          console.log(finalSixTags);
        }}
      ></PostComplete>
      <FooterMargin></FooterMargin>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  background-color: ${({ theme }) => theme.backgroundColor};
`;

const HeaderMargin = styled.div`
  height: 80px;
`;

const PostWriteBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

const InfoTitle = styled.div`
  width: 80vw;
  font-size: 20px;
  border-bottom: 2px solid black;
  margin-bottom: 15px;
`;

const InfoSubTitle = styled.div`
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

const TitleInput = styled.input`
  border: none;
  border-bottom: 0.5px solid grey;
  background-color: white;
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

const ContentInput = styled.textarea`
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

const ImageAttachBox = styled.div``;

const ImageAttachInput = styled.input``;

const ImageBox = styled.div``;

// 임시용
const PostComplete = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FooterMargin = styled.div`
  height: 80px;
`;

export default PostEdit;
