import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../layout/layout";
import HomePage from "../components/home-page/homePage";
import MyFlightsPage from "../components/my-flights-page/MyFlightsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage/>,
      },
      {
        path: "myFlights",
        element: <MyFlightsPage />,
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default AppRouter;
