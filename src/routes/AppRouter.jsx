import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import { CoursesPage, ChaptersPage, AssistantsPage } from "../pages";
import SignIn from "../pages/SignIn/SignIn";
// pages

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />,
  },
  {
    path: "/mainLayout",
    element: <MainLayout />,
    // errorElement: <Error type="error" />,
    children: [
      {
        index: true,
        element: <CoursesPage />,
      },
      {
        path: "chaptersPage",
        element: <ChaptersPage />,
      },
      {
        path: "assistantsPage",
        element: <AssistantsPage />,
      },
    ],
  },
]);
const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
