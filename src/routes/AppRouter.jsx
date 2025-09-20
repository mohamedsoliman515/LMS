import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import { CoursesPage, ChaptersPage, AssistantsPage } from "../pages";
import SignIn from "../pages/SignIn/SignIn";
import { useAuth } from "../components/context/AuthContext";

const AppRouter = () => {
  const { token } = useAuth();

  const router = createBrowserRouter([
    {
      path: "/",
      element: token ? <Navigate to="/mainLayout" replace /> : <SignIn />,
    },
    // delete children pages
    {
      path: "/mainLayout",
      element: <MainLayout />,
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
