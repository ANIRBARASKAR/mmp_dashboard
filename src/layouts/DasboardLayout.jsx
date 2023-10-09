import React from "react";
import { Outlet } from "react-router-dom";
import DashBoardHeader from "../components/DashboardHeader/DashBoardHeader";
import DashBoardNavbar from "../components/DashBoardNavbar/DashBoardNavbar";
import "./Dasboard.css";

const DasboardLayout = () => {
  return (
    <div className="dashboard">
      {/* header part start */}
      <DashBoardHeader></DashBoardHeader>
      {/* header part end */}
      {/* 
      <!-- ========== Left Sidebar Start ========== --> */}
      <DashBoardNavbar></DashBoardNavbar>
      {/* <!-- Left Sidebar End --> */}
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            {/* <!-- start page title --> */}
            <Outlet></Outlet>
          </div>
        </div>
      </div>
      {/* <!-- Overlay--> */}
      <div className="menu-overlay"></div>
    </div>
  );
};

export default DasboardLayout;
