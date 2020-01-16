import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Button />, div);
});

let count;

const incrementCount = increment => {
  count += increment;
};

test("+1 Button works", () => {
  count = 0;
  const { container } = render(
    <Button increment={1} onClickFunction={incrementCount} />
  );
  const button = container.firstChild;
  expect(button.textContent).toBe("+1");
  expect(count).toBe(0);
  fireEvent.click(button);
  expect(count).toBe(1);
});
