import { useParams } from "react-router-dom";

const MyCourseDetail = () => {
  const { courseId } = useParams();

  return <div>MyCourseDetail {courseId}</div>;
};

export default MyCourseDetail;
