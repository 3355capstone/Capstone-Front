import { useNavigate } from "react-router-dom";

const Post = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div>Post</div>
      <button
        onClick={() => {
          navigate("/post-complete");
        }}
      >
        작성 완료 알림
      </button>
    </div>
  );
};

export default Post;
