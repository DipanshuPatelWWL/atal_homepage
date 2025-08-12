import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./page/Home/Home";
import Dashboard from "./page/dashboard/Dashboard";
import Page from "./page/Page";
import Layout from "./layout/Layout";
import Cartpage from "./page/Cart/Cartpage";
import FAQ from "./page/FAQ/FAQ";
import PrivacyPolicy from "./page/Privacy-Policy/PrivacyPolicy";
import DisclaimerPage from './page/DisclaimerPage/DisclaimerPage';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/faq",
        element: <FAQ />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/cart",
        element: <Cartpage />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/disclaimer",
        element: <DisclaimerPage />
      },
      {
        path: "*",
        element: <Page />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
