import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import TagSelect from "./InnerComponent/TagSelect";

const AGE_LIST = ["10", "20", "30", "40", "50", "60", "70", "80", "90"];
const GENDER_LIST = [
  [0, "male", "남자"],
  [1, "female", "여자"],
];

const PostEdit = () => {
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

  const [postData, setPostData] = useState({
    postId: postId,
    title: "",
    content: "",
    filePath: "",
    viewCount: "",
    place: "",
    tags: [],
    userInfo: {
      email: "",
      nickname: "",
      age: 20,
      country: null,
      gender: null,
    },
  });

  useEffect(() => {
    console.log("Array from child updated:", finalSixTags);

    setPostData((prevState) => ({
      ...prevState,
      tags: finalSixTags,
    }));
  }, [finalSixTags]);

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

  // 수정 완료한 게시글 데이터 백엔드로 전송하기
  const handleConfirm = () => {
    fetch(`http://10.10.29.204:8080/post/${postId}`, {
      method: "POST",
      body: JSON.stringify({
        postId: postId,
        title: "",
        content: "",
        filePath: "",
        viewCount: "",
        place: "",
        tags: [],
        userInfo: {
          email: "",
          nickname: "",
          age: 0,
          country: null,
          gender: null,
        },
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        // setPopularPostArray(data);
        alert("게시글을 수정하였습니다.");
        navigate(`post-detail/${postId}`);
      });
  };

  // 게시글 정보, 사용자 정보 구조 분해 할당하기
  const { title, content, viewCount, place, tags, userInfo } = lastPostData;
  const { nickname, age, country, gender } = userInfo;

  return (
    <Container>
      <HeaderMargin></HeaderMargin>
      {/* <div>PostEdit {postId}</div> */}
      <PostWriteBox>
        <InfoTitle>게시글 작성하기</InfoTitle>
        <InfoSubTitle>당신의 여행을 소개해주세요</InfoSubTitle>
        <TitleBox>
          <TitleInput
            placeholder={title}
            onChange={async (e) =>
              setPostData((prevState) => ({
                ...prevState,
                title: e.target.value,
              }))
            }
          />
        </TitleBox>
        <ContentBox>
          <ContentInput
            type="textarea"
            placeholder={content}
            onChange={async (e) =>
              setPostData((prevState) => ({
                ...prevState,
                content: e.target.value,
              }))
            }
          />
        </ContentBox>
        {/* <ImageBox></ImageBox> */}
        <PlaceSelectBox>
          <PlaceSelectInput
            placeholder="여행할 장소를 입력해주세요"
            value={place}
          />
        </PlaceSelectBox>
        <EtcSelectBox>
          <Select
            name="age"
            placeholder="나이"
            value={postData.userInfo.age}
            onChange={async (e) =>
              setPostData((prevState) => ({
                ...prevState,
                userInfo: {
                  ...prevState,
                  age: e.target.value,
                },
              }))
            }
          >
            {AGE_LIST.map((age) => (
              <Option key={age} value={age}>
                {age}대
              </Option>
            ))}
          </Select>
          <Select
            name="gender"
            placeholder="성별"
            value={postData.userInfo.gender}
            onChange={async (e) =>
              setPostData((prevState) => ({
                ...prevState,
                userInfo: {
                  ...prevState,
                  gender: e.target.value,
                },
              }))
            }
          >
            {GENDER_LIST.map(([key, gender, genderKor]) => (
              <Option key={key} value={gender}>
                {genderKor}
              </Option>
            ))}
          </Select>
        </EtcSelectBox>
        {/* <ImageAttachBox>
          <InfoSubTitle>적절한 여행 이미지를 첨부해주세요</InfoSubTitle>
          <ImageAttachInput type="file" accept="image/*" />
        </ImageAttachBox> */}
      </PostWriteBox>
      <TagSelectCheck>
        <TagSelect handleFinalSixTags={setFinalSixTags} />
        <TagCheck>
          <div>◆ 선택한 태그 확인 ◆</div>
          <div>{finalSixTags.map((tag) => `# ${tag}, `)}</div>
        </TagCheck>
      </TagSelectCheck>
      <BtnArea>
        <PostCompleteBtn
          onClick={() => {
            console.log(finalSixTags);
            handleConfirm();
          }}
        >
          게시글 작성 완료
        </PostCompleteBtn>
      </BtnArea>
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
    color: black;
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
    color: black;
    font-size: 14px;
    padding: 5px;
  }
`;

const ImageAttachBox = styled.div`
  margin-top: 20px;
`;

const ImageAttachInput = styled.input``;

// const ImageBox = styled.div``;

const PlaceSelectBox = styled.div`
  margin-block: 10px;
`;

const PlaceSelectInput = styled.input`
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

const EtcSelectBox = styled.div`
  margin-block: 10px;
`;

const Select = styled.select`
  width: 37vw;
  height: 40px;
  margin-top: 20px;
  border: 1px solid #a7bdc2;
  border-radius: 5px;
  padding: 10px;
  font-size: 14px;
  margin: 0px 10px;
`;

const Option = styled.option``;

//
const BtnArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const PostCompleteBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 80px;
  border-radius: 15px;
  /* background-color: #04dfd9; */
  background-color: white;
  font-size: 22px;
  color: black;
  border: 2px solid black;

  &:hover {
    background-color: black;
    color: white;
  }
`;

const FooterMargin = styled.div`
  height: 150px;
`;

export default PostEdit;
