import { useParams } from "react-router-dom";

const PostEdit = () => {
  const { postId } = useParams();

  return <div>PostEdit {postId}</div>;
};

export default PostEdit;
