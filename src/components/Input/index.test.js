import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Input from "./index";

describe("Input component", () => {
  it("Should be rendering", () => {
    const { container } = render(<Input />);
    const input = container.querySelector("Input");
    expect(input).toBeInTheDocument();
  });

  it("Should match the snapshot", () => {
    const { asFragment } = render(<Input />);
    expect(asFragment()).toMatchSnapshot();
  });
});
