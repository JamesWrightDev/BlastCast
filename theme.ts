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
    main: '#0b132b',
    lightGrey: "#e76f51",
    white: "white",
  },
  spacing: {
    large: '100px',
    medium: '50px',
    small: '20px',
    tiny: '10px',
  },
};

// $color1: #0b132bff;
// $color2: #1c2541ff;
// $color3: #3a506bff;
// $color4: #ef767aff;
// $color5: #49beaaff