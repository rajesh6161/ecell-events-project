import React from "react";

const Venue = props => {
  return (
    <div className="venue center">
      <h4>Venue</h4>
      <h4>{props.venue}</h4>
    </div>
  );
};
export default Venue;
