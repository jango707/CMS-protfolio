import { render } from "@testing-library/react";
import React from "react";
import Home from "./home";

describe("Home page", () => {
  it("should render", () => {
    const view = render(<Home />);
    expect(view).toBeTruthy();
  });
});
