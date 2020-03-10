import React from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
const Sample = props => {
  // console.log(props.datas.id);
  return (
    <div className="row">
      <div className="col s6 image-box center">
        <img className="responsive-img circle" src={props.datas.cover_pic} />
      </div>
      <Fade>
        <div className="col s6 details">
          <p>{props.datas.details}</p>
          <div className="read center">
            <Link to={"/" + props.datas.id}>
              <p>Read More</p>
            </Link>
          </div>
        </div>
      </Fade>
    </div>
  );
};
export default Sample;
