import { useNavigate } from "react-router-dom";

const BulletinBoard = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div>BulletinBoard</div>
      <button
        onClick={() => {
          navigate("/post-detail");
        }}
      >
        게시글 상세 (특정 게시글 클릭)
      </button>
    </div>
  );
};

export default BulletinBoard;
