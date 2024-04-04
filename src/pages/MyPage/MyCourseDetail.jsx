import { useParams } from "react-router-dom";

const MyCourseDetail = () => {
  const { courseId } = useParams();

  return <div>MyCourseDetail</div>;
};

export default MyCourseDetail;
