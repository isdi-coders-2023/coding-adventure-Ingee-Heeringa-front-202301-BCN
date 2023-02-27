import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Given a Button component", () => {
  describe("When it receives the text 'Sign up' and is rendered", () => {
    test("Then it should show a button with the text 'Sign up'", () => {
      const expectedText = "Sign up";

      render(<Button text={expectedText} />);

      const button = screen.getByRole("button", { name: expectedText });

      expect(button).toBeInTheDocument();
    });
  });
});
