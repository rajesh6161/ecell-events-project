import React from "react";
import logo from "./logo.png";
const Icon = props => {
  return (
    <div>
      <div className="icon-1">
        <img className="responsive-img" src={props.icon} />
      </div>
      <div className="icon-2">
        <img className="responsive-img" src={logo} />
      </div>
    </div>
  );
};
export default Icon;
