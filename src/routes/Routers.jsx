import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import Home from "../pages/Home/Home";

import Pricing from "../pages/Pricing/Pricings";
import Contact from "../pages/Contact/Contact";
import MusicDistribution from "../pages/MusicDistribution/MusicDistribution";
import CallerTune from "../pages/CallerTune/CallerTune";
import MusicVideoWorldWide from "../pages/MusicVideoWorldwide/MusicVideoWorldWide";
import Register from "../pages/Register/Register";
import LogIn from "../pages/LogIn/LogIn";
import OTP from "../pages/OTP/OTP";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";
import ResetPassrod from "../pages/ResetPassword/ResetPassrod";
import DasboardLayout from "../layouts/DasboardLayout";
import TreandAndAnlaytics from "../pages/Dashboard/TreandAndAnlaytics/TrendAndAnalaytics";
import Reports from "../pages/Dashboard/Reports/Reports";
import Settigns from "../pages/Dashboard/Settigns/Settings";
import Notifications from "../pages/Dashboard/Notifications/Notifications";
import Meassages from "../pages/Dashboard/Messages/Messages";
import Dashboardhome from "../pages/Dashboard/DashboardHome/Dashboardhome";
import Logout from "../pages/Dashboard/Logout/Logout";
import Upload from "../pages/Dashboard/Reports/Upload";
import Content_Status from "../pages/Dashboard/ContentStatus/Content_Status";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "pricing",
        element: <Pricing></Pricing>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
      {
        path: "music-distribution",
        element: <MusicDistribution></MusicDistribution>,
      },
      {
        path: "calltertune-distribution",
        element: <CallerTune></CallerTune>,
      },
      {
        path: "musicvideo-distribution",
        element: <MusicVideoWorldWide></MusicVideoWorldWide>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "logIn",
        element: <LogIn></LogIn>,
      },
      {
        path: "otp",
        element: <OTP></OTP>,
      },
      {
        path: "forgot-password",
        element: <ForgotPassword></ForgotPassword>,
      },
      {
        path: "reset-password",
        element: <ResetPassrod></ResetPassrod>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <DasboardLayout></DasboardLayout>,
    children: [
      {
        path: "/dashboard",
        element: <Dashboardhome></Dashboardhome>,
      },
      {
        path: "trend-and-anlytics",
        element: <TreandAndAnlaytics></TreandAndAnlaytics>,
      },
      {
        path: "reports",
        element: <Reports></Reports>,
      },
      {
        path: "settings",
        element: <Settigns></Settigns>,
      },
      {
        path: "notification",
        element: <Notifications></Notifications>,
      },
      {
        path: "messages",
        element: <Meassages></Meassages>,
      },
      {
        path: "upload",
        element: <Upload></Upload>,
      },
      {
        path: "ContentStatus",
        element: <Content_Status></Content_Status>,
      },
      {
        path: "logOut",
        element: <Logout></Logout>,
      },
     
    ],
  },

]);

export default router;
