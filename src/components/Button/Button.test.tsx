import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/theme";

import Button from "./Button";

describe("Given a Button component", () => {
  describe("When it receives the text 'Sign up' and is rendered", () => {
    test("Then it should show a button with the text 'Sign up'", () => {
      const expectedText = "Sign up";

      render(
        <ThemeProvider theme={theme}>
          <Button text={expectedText} type="submit" disabled={false} />
        </ThemeProvider>
      );

      const button = screen.getByRole("button", { name: expectedText });

      expect(button).toBeInTheDocument();
    });
  });
});
