import { useNavigate } from "react-router-dom";

const CourseRecommendation = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div>CourseRecommendation</div>
      <button
        onClick={() => {
          navigate("/region-tag-select");
        }}
      >
        지역 및 태그 선택
      </button>
    </div>
  );
};

export default CourseRecommendation;
