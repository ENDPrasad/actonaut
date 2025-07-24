import { createBrowserRouter } from "react-router";
import LandingPage from "../pages/LandingPage/LangingPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
  },
]);