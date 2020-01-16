import React from "react";
import Range from "./Range/Range";
import "./ProgressBar.scss";

export default function ProgressBar(props) {
  return (
    <>
      {props.idx.toString() === props.selectedBar ? (
        <div className="progress-bar-selected progress-bar">
          <h4 className="bar-label">{props.ammount}</h4>
          <Range progress={props.progress} />
        </div>
      ) : (
        <div className="progress-bar">
          <h4 className="bar-label">{props.ammount}</h4>
          <Range progress={props.progress} />
        </div>
      )}
    </>
  );
}
