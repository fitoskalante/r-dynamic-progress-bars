import React from "react";
import "./Button.scss";




export default function Button({ onClick, value }) {
  return (

    <button data-testid="button" onClick={() => onClick()} >
      {value}
    </button>

  );
}
