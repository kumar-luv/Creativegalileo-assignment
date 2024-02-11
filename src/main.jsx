import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router-dom";
import Body from "./components/Body.jsx";
import Shimmer from "./components/Shimmer.jsx";
import { RouterProvider } from "react-router-dom";
import App from "./App.jsx";
export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Shimmer />,
      },
      {
        path: "/customer",
        element: <Body />,
      },
    ],
    errorElement: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div>
      <RouterProvider router={appRouter} />
    </div>
  </React.StrictMode>
);
