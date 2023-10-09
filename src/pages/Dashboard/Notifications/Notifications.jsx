import React from "react";
import LineCharts from "../../../components/LineCharts/LineCharts";
import PieCharts from "../../../components/PIECharts/PieCharts";

const Notifications = () => {
  return <>
  <div className="container  my-5">
      {/* data searching by mntly yearly */}
      <div className="d-flex justify-content-center ">
        <div className="form-check form-check-inline">
          <input
            className="form-check-input p-3"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value="option1"
          />
          <label className="form-check-label" for="inlineRadio1">
            Monthly
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input p-3"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio2"
            value="option2"
          />
          <label className="form-check-label" for="inlineRadio2">
            Yearly
          </label>
        </div>
        <div className="form-check form-check-inline">
          <label className="form-check-label mr-3" for="inlineRadio2">
            Yearly
          </label>
          <select
            className="form-select form-control"
            aria-label="Default select example"
          >
            <option></option>
          </select>
        </div>
      </div>
      {/* 
      data searching by  platfrom  */}
      <div className="d-flex align-items-center py-3">
        <h3 className=" mr-2">Platfrom:</h3>
        <form className="row">
          <div className="col-auto">
            <input type="text" className="form-control" placeholder="start" />
          </div>
          <div className="col-auto">
            <input type="text" className="form-control" placeholder="start" />
          </div>

          <div className="col-auto">
            <button
              type="button"
              className="text-white px-3 py-2 rounded mt-1 text-center"
              style={{ background: "#2B6CB0" }}
            >
              Search
            </button>
          </div>
        </form>
      </div>
      {/* data reset */}
      <div className="d-flex justify-content-center ">
        <form className="row">
          <div className="col-auto">
            <input type="text" className="form-control" placeholder="End" />
          </div>

          <div className="col-auto">
            <button
              type="button"
              className="text-white px-3 py-2 rounded mt-1 text-center"
              style={{ background: "#b91c1c" }}
            >
              Reset
            </button>
          </div>
        </form>
      </div>

      <div className="container mt-5">
        <div className="row g-5">
          <div className="col-md-6">
            <div className="border border-4 p-3 bg-white rounded">
              <PieCharts />
            </div>
          </div>
          <div className="col-md-6">
            <div className="border border-4 p-3 bg-white rounded">
              <LineCharts></LineCharts>
            </div>
          </div>
        </div>
      </div>
      <p className=" bg-primary text-white p-2 text-center my-5">
        This Charts.....................................................
      </p>
      {/* color codes  */}
      <div className="container mt-5">
        <div className="row g-5">
          <div className="col-md-6">
            <div className="d-flex align-items-center">
              <span>Color Codes: </span>
              <div
                className=" p-2 text-white mx-2"
                style={{ background: "#689f38" }}
              >
                25%
              </div>
              <div
                className="p-2 text-white mx-2"
                style={{ background: "#93c5fd" }}
              >
                25%
              </div>
              <div
                className="  p-2 text-white mx-2"
                style={{ background: "#1e88e5" }}
              >
                25%
              </div>
              <div
                className="  p-2 text-white"
                style={{ background: "#1565c0" }}
              >
                25%
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="d-flex align-items-center">
              <div
                className=" p-2 text-white "
                style={{ background: "#9333ea" }}
              >
                25%
              </div>
              <div
                className="p-2 text-white mx-2"
                style={{ background: "#be185d" }}
              >
                25%
              </div>
              <div
                className="  p-2 text-white mx-2"
                style={{ background: "#1b3bbb" }}
              >
                25%
              </div>
              <div
                className="  p-2 text-white"
                style={{ background: "#1565c0" }}
              >
                25%
              </div>
              <span className="text-danger mx-3">1/3 data waited </span>
            </div>
          </div>
        </div>
      </div>
      </div>

  </>
};

export default Notifications;
