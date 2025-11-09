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

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      { path: "/login", Component: Login },
      { path: "/register", Component: Signin },
      { path: "/forgetpassword", Component: ForgetPassWord },
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
