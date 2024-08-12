import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Alert from "./Alert";

describe("Alert Component", () => {
  const message = "This book already exists in your library!";

  it("should render the message prop correctly", () => {
    render(<Alert message={message} onClose={() => {}} />);
    expect(screen.getByText(message)).toBeInTheDocument();
  });

  it("should call onClose function when close button is clicked", () => {
    const handleClose = jest.fn(); // Mock function
    render(<Alert message={message} onClose={handleClose} />);
    const closeButton = screen.getByRole("button", { name: /×/ });
    fireEvent.click(closeButton);
    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
