import React from "react";
import logo from "../assets/blog.svg";

function Logo({ width = "30px" }) {
  return (
    <div>
      <img src={logo} alt="Logo" width={width} />
    </div>
  );
}

export default Logo;
