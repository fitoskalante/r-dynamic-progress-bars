import React from "react";

export default function Range(props) {
  console.log("props", props.progress);
  return <div className="range" style={{ width: `${props.progress}%` }}></div>;
}
