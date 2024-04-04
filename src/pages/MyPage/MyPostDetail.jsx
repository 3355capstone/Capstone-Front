import { useParams } from "react-router-dom";

const MyPostDetail = () => {
  const { postId } = useParams();

  return <div>MyPostDetail {postId}</div>;
};

export default MyPostDetail;
