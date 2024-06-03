import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TagSelect from "./InnerComponent/TagSelect";

const TRAVEL_STYLE_TAGS = [
  "명소탐방",
  "근거리여행",
  "혼자여행",
  "친구와여행",
  "즉흥파여행",
  "계획파여행",
  "가성비여행",
  "프리미엄여행",
  "자연/풍경",
  "식도락",
  "휴식/휴양",
  "역사유적지",
  "테마파크",
  "시티투어",
  "쇼핑",
  "드라마촬영지",
];

const RESTAURANT_TAGS = [
  "한식",
  "일식",
  "디자트",
  "양식",
  "중식",
  "프렌차이즈",
  "주점",
  "이색외국요리",
  "맛있는",
  "가성비있는",
  "깨끗한",
  "분위기있는",
  "메뉴가다양한",
  "이색적인메뉴",
  "비건메뉴",
  "푸짐한",
];

const ACCOMMODATION_TAGS = [
  "펜션",
  "호텔",
  "콘도/리조트",
  "모텔",
  "캠핑/글램핑",
  "민박",
  "게스트 하우스",
  "한옥 숙소",
  "시설편리성",
  "오션뷰",
  "마운틴뷰",
  "시티뷰",
  "교통접근성",
  "신규오픈",
  "합리적비용",
  "프리미엄",
];

// 음식점 최종 해시태그 :
// # 한식 # 일식 # 디저트 # 양식 # 중식 # 프렌차이즈 # 주점 # 이색외국요리 # 맛있는 # 가성비있는 # 깨끗한 # 분위기있는 # 메뉴가다양한 # 이색적인메뉴 # 비건메뉴 # 푸짐한

// 숙박 최종 해시태그 :
// # 펜션 # 호텔 # 콘도/리조트 # 모텔 # 캠핑/글램핑 # 민박 # 게스트 하우스 # 한옥 숙소 # 시설편리성 # 오션뷰 # 마운틴뷰 # 시티뷰 # 교통접근성 # 신규오픈 # 합리적비용 # 프리미엄

// 여행스타일 최종 해시태그:
// # 명소탐방 # 근거리여행 # 혼자여행 # 친구와여행 # 즉흥파여행 # 계획파여행 #가성비여행 #프리미엄여행 # 자연/풍경 # 식도락 # 휴식/휴양 # 역사유적지 # 테마파크,동/식물원 # 시티투어 # 쇼핑 # 드라마촬영지

const Community = () => {
  const navigate = useNavigate();

  const [finalSixTags, setFinalSixTags] = useState([]);

  const [postDatas, setPostDatas] = useState([]);

  console.log(postDatas);

  // http://220.67.128.173:8080
  // 추천 게시글 받아오기
  useEffect(() => {
    fetch("http://localhost:8080/post/list", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setPostDatas(data);
      });
  }, []);

  //

  // '태그 기번 추천 게시글 조회' 백엔드 연동 코드
  // useEffect(() => {
  //   fetch(`http://10.10.29.204:8080/post/tag`, {
  //     method: "POST",
  //     body: JSON.stringify({
  //       tags: finalSixTags,
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setPostDatas(data);
  //     });
  // }, [postDatas, finalSixTags]);

  const postId = 1;

  const token = localStorage.getItem("accessToken");

  const handleTagCompleteBtn = () => {
    fetch(`http://localhost:8080/post/tag`, {
      method: "POST",
      body: JSON.stringify({
        tags: finalSixTags,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setPostDatas(data);
      });
  };

  return (
    <Container>
      <HeaderMargin></HeaderMargin>
      <TitleImgBox>
        <img src="/images/main_page/main_banner.png" />
      </TitleImgBox>
      <PostBtnArea>
        {token ? (
          <PostBtn
            onClick={() => {
              navigate("/post");
            }}
          >
            게시글 작성하기
          </PostBtn>
        ) : (
          <></>
        )}
      </PostBtnArea>
      <TagSelect handleFinalSixTags={setFinalSixTags} />
      <TagCompleteBtn
        onClick={() => {
          handleTagCompleteBtn();
        }}
      />
      <PostShowBox>
        <PostShowArea>
          {postDatas.map(({ postId, title, tags }) => {
            // const TAGS = [...tags];

            return (
              <PostItem
                key={postId}
                onClick={() => {
                  navigate(`/post-detail/${postId}`);
                }}
              >
                <div>
                  <img height="150px" src="" />
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
        </PostShowArea>
      </PostShowBox>
      <FooterMargin>{finalSixTags}</FooterMargin>
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

const TitleImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  margin: 3vh 0;

  img {
    width: 50vw;
    border-radius: 20px;
  }

  @media only screen and (max-width: 800px) {
    img {
      margin: 2vh 2vw;
      width: 85vw;
    }
  }
`;

const PostBtnArea = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 100%;
  height: 80px;
`;

const PostBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 205px;
  height: 45px;
  margin-bottom: 15px;
  margin: 0px 7.5vw 15px 0px;
  border-radius: 10px;
  color: white;
  background-color: #04dfd9;
  /* font-family: "Freesentation-9Black"; */
`;

const TagCompleteBtn = styled.div``;

const PostShowBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2vh 5vw;
  padding: 10px;
`;

const PostShowArea = styled.div`
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

const FooterMargin = styled.div`
  height: 80px;
`;

export default Community;
