import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import { CoursesPage, ChaptersPage, AssistantsPage } from "../pages";
import SignIn from "../pages/SignIn/SignIn";
import { useUrl } from "../components/context/UrlContext";

const AppRouter = () => {
  const { token } = useUrl();

  const router = createBrowserRouter([
    {
      path: "/",
      element: token ? <Navigate to="/mainLayout" replace /> : <SignIn />,
    },
    // delete children pages
    {
      path: "/mainLayout",
      element: token ? <MainLayout /> : <Navigate to="/" replace />,
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

  return <RouterProvider router={router} />;
};

export default AppRouter;
