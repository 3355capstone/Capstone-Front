import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

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

  const [clickedCount, setClickedCount] = useState([0, 0, 0]);

  const [travelStyleTagColors, setTravelStyleTagColors] = useState(
    Array(TRAVEL_STYLE_TAGS.length).fill("white")
  );

  const [restaurantTagColors, setRestaurantTagColors] = useState(
    Array(RESTAURANT_TAGS.length).fill("white")
  );

  const [accommodationTagColors, setAccommodationTagColors] = useState(
    Array(ACCOMMODATION_TAGS.length).fill("white")
  );

  const [selectedTags, setSelectedTags] = useState([]);

  const [isTagSelectCompleteBtnClicked, setIsTagSelectCompleteBtnClicked] =
    useState(false);

  const [postData, setPostData] = useState([]);

  // 태그 선택 완료 버튼 클릭 시 (각 카테고리당 2개씩 선택) 일어나는 동작 관리
  useEffect(() => {
    travelStyleTagColors.forEach((tagColor, index) => {
      if (tagColor !== "white") {
        setSelectedTags((prevTags) => {
          // 이전 상태를 기반으로 새로운 배열을 생성하여 요소를 추가합니다.
          return [...prevTags, TRAVEL_STYLE_TAGS[index]];
        });
      }
    });

    restaurantTagColors.forEach((tagColor, index) => {
      if (tagColor !== "white") {
        setSelectedTags((prevTags) => {
          // 이전 상태를 기반으로 새로운 배열을 생성하여 요소를 추가합니다.
          return [...prevTags, RESTAURANT_TAGS[index]];
        });
      }
    });

    accommodationTagColors.forEach((tagColor, index) => {
      if (tagColor !== "white") {
        setSelectedTags((prevTags) => {
          // 이전 상태를 기반으로 새로운 배열을 생성하여 요소를 추가합니다.
          return [...prevTags, ACCOMMODATION_TAGS[index]];
        });
      }
    });
  }, [isTagSelectCompleteBtnClicked]);

  // useEffect(() => {
  //   fetch("/data/PostData.json", {
  //     method: "GET",
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setPostData(data);
  //     });
  // }, []);

  // 백엔드와 통신
  // useEffect(() => {
  //   fetch("http://서버주소/user/login", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json;charset=utf-8",
  //     },
  // body: JSON.stringify({
  //   email: email,
  //   password: password,
  // }),
  //   })
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       if (data.token) {
  //         localStorage.setItem("TOKEN", data.accessToken);
  //         navigate("/");
  //       } else {
  //         alert(
  //           "로그인 실패 (이메일 혹은 비밀번호가 존재하지 않거나 올바르지 않음)"
  //         );
  //       }
  //     });
  // }, []);

  // 태그 클릭 시 색깔 변경
  const handleTagClickOne = (index) => {
    if (travelStyleTagColors[index] == "white") {
      const newTagColors = [...travelStyleTagColors];
      newTagColors[index] = "#04dfd9";
      setTravelStyleTagColors(newTagColors);

      const newClickedCount = [...clickedCount];
      newClickedCount[0] += 1;
      setClickedCount(newClickedCount);
    } else {
      const newTagColors = [...travelStyleTagColors];
      newTagColors[index] = "white";
      setTravelStyleTagColors(newTagColors);

      const newClickedCount = [...clickedCount];
      newClickedCount[0] -= 1;
      setClickedCount(newClickedCount);
    }
  };

  const handleTagClickTwo = (index) => {
    if (restaurantTagColors[index] == "white") {
      const newTagColors = [...restaurantTagColors];
      newTagColors[index] = "#04dfd9";
      setRestaurantTagColors(newTagColors);

      const newClickedCount = [...clickedCount];
      newClickedCount[1] += 1;
      setClickedCount(newClickedCount);
    } else {
      const newTagColors = [...restaurantTagColors];
      newTagColors[index] = "white";
      setRestaurantTagColors(newTagColors);

      const newClickedCount = [...clickedCount];
      newClickedCount[1] -= 1;
      setClickedCount(newClickedCount);
    }
  };

  const handleTagClickThree = (index) => {
    if (accommodationTagColors[index] == "white") {
      const newTagColors = [...accommodationTagColors];
      newTagColors[index] = "#04dfd9";
      setAccommodationTagColors(newTagColors);

      const newClickedCount = [...clickedCount];
      newClickedCount[2] += 1;
      setClickedCount(newClickedCount);
    } else {
      const newTagColors = [...accommodationTagColors];
      newTagColors[index] = "white";
      setAccommodationTagColors(newTagColors);

      const newClickedCount = [...clickedCount];
      newClickedCount[2] -= 1;
      setClickedCount(newClickedCount);
    }
  };

  const handleTagSelectCompleteBtn = () => {
    console.log(clickedCount);
    if (
      clickedCount[0] !== 2 ||
      clickedCount[1] !== 2 ||
      clickedCount[2] !== 2
    ) {
      alert("태그를 카테고리 당 2개씩 골라주시기 바랍니다.");
      return;
    }

    setIsTagSelectCompleteBtnClicked(true);

    // 태그에 맞춰 게시글 필터링하기
    // travelStyleTagColors.forEach((tagColor, index) => {
    //   if (tagColor !== "white") {
    //     const newList = [...selectedTags];
    //     newList.push(TRAVEL_STYLE_TAGS[index]);
    //     setSelectedTags(newList);
    //   }
    // });

    // console.log(selectedTags);

    // restaurantTagColors.forEach((tagColor, index) => {
    //   if (tagColor !== "white") {
    //     const newList = [...selectedTags];
    //     newList.push(RESTAURANT_TAGS[index]);
    //     setSelectedTags(newList);
    //   }
    // });

    // console.log(selectedTags);

    // accommodationTagColors.forEach((tagColor, index) => {
    //   if (tagColor !== "white") {
    //     const newList = [...selectedTags];
    //     newList.push(ACCOMMODATION_TAGS[index]);
    //     setSelectedTags(newList);
    //   }
    // });

    console.log(selectedTags);

    alert("태그에 해당하는 게시물을 불러모으는 중입니다.");
    console.log(selectedTags);
  };

  const postId = 1;

  return (
    <Container>
      <TitleImgBox>
        <img src="/images/main_page/main_banner.png" />
      </TitleImgBox>
      <TagsArea>
        <TagsGroupArea>
          <TagTitleArea>
            <TagTitle>여행스타일</TagTitle>
          </TagTitleArea>
          <TagSelectArea>
            {TRAVEL_STYLE_TAGS.map((tag, index) => (
              <TagItem
                bgColor={travelStyleTagColors[index]}
                onClick={() => handleTagClickOne(index)}
              >
                #{tag}
              </TagItem>
            ))}
          </TagSelectArea>
        </TagsGroupArea>
        <TagsGroupArea>
          <TagTitleArea>
            <TagTitle>음식점</TagTitle>
          </TagTitleArea>
          <TagSelectArea>
            {RESTAURANT_TAGS.map((tag, index) => (
              <TagItem
                bgColor={restaurantTagColors[index]}
                onClick={() => handleTagClickTwo(index)}
              >
                #{tag}
              </TagItem>
            ))}
          </TagSelectArea>
        </TagsGroupArea>
        <TagsGroupArea>
          <TagTitleArea>
            <TagTitle>숙소</TagTitle>
          </TagTitleArea>
          <TagSelectArea>
            {ACCOMMODATION_TAGS.map((tag, index) => (
              <TagItem
                bgColor={accommodationTagColors[index]}
                onClick={() => handleTagClickThree(index)}
              >
                #{tag}
              </TagItem>
            ))}
          </TagSelectArea>
        </TagsGroupArea>
      </TagsArea>
      <TagSelectCompleteArea>
        <TagSelectCompleteBtn onClick={() => handleTagSelectCompleteBtn()}>
          태그 선택 완료
        </TagSelectCompleteBtn>
      </TagSelectCompleteArea>
      <PostShowArea>
        {/* {postData.map(
          ({
            place,
            gender,
            age,
            title,
            description,
            travelStyleTagOne,
            travelStyleTagTwo,
            restaurantTagOne,
            restaurantTagTwo,
            accommodationTagOne,
            accommodationTagTwo,
            imageUrl,
          }) => {}
        )} */}
        {selectedTags}
      </PostShowArea>
      <Temporary>
        <div>Community</div>
        <button
          onClick={() => {
            navigate("/post");
          }}
        >
          게시글 작성
        </button>
        <button
          onClick={() => {
            navigate(`/post-detail/${postId}`);
          }}
        >
          게시글 상세
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
  margin: 3vh 0;

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

const TagsArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2vh 0vh;
`;

const TagsGroupArea = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
`;

const TagTitleArea = styled.div`
  display: flex;
  width: 80vw;
`;

const TagTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 135px;
  height: 40px;
  margin-bottom: 15px;
  border-radius: 10px;
  color: white;
  background-color: #04dfd9;
  font-family: "Freesentation-9Black";
`;

const TagSelectArea = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 135px);
  /* grid-template-rows: repeat(auto-fill, 50px); */
  gap: 10px 15px;
`;

const TagItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  background-color: ${(props) => props.bgColor};
  font-size: medium;
  border: 1px solid grey;
  border-radius: 5px;
  font-family: "Freesentation-9Black";
`;

const TagSelectCompleteArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 60px;
  margin: 50px 0px;
`;

const TagSelectCompleteBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 60px;
  border-radius: 15px;
  background-color: #04dfd9;
  color: white;
`;

//

const PostShowArea = styled.div``;

const Temporary = styled.div``;

export default Community;
