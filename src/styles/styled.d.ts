import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      accent: string;
    };
    fonts: {
      primary: string;
      secondary: string;
    };
  }
}
