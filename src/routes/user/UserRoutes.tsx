import CommonLayout from "@/common/layout/CommonLayout";
import { RouteObject } from "react-router-dom";
import { lazy } from "react";
import withSuspense from "@/common/utils/withSuspense";

// Components
const SampleUserMain = lazy(() => import("@pages/sample/SampleUserMain.tsx"));
const SampleUserMainComponent = withSuspense(SampleUserMain);

// Login
const LoginMain = lazy(() => import("pages/login/LoginMain.tsx"));
const LoginMainComponent = withSuspense(LoginMain);
const SignUpMain = lazy(() => import("pages/login/SignUpMain.tsx"));
const SignUpMainComponent = withSuspense(SignUpMain);

// Calendar
const CalendarMain = lazy(() => import("pages/calendar/CalendarMain"));
const CalendarMainComponent = withSuspense(CalendarMain);

const UserRoutes: RouteObject[] = [
  {
    path: "/",
    element: <CommonLayout />,
    handle: { title: "Home" },
    children: [
      {
        path: "test",
        element: <SampleUserMainComponent />,
        handle: { title: "Home1", showSnb: true },
      },
      {
        path: "test2",
        element: <SampleUserMainComponent />,
        handle: { title: "Home2", showSnb: true },
      },
      {
        path: "test3",
        element: <SampleUserMainComponent />,
        handle: { title: "Home3", showSnb: true },
      },
      {
        path: "login",
        element: <LoginMainComponent />,
        handle: { title: "login", showSnb: true },
      },
      {
        path: "signup",
        element: <SignUpMainComponent />,
        handle: { title: "signup", showSnb: true },
      },
      {
        path: "calendar",
        element: <CalendarMainComponent />,
        handle: { title: "calendar", showSnb: true },
      },
    ],
  },
];
export default UserRoutes;
