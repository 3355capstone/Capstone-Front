import { useParams } from "react-router-dom";

const PostEdit = () => {
  const { postId } = useParams();

  return <div>PostEdit</div>;
};

export default PostEdit;
