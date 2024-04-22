import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Services from "./pages/Services.jsx";
import Jobs from "./pages/Jobs.jsx";
const router = createBrowserRouter([
  {
    path: "/alahyan/",
    element: <App />,
    children: [
      {
        path: "/alahyan/",
        element: <App />,
      },
      {
        path: "/alahyan/about",
        element: <About />,
      },
      {
        path: "/alahyan/contact",
        element: <Contact />,
      },
      {
        path: "/alahyan/services",
        element: <Services />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
