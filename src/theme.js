import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const styles = {
  global: {
    body: {
      backgroundColor: "rgb(255, 255, 255)",
      color: "rgb(68, 68, 68)",
    },
  },
};

const colors = {
  primary: "#84c225",
  adminPrimary: "#181e2a",
  adminSecondary: "#0c0e1f",
};

export const theme = extendTheme({
  config,
  styles,
  colors,
});
