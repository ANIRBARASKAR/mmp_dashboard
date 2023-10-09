import React from "react";
import "./DashboardNavbar.css";
import { FaPlus, FaSearch } from "react-icons/fa";
const DashBoardHeader = () => {
  return (
    <header id="page-topbar" className=" py-3">
      <div className="navbar-header dashboard_header ">
        <div className="d-flex align-items-left">
          <button
            type="button"
            className="btn btn-sm mr-2 d-lg-none px-3 font-size-16 header-item waves-effect"
            id="vertical-menu-btn"
          >
            <i className="fa fa-fw fa-bars"></i>
          </button>

          <div className="dropdown d-none d-sm-inline-block">
            <h2 className="text-bg-primary" style={{ fontSize: 32 }}>
              Dashboard
            </h2>
          </div>
        </div>

        <div className="d-flex align-items-center">
          <form action="" className=" serach_feild">
            <div className="input-group">
              <span
                className="input-group-text serach_feild_icon "
                style={{
                  background: "white",
                }}
              >
                <FaSearch />
              </span>
              <input
                type="text"
                name="search"
                placeholder="Search Here"
                className="form-control serach_feild"
                style={{
                  background: "white",
                  border: "none",
                  borderRadius: 0,
                }}
              />
            </div>
          </form>
          <button
            type="button"
            className="text-white p-2  ml-3 rounded mt-n3 text-center"
            style={{ background: "#2B6CB0" }}
          >
            <FaPlus className=" mr-1 mt-n1"></FaPlus> Add Product
          </button>
        </div>
      </div>
    </header>
  );
};

export default DashBoardHeader;
