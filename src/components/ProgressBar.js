import React from "react";
import Range from "./Range";

export default function ProgressBar(props) {
  console.log("props000", props.progress);
  return (
    <div className="progress-bar">
      <Range progress={props.progress} />
    </div>
  );
}
