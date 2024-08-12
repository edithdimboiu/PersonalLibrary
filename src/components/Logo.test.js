import React from "react";
import { render, screen } from "@testing-library/react";
import Logo from "./Logo";

describe("Logo Component", () => {
  test("should render 'My Library' heading", () => {
    render(<Logo />);
    const headingElement = screen.getByRole("heading", { name: /my library/i });
    expect(headingElement).toBeInTheDocument();
  });
});
