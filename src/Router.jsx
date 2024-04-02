import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import NotFound from "./components/NotFound";
import BulletinBoard from "./pages/Community/BulletinBoard";
import Community from "./pages/Community/Community";
import Post from "./pages/Community/Post";
import CourseRecommendation from "./pages/CourseRecommendation/CourseRecommendation";
import CourseShopping from "./pages/CourseRecommendation/CourseShopping";
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
import MyScrapDetail from "./pages/MyPage/MyScrapDetail";

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
        path: "course-recommendation",
        element: <CourseRecommendation />,
        children: [],
        errorElement: <NotFound />,
      },
      {
        path: "course-shopping",
        element: <CourseShopping />,
        children: [],
        errorElement: <NotFound />,
      },
      {
        path: "region-tag-select",
        element: <RegionTagSelect />,
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
        children: [
          {
            path: "my-post-detail",
            element: <MyPostDetail />,
            children: [],
            errorElement: <NotFound />,
          },
        ],
        errorElement: <NotFound />,
      },
      {
        path: "my-course",
        element: <MyCourse />,
        children: [
          {
            path: "my-course-detail",
            element: <MyCourseDetail />,
            children: [],
            errorElement: <NotFound />,
          },
        ],
        errorElement: <NotFound />,
      },
      {
        path: "my-scrap",
        element: <MyScrap />,
        children: [
          {
            path: "my-scrap-detail",
            element: <MyScrapDetail />,
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
