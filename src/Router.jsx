import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import NotFound from "./components/NotFound";
import BulletinBoard from "./pages/Community/BulletinBoard";
import Community from "./pages/Community/Community";
import Post from "./pages/Community/Post";
import CourseCheck from "./pages/CourseManagement/CourseCheck";
import CourseManagement from "./pages/CourseManagement/CourseManagement";
import CourseRecommendation from "./pages/CourseRecommendation/CourseRecommendation";
import CourseShopping from "./pages/CourseRecommendation/CourseShopping";
import TagRecommendation from "./pages/CourseRecommendation/TagRecommendation";
import SignIn from "./pages/Login/SignIn";
import SignUp from "./pages/Login/SignUp";
import MainPage from "./pages/MainPage/MainPage";
import MyCourse from "./pages/MyPage/MyCourse";
import MyCourseDetail from "./pages/MyPage/MyCourseDetail";
import MyPage from "./pages/MyPage/MyPage";
import MyPost from "./pages/MyPage/MyPost";

const router = createBrowserRouter([
  {
    path: "",
    element: <Root />,
    children: [
      {
        path: "",
        element: <MainPage />,
        children: [],
        errorElement: <NotFound />,
      },
      {
        path: "sign-in",
        element: <SignIn />,
        children: [],
        errorElement: <NotFound />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
        children: [],
        errorElement: <NotFound />,
      },
      //
      {
        path: "community",
        element: <Community />,
        children: [],
        errorElement: <NotFound />,
      },
      {
        path: "bulletin-board",
        element: <BulletinBoard />,
        children: [],
        errorElement: <NotFound />,
      },
      {
        path: "post",
        element: <Post />,
        children: [],
        errorElement: <NotFound />,
      },
      //
      {
        path: "course-management",
        element: <CourseManagement />,
        children: [],
        errorElement: <NotFound />,
      },
      {
        path: "course-check",
        element: <CourseCheck />,
        children: [],
        errorElement: <NotFound />,
      },
      //
      {
        path: "course-recommendation",
        element: <CourseRecommendation />,
        children: [],
        errorElement: <NotFound />,
      },
      {
        path: "shopping",
        element: <CourseShopping />,
        children: [],
        errorElement: <NotFound />,
      },
      {
        path: "tag-recommendation",
        element: <TagRecommendation />,
        children: [],
        errorElement: <NotFound />,
      },
      //
      {
        path: "my-page",
        element: <MyPage />,
        children: [],
        errorElement: <NotFound />,
      },
      {
        path: "posts",
        element: <MyPost />,
        children: [],
        errorElement: <NotFound />,
      },
      {
        path: "my-course",
        element: <MyCourse />,
        children: [
          {
            path: "course-detail",
            element: <MyCourseDetail />,
            children: [],
            errorElement: <NotFound />,
          },
        ],
        errorElement: <NotFound />,
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;
