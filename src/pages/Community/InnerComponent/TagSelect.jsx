import { useState, useEffect } from "react";
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

const TagSelect = ({ handleFinalSixTags }) => {
  const [clickedCount, setClickedCount] = useState([0, 0, 0]); // 카테고리 제한 X

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
    useState(0);

  // 태그 선택 완료 버튼 클릭 시 (각 카테고리당 2개씩 선택) 일어나는 동작 관리
  useEffect(() => {
    setSelectedTags([]);

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

    handleFinalSixTags(selectedTags);
  }, [isTagSelectCompleteBtnClicked, handleFinalSixTags]);

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
    if (clickedCount[0] < 1 || clickedCount[1] < 1 || clickedCount[2] < 1) {
      alert("각 카테고리 당 최소 1개의 태그를 골라야 합니다.");
      return;
    } else if (clickedCount[0] + clickedCount[1] + clickedCount[2] > 10) {
      alert("태그는 최대 10개까지만 고를 수 있습니다.");
      return;
    } else {
    }

    setIsTagSelectCompleteBtnClicked((prev) => prev + 1);

    // 태그에 맞춰 게시글 필터링하기
    // => 위의 useState에 구현했음

    alert(
      "태그 선택을 완료하시려면 버튼을 한 번 더 클릭해주세요. ('선택한 태그 확인'란을 확인해주세요)"
    );
    // alert("그럴 경우 버튼을 한 번 더 클릭하여 완료해주세요.");
  };

  return (
    <Container>
      <HeaderMargin></HeaderMargin>
      <TagsArea>
        <TagsInstruction>
          <div>각 카테고리 당 최소 1개의 태그를 골라주세요</div>
          <div>최대 10개의 태그를 고를 수 있습니다</div>
        </TagsInstruction>
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
        {/* {selectedTags} */}
      </TagsArea>
      <TagSelectCompleteArea>
        <TagSelectCompleteBtn onClick={() => handleTagSelectCompleteBtn()}>
          태그 선택 완료
        </TagSelectCompleteBtn>
      </TagSelectCompleteArea>
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

const TagsArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2vh 0vh;
`;

const TagsInstruction = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;

  div {
    line-height: 35px;
  }
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

  &:hover {
    background-color: #04dfd9;
    color: white;
    border: none;
  }
`;

const TagSelectCompleteArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 10px;
  margin: 50px 0px;
`;

const TagSelectCompleteBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 50px;
  border-radius: 15px;
  background-color: #04dfd9;
  color: white;

  &:hover {
    border: 1px solid grey;
    color: black;
  }
`;

export default TagSelect;
