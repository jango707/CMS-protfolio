import { render } from "@testing-library/react";
import React from "react";
import About from "./about";

describe("About page", () => {
  it("should render", () => {
    const view = render(<About />);
    expect(view).toBeTruthy();
  });
});
