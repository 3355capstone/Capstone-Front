import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import NotFound from "./components/NotFound";
import Community from "./pages/Community/Community";
import Post from "./pages/Community/Post";
import PostComplete from "./pages/Community/PostComplete";
import PostEdit from "./pages/Community/PostEdit";
import PostDetail from "./pages/Community/PostDetail";
import CourseRecommendation from "./pages/CourseRecommendation/CourseRecommendation";
import CourseShopping from "./pages/CourseRecommendation/CourseAddFinish";
import RegionTagSelect from "./pages/CourseRecommendation/RegionTagSelect";
import SignIn from "./pages/Login/SignIn";
import SignUp from "./pages/Login/SignUp";
import MainPage from "./pages/MainPage/MainPage";
import MyCourse from "./pages/MyPage/MyCourse";
import MyCourseDetail from "./pages/MyPage/MyCourseDetail";
import MyPage from "./pages/MyPage/MyPage";
import MyPost from "./pages/MyPage/MyPost";
import MyPostDetail from "./pages/MyPage/MyPostDetail";
import MyScrap from "./pages/MyPage/MyScrap";
import BulletinBoard from "./pages/Community/BulletinBorad";
import CourseAddFinish from "./pages/CourseRecommendation/CourseAddFinish";

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
        path: "post-detail",
        element: <PostDetail />,
        children: [],
        errorElement: <NotFound />,
      },
      {
        path: "post",
        element: <Post />,
        children: [],
        errorElement: <NotFound />,
      },
      {
        path: "post-complete",
        element: <PostComplete />,
        children: [],
        errorElement: <NotFound />,
      },
      {
        path: "post-detail/:postId",
        element: <PostDetail />,
        children: [],
        errorElement: <NotFound />,
      },
      {
        path: "post-edit/:postId",
        element: <PostEdit />,
        children: [],
        errorElement: <NotFound />,
      },
      {
        path: "bulletin-board",
        element: <BulletinBoard />,
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
        path: "region-tag-select",
        element: <RegionTagSelect />,
        children: [],
        errorElement: <NotFound />,
      },
      {
        path: "course-add-finish",
        element: <CourseAddFinish />,
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
        path: "my-post",
        element: <MyPost />,
        children: [],
        errorElement: <NotFound />,
      },
      {
        path: "my-post-detail/:postId",
        element: <MyPostDetail />,
        children: [],
        errorElement: <NotFound />,
      },
      {
        path: "my-course",
        element: <MyCourse />,
        children: [],
        errorElement: <NotFound />,
      },
      {
        path: "my-course-detail/:courseId",
        element: <MyCourseDetail />,
        children: [],
        errorElement: <NotFound />,
      },
      {
        path: "my-scrap",
        element: <MyScrap />,
        children: [],
        errorElement: <NotFound />,
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;
