import React from "react";
import "./Collapsible.css";

const Collapsible = props => (
    <ul className="collapsible">
      <li className="active">
        <div className="collapsible-header"><i className="material-icons">filter_drama</i>{props.provider1}</div>
        <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
      </li>
      <li>
        <div className="collapsible-header"><i className="material-icons">place</i>{props.provider2}</div>
        <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
      </li>
      <li>
        <div className="collapsible-header"><i className="material-icons">whatshot</i>{props.provider3}</div>
        <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
      </li>
    </ul>
);

export default Collapsible;