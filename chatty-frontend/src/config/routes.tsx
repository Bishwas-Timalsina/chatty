import { Navigate, type RouteObject } from "react-router-dom";
import { APP, AUTH, LOGIN, MESSAGE, REGISTR } from "./path";
import AuthLayout from "../layout/AuthLayout";
import AuthPage from "../pages/Auth/AuthPage";
import ProtectedRoute from "../layout/ProtectedRoute";
import App from "../pages/App/App";
import NotFound from "../pages/NotFound/NotFound";

export const AuthRoutes: RouteObject = {
  path: AUTH,
  element: <AuthLayout />,
  children: [
    {
      path: LOGIN,
      element: <AuthPage />,
    },
    {
      path: REGISTR,
      element: <AuthPage />,
    },
  ],
};

export const AppRoutes: RouteObject = {
  path: APP,
  element: <ProtectedRoute />,
  children: [
    {
      path: MESSAGE,
      element: <App />,
    },
  ],
};

export const NotFoundRoutes: RouteObject = {
  path: "*",
  element: <NotFound />,
};

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to={`/${AUTH}/${LOGIN}`} />,
  },
  {
    path: "/auth",
    element: <Navigate to={`/${AUTH}/${LOGIN}`} />,
  },
  {
    path: "/app",
    element: <Navigate to={`/${APP}/${MESSAGE}`} />,
  },
  AuthRoutes,
  AppRoutes,
  NotFoundRoutes,
];
export default routes;
