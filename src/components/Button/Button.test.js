import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Button />, div);
});
