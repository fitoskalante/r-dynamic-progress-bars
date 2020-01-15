import React from "react";

export default function Range(props) {
  return (
    <>
      {props.progress <= 100 ? (
        <div
          className="range"
          style={{ width: `${props.progress}%`, maxWidth: "100%" }}
        ></div>
      ) : (
        <div
          className="range-out"
          style={{ width: `${props.progress}%`, maxWidth: "100%" }}
        ></div>
      )}
    </>
  );
}
