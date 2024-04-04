import { useNavigate } from "react-router-dom";

const MyCourse = () => {
  const navigate = useNavigate();
  const courseId = 1;

  return (
    <div>
      <p>MyCourse</p>
      <button
        onClick={() => {
          navigate(`/my-course-detail/${courseId}`);
        }}
      >
        코스 목록
      </button>
    </div>
  );
};

export default MyCourse;
