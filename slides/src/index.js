import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  HashRouter as Router,
  createHashRouter,
} from "react-router-dom";
import ErrorPage from "./error-page";
import Slide from "./components/slides.js";

const router = createHashRouter([
  {
    path: "/",
    element: <Navigate replace to="/0" />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/:ind",
    element: <Slide />,
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
