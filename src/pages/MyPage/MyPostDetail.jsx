import { useParams } from "react-router-dom";

const MyPostDetail = () => {
  const { postId } = useParams();

  return <div>MyPostDetail</div>;
};

export default MyPostDetail;
