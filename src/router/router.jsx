import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import VisaServicePage from "../Pages/VisaServicePage";
import MyApplicationPage from "../Pages/MyApplicationPage";
import RootLaout from "../Layouts/RootLaout";
import ServiceDetails from "../Pages/ServiceDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLaout,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: "/services",
        Component: VisaServicePage
      },
      {
        path: "/my-application",
        Component: MyApplicationPage
      },
      {
        path: "/service/:id",
        Component: ServiceDetails
      }
    ]
  },

]);

