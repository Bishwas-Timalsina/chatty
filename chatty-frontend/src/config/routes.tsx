import { Navigate, type RouteObject } from "react-router-dom";
import { ABOUT, APP, AUTH, CONTACT, INTRO, LOGIN, MESSAGE, REGISTR } from "./path";
import AuthLayout from "../layout/AuthLayout";
import AuthPage from "../pages/Auth/AuthPage";
import ProtectedRoute from "../layout/ProtectedRoute";
import App from "../pages/App/App";
import NotFound from "../pages/NotFound/NotFound";
import Landing from "../pages/Landing/Landing";
import AboutUs from "../pages/Landing/AboutUs";
import ContactUs from "../pages/Landing/ContactUs/ContactUs";

export const AuthRoutes: RouteObject = {
  path: INTRO,
  element: <AuthLayout />,
  children: [
    {
      path: "",
      element: <Landing />,
    },
    {
      path: AUTH,
      element: <AuthPage />,
    },
    {
      path: ABOUT,
      element: <AboutUs />,
    },
    {
      path: CONTACT,
      element: <ContactUs />,
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
    element: <Navigate to={`/${INTRO}`} />,
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
