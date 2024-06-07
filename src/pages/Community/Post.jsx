import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TagSelect from "./InnerComponent/TagSelect";
import axios from "axios";

const TOKEN_TYPE = localStorage.getItem("tokenType");
let ACCESS_TOKEN = localStorage.getItem("accessToken");
let REFRESH_TOKEN = localStorage.getItem("refreshToken");

// 토큰 갱신
const refreshAccessToken = async () => {
  const response = await UserApi.get(`/api/v1/auth/refresh`);
  ACCESS_TOKEN = response.data;
  localStorage.setItem("accessToken", ACCESS_TOKEN);
  UserApi.defaults.headers.common[
    "Authorization"
  ] = `${TOKEN_TYPE} ${ACCESS_TOKEN}`;
};

// 토큰 유효성 검사
UserApi.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 403 && !originalRequest._retry) {
      await refreshAccessToken();
      return UserApi(originalRequest);
    }
    return Promise.reject(error);
  }
);

const AGE_LIST = ["10", "20", "30", "40", "50", "60", "70", "80", "90"];
const GENDER_LIST = [
  [0, "male", "남자"],
  [1, "female", "여자"],
];

const Post = () => {
  const navigate = useNavigate();

  const [finalSixTags, setFinalSixTags] = useState([]);

  const [postData, setPostData] = useState({
    place: "",
    gender: "",
    age: 0,
    title: "",
    content: "",
    tagNames: [],
  });

  // 작성 완료한 게시글 데이터 백엔드로 전송하기
  const handleConfirm = () => {
    fetch(`http://localhost:8080/post`, {
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
        alert("게시글을 게시하였습니다.");
        // navigate(`/post-detail/${postId}`);
        navigate(`/post-detail/1`);
      });
  };

  useEffect(() => {
    console.log("Array from child updated:", finalSixTags);
  }, [finalSixTags]);

  const { place, gender, age, title, content, tagNames } = postData;

  return (
    <Container>
      <HeaderMargin></HeaderMargin>
      {/* <div>Post {postId}</div> */}
      <PostWriteBox>
        <InfoTitle>게시글 작성하기</InfoTitle>
        <InfoSubTitle>당신의 여행을 소개해주세요</InfoSubTitle>
        <TitleBox>
          <TitleInput
            onChange={async (e) =>
              setPostData((prevState) => ({
                ...prevState,
                title: e.target.value,
              }))
            }
            placeholder="제목을 입력해주세요"
          />
        </TitleBox>
        <ContentBox>
          <ContentInput
            type="textarea"
            onChange={async (e) =>
              setPostData((prevState) => ({
                ...prevState,
                content: e.target.value,
              }))
            }
            placeholder="내용을 입력해주세요"
          />
        </ContentBox>
        {/* <ImageBox></ImageBox> */}
        <PlaceSelectBox>
          <PlaceSelectInput placeholder="여행할 장소를 입력해주세요" />
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
            value={postData.gender}
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
      </PostWriteBox>
      <TagSelectCheck>
        <TagSelect handleFinalSixTags={setFinalSixTags} />
        <TagCheck>
          <div>◆ 선택한 태그 확인 ◆</div>
          <div>{finalSixTags.map((tag) => `# ${tag}, `)}</div>
        </TagCheck>
      </TagSelectCheck>
      <PostCompleteBtn
        onClick={() => {
          handleConfirm();
        }}
      >
        게시글 작성 완료
      </PostCompleteBtn>
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
  height: 80px;
`;

export default Post;
