import { useNavigate } from "react-router-dom";

const BulletinBoard = () => {
  const navigate = useNavigate();
  const postId = 1;

  return (
    <div>
      <div>BulletinBoard</div>
      <button
        onClick={() => {
          navigate(`/post-detail/${postId}`);
        }}
      >
        게시글 상세 (특정 게시글 클릭)
      </button>
    </div>
  );
};

export default BulletinBoard;
