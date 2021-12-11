import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Button from "./index";

describe("Button component", () => {
  it("Should be rendering", () => {
    const { container } = render(<Button />);
    const button = container.querySelector("Button");
    expect(button).toBeInTheDocument();
  });

  it("Should match the snapshot", () => {
    const { asFragment } = render(<Button>Button</Button>);
    expect(asFragment()).toMatchSnapshot();
  });
});
