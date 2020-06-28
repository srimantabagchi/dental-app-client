import React from "react";
import "./TopNavBar.scss";

const TopNavBar = (props) => (
  <div className={"top-nav-bar-wrapper" + " " + props.className}>
    <div className={"top-nav-bar"}>
      <div className="top-title-wapper">
        <h1 id={props.id}>{props.title}</h1>
      </div>
      {props.children}
    </div>
  </div>
);

export default TopNavBar;
