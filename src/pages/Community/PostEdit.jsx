import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import TagSelect from "./InnerComponent/TagSelect";
import axios from "axios";

const TOKEN_TYPE = localStorage.getItem("tokenType");
let ACCESS_TOKEN = localStorage.getItem("accessToken");
let REFRESH_TOKEN = localStorage.getItem("refreshToken");

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
    place: "제주",
    gender: "여성",
    age: 30,
    title: "입사 전 힐링 여행 함께해요",
    content:
      "입사 전에 가는 여행입니다! 성별과 나이는 비슷하면 좋을 것 같아요~ I지만 낯은 잘 안 가려용. 힐링 여행 다녀오실 분 편하게 연락주세요",
    tagNames: [
      "명소탐방",
      "휴식/휴양",
      "한식",
      "가성비있는",
      "펜션",
      "교통접근성",
    ],
  });

  const [postData, setPostData] = useState({
    place: "",
    gender: "",
    age: 0,
    title: "",
    content: "",
    tagNames: [],
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
    fetch(`http://localhost:8080/post/${postId}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setLastPostData(data);
      });
  }, []);

  // 수정 완료한 게시글 데이터 백엔드로 전송하기
  const handleConfirm = () => {
    fetch(`http://localhost:8080/post/${postId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${TOKEN_TYPE} ${ACCESS_TOKEN}`,
        REFRESH_TOKEN: REFRESH_TOKEN,
      },
      body: JSON.stringify({
        ...postData,
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
  const { title, content, viewCount, place, tagNames } = lastPostData;

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
            value={postData.age}
            onChange={async (e) =>
              setPostData((prevState) => ({
                ...prevState,
                age: e.target.value,
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
                gender: e.target.value,
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
