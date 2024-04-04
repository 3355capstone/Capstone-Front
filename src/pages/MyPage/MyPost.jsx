import { useNavigate } from "react-router-dom";

const MyPost = () => {
  const navigate = useNavigate();
  const postId = 1;

  return (
    <div>
      MyPost
      <button
        onClick={() => {
          navigate(`/my-post-detail/${postId}`);
        }}
      >
        내가 쓴 게시글 목록
      </button>
    </div>
  );
};

export default MyPost;
