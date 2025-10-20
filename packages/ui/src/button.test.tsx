import * as React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "./button";

describe("Button", () => {
  it("should render the button with the correct text", () => {
    const buttonText = "Click Me";
    render(<Button text={buttonText} />);

    const button = screen.getByText(buttonText);
    expect(button).toBeInTheDocument();
  });

  it("should call the onClick handler when clicked", () => {
    const onClickMock = jest.fn();
    const buttonText = "Press Me";
    render(<Button text={buttonText} onClick={onClickMock} />);

    const button = screen.getByText(buttonText);
    fireEvent.click(button);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
