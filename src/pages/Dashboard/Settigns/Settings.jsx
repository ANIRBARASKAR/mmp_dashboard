import React from "react";

const Settings = () => {
  return <>
      <div className="container-fluid">
        <div className=" text-right">
        <button className="btn btn-light" style={{color:"purple"}}>Forget password</button>
        </div>
        <h2  className="text-center mt-5" >Change Password</h2>
      <div className="">
  
          <div>
          <label htmlFor="A1">Enter Existing Pasword</label>
           <input type="password" className="input-group form-control" id="A1" placeholder="Enter Existing Password" />
           <i class="bi bi-eye-slash-fill"></i>
          </div>
          <label htmlFor="B1">New Pasword</label>
           <input type="password" className="form-control" id="B1" placeholder="New Password" />
           <i class="bi bi-eye-slash-fill"></i>
          <label htmlFor="A1">Confirm Pasword</label>
           <input type="password" className="form-control" id="A1" placeholder="Re-enter New Password" />
           <i class="bi bi-eye-slash-fill"></i>
       </div>

          <div className="text-center">
          <button className="btn btn-danger btn-lg my-5 rounded-pill text-center bg-danger
          ">Submit</button>
          </div>
      </div>
  </>
};

export default Settings;
