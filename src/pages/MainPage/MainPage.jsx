import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div>MainPage</div>
      <button
        onClick={() => {
          navigate("/sign-in");
        }}
      >
        로그인
      </button>
      <button
        onClick={() => {
          navigate("/sign-up");
        }}
      >
        회원가입
      </button>
      <button
        onClick={() => {
          navigate("/community");
        }}
      >
        커뮤니티
      </button>
      <button
        onClick={() => {
          navigate("/course-recommendation");
        }}
      >
        코스 추천
      </button>
      <button
        onClick={() => {
          navigate("/my-page");
        }}
      >
        마이페이지
      </button>
    </div>
  );
};

export default MainPage;
