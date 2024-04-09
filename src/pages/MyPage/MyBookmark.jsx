import { useNavigate } from "react-router-dom";

const MyBookmark = () => {
  const navigate = useNavigate();
  const postId = 1;

  return (
    <div>
      MyBookmark
      <button
        onClick={() => {
          navigate(`/post-detail/:${postId}`);
        }}
      >
        스크랩한 게시글 목록
      </button>
    </div>
  );
};

export default MyBookmark;
