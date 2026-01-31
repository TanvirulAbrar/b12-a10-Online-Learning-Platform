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
import HomeSkeleton from "./component/skeleton/HomeSkeleton.jsx";
import ThemeProvider from "./context/ThemeProvider.jsx";
import Legal from "./component/legals/Legal.jsx";
import Company from "./component/Company/Company.jsx";
import DashboardOverview from "./component/DashboardOverview.jsx";
// import { addressOfServer } from "./component/address.js";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    hydrateFallbackElement: <HomeSkeleton></HomeSkeleton>,
    children: [
      {
        index: true,
        Component: Home,
        // loader: () => fetch(`${addressOfServer}/courses`),
        hydrateFallbackElement: <Loading></Loading>,
      },
      { path: "/login", Component: Login },
      { path: "/register", Component: Signin },
      { path: "/forgetpassword", Component: ForgetPassWord },
      {
        path: "/courses",
        Component: Course,
        // loader: () => fetch(`${addressOfServer}/courses`),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/courses/:id",
        element: (
          // <PrivateRout>
          <CourseDetails></CourseDetails>
          // </PrivateRout>
        ),
        // loader: ({ params }) =>
        //   fetch(`${addressOfServer}/courses/${params.id}`),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRout>
            <Dashboard></Dashboard>
          </PrivateRout>
        ),
        // loader: () => fetch(`${addressOfServer}/courses`),
        hydrateFallbackElement: <Loading></Loading>,
        children: [
          {
            // index: true,
            path: "overview",
            element: <DashboardOverview></DashboardOverview>,
            hydrateFallbackElement: <Loading></Loading>,
          },
          {
            path: "myAddedCourse",
            element: <MyAddedCourse></MyAddedCourse>,
            hydrateFallbackElement: <Loading></Loading>,
          },
          {
            path: "myEnrolledCourse",
            element: <MyEnrolledCourse></MyEnrolledCourse>,
            hydrateFallbackElement: <Loading></Loading>,
          },
          {
            path: "addCourse",
            element: <AddCourse></AddCourse>,
            hydrateFallbackElement: <Loading></Loading>,
          },
        ],
      },

      {
        path: "/updateCourse/:id",
        element: (
          <PrivateRout>
            <UpdateCourse></UpdateCourse>
          </PrivateRout>
        ),
        // loader: ({ params }) =>
        //   fetch(`${addressOfServer}/courses/${params.id}`),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/legal/:id",
        element: <Legal></Legal>,
        // loader: ({ params }) =>
        //   fetch(`${addressOfServer}/courses/${params.id}`),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/company/:id",
        element: <Company></Company>,
        // loader: ({ params }) =>
        //   fetch(`${addressOfServer}/courses/${params.id}`),
        hydrateFallbackElement: <Loading></Loading>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </AuthProvider>
  </StrictMode>
);
