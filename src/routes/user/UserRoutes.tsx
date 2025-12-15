import CommonLayout from "@/common/layout/CommonLayout";
import { RouteObject } from "react-router-dom";
import { lazy } from "react";
import withSuspense from "@/common/utils/withSuspense";

// Components
const SampleUserMain = lazy(() => import("@pages/sample/SampleUserMain.tsx"));
const SampleUserMainComponent = withSuspense(SampleUserMain);
const UserRoutes: RouteObject[] = [
  {
    path: "/",
    element: <CommonLayout />,
    handle: { title: "Home" },
    children: [
      {
        path: "test",
        element: <SampleUserMainComponent />,
        handle: { title: "Home1" },
      },
      {
        path: "test2",
        element: <SampleUserMainComponent />,
        handle: { title: "Home2" },
      },
      {
        path: "test3",
        element: <SampleUserMainComponent />,
        handle: { title: "Home3" },
      },
    ],
  },
];
export default UserRoutes;
