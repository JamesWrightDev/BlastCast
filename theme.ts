import "styled-components/native";
import { DefaultTheme } from "styled-components/native";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      main: string;
      lightGrey: string;
      white: string;
    };
    spacing: {
      tiny: string;
      small: string;
      medium: string;
      large: string;
    };
  }
}

export const theme: DefaultTheme = {
  colors: {
    main: '#003366',
    lightGrey: "rgb(162, 162, 162)",
    white: "white",
  },
  spacing: {
    large: '100px',
    medium: '50px',
    small: '15px',
    tiny: '10px',
  },
};