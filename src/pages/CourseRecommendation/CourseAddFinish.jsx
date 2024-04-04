import { useNavigate } from "react-router-dom";

const CourseAddFinish = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div>CourseAddFinish</div>
      <button
        onClick={() => {
          navigate("/my-course");
        }}
      >
        코스 목록
      </button>
      <button
        onClick={() => {
          navigate("/region-tag-select");
        }}
      >
        지역 및 태그 선택
      </button>
      <button
        onClick={() => {
          navigate("/my-course-detail");
        }}
      >
        코스 상세 (수정 가능)
      </button>
    </div>
  );
};

export default CourseAddFinish;
