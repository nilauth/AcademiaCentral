import { createBrowserRouter } from "react-router-dom";

import StudentDashboard from "@/components/student/StudentDashboard";
import GuestLayout from "@/layouts/GuestLayout";
import StudentLayout from "@/layouts/StudentLayout";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import NotFoundPage from "../pages/NotFoundPage";
import RegiserPage from "../pages/RegiserPage";
import UsersPage from "../pages/UsersPage";

export const STUDENT_DASHBOARD_ROUTE = "/student/dashboard";
export const LOGIN_ROUTE = "/login";

export const router = createBrowserRouter([
  {
    element: <GuestLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: LOGIN_ROUTE,
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegiserPage />,
      },

      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
  {
    element: <StudentLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/users",
        element: <UsersPage />,
      },
      {
        path: STUDENT_DASHBOARD_ROUTE,
        element: <StudentDashboard />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);
