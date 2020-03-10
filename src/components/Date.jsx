import React from "react";
const Date = props => {
  return (
    <div className="date-time">
      <h4>Date: {props.date}</h4>

      <h4>Starts at: {props.time}</h4>
    </div>
  );
};

export default Date;
