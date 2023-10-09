import React from "react";

const GoogleLogIn = () => {
  return (
    <p className="link-underline-dark text-left ">
      Or okay with?
      <button
        type="submit"
        className=" btn--base ml-3 "
        style={{
          marginTop: 65,
        }}
      >
        Google <i className="fas fa-arrow-right ml-2"></i>
      </button>
    </p>
  );
};

export default GoogleLogIn;
