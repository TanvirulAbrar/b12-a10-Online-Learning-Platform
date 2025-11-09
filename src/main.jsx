import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "./assets/Root.jsx";
import Login from "./assets/Login.jsx";
import Signin from "./assets/Signin.jsx";
import AuthProvider from "./context/AuthProvider.jsx";
import ForgetPassWord from "./component/ForgetPassWord.jsx";

import ErrorPage from "./component/ErrorPage.jsx";
import Home from "./component/Home.jsx";
import Course from "./component/Course.jsx";
import CourseDetails from "./component/CourseDetails.jsx";
import Dashboard from "./component/Dashboard.jsx";
import PrivateRout from "./component/PrivateRout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        Component: Home,
      },
      { path: "/login", Component: Login },
      { path: "/register", Component: Signin },
      { path: "/forgetpassword", Component: ForgetPassWord },
      { path: "/courses", Component: Course },
      { path: "/courses/:id", Component: CourseDetails },
      {
        path: "/dashboard",
        element: (
          <PrivateRout>
            <Dashboard></Dashboard>
          </PrivateRout>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
