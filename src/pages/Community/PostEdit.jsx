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
        <div>게시글 작성하기</div>
        <div>당신의 여행을 소개해주세요</div>
        <TitleBox></TitleBox>
        <ContentBox></ContentBox>
        <ImageBox></ImageBox>
      </PostWriteBox>
      <TagSelect handleFinalSixTags={setFinalSixTags} />
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

const PostWriteBox = styled.div``;

const TitleBox = styled.div``;

const ContentBox = styled.div``;

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
