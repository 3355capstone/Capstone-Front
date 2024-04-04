import { useNavigate } from "react-router-dom";

const PostComplete = () => {
  const navigate = useNavigate();
  const postId = 1;

  return (
    <div>
      <div>PostComplete</div>
      <button
        onClick={() => {
          navigate(`/post-detail/${postId}`);
        }}
      >
        내 게시글 상세
      </button>
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
        추천 게시글
      </button>
    </div>
  );
};

export default PostComplete;
