import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import { CoursesPage } from "../pages";
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
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
