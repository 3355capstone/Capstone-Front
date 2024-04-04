import { useNavigate } from "react-router-dom";

const Community = () => {
  const navigate = useNavigate();
  const postId = 1;

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
          navigate(`/post-detail/${postId}`);
        }}
      >
        게시글 상세
      </button>
    </div>
  );
};

export default Community;
