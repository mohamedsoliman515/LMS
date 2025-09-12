import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import { CoursesPage, ChaptersPage, AssistantsPage } from "../pages";
// pages

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    // errorElement: <Error type="error" />,
    children: [
      {
        index: true,
        element: <CoursesPage />,
      },
      {
        path: "/chaptersPage",
        element: <ChaptersPage />,
      },
      {
        path: "/assistantsPage",
        element: <AssistantsPage />,
      },
    ],
  },
]);
const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
