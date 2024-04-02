import { useNavigate } from "react-router-dom";

const Community = () => {
  const navigate = useNavigate();

  return (
    <div>
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
          navigate("/bulletin-board");
        }}
      >
        게시글 상세
      </button>
    </div>
  );
};

export default Community;
