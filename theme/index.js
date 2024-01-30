import { css } from "styled-components";

const lightTheme = {
  primary: "#242a2a",
  secondary: "#cacaca",
  border: "#e8ecf3",
  gray: "#F0F2F5",
  bg: "#F0F2F5",
  lightGray: "#e7e7e7",
  hr: "#b6b6b6",
  link: "#3e3eff",
  active: "#3bd9cc",
};

const darkTheme = {
  primary: "#fff",
  secondary: "#cacaca",
  border: "#3434348a",
  gray: "#3434348a",
  lightGray: "#2f2f2f",
  bg: "#3d3d3d",
  hr: "#474747",
  link: "#b5b5ff",
  active: "#ff2c54",
};

// const darktheme = {
//   primary: "#fff",
//   secondary: '#cacaca',
//   border: '#343434',
//   gray: '#2f2f2f',
//   lightGray: '#ff2c54',
//   active: '#b5b5ff',
//   bg: '#474747',
//   link: 'b6b6b6',
//   hr: '#e7e7e7'
// }

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};

export const themeStyles = {
  light: css`
    background-color: ${lightTheme.primary};
    color: ${lightTheme.secondary} !important;
  `,
  dark: css`
    background-color: ${darkTheme.primary};
    color: ${darkTheme.secondary} !important;
  `,
};
