import { createBrowserRouter } from "react-router-dom";

import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegiserPage from "../pages/RegiserPage";
import UsersPage from "../pages/UsersPage";
import NotFoundPage from "../pages/NotFoundPage";
import Layout from "../layouts/Layout";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegiserPage />,
      },
      {
        path: "/users",
        element: <UsersPage />,
      },
      {
        path: "/student/dashboard",
        element: <h1>Student Dashboard</h1>,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);
