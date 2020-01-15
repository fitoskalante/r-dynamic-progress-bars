import React from "react";
import Range from "./Range";

export default function ProgressBar(props) {
  return (
    <div className="progress-bar">
      <h5 className="bar-label">{props.ammount}</h5>
      <Range progress={props.progress} />
    </div>
  );
}
