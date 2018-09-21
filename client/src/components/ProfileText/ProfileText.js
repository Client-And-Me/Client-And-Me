import React from "react";
import "./ProfileText.css";

const ProfileText = props => (
  
    <div className="col s6 m2">
      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title">Card Title</span>
          <p>{props.children}</p>
        </div>
      </div>
    </div>
 
);

export default ProfileText;