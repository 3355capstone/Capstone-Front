import { useNavigate } from "react-router-dom";

const RegionTagSelect = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div>RegionTagSelect</div>
      <button
        onClick={() => {
          navigate("/course-add-finish");
        }}
      >
        코스 추가 완료 알림
      </button>
    </div>
  );
};

export default RegionTagSelect;
