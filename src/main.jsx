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
import MyEnrolledCourse from "./component/MyEnrolledCourse.jsx";
import AddCourse from "./component/AddCourse.jsx";
import MyAddedCourse from "./component/MyAddedCourse.jsx";
import UpdateCourse from "./component/UpdateCourse.jsx";
import Loading from "./component/Loading.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("http://localhost:3000/courses"),
        hydrateFallbackElement: <Loading></Loading>,
      },
      { path: "/login", Component: Login },
      { path: "/register", Component: Signin },
      { path: "/forgetpassword", Component: ForgetPassWord },
      {
        path: "/courses",
        Component: Course,
        loader: () => fetch("http://localhost:3000/courses"),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/courses/:id",
        Component: CourseDetails,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/courses/${params.id}`),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRout>
            <Dashboard></Dashboard>
          </PrivateRout>
        ),
        loader: () => fetch(`http://localhost:3000/courses`),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/myEnrolledCourse",
        element: (
          <PrivateRout>
            <MyEnrolledCourse></MyEnrolledCourse>
          </PrivateRout>
        ),
      },

      {
        path: "/addCourse",
        element: (
          <PrivateRout>
            <AddCourse></AddCourse>
          </PrivateRout>
        ),
      },
      {},
      {
        path: "/updateCourse",
        element: (
          <PrivateRout>
            <UpdateCourse></UpdateCourse>
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
