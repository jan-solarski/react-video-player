import { extendTheme, theme as chakraTheme } from "@chakra-ui/react";

const colors = {
  white: "#fff",
  black: "#000",
};

export const theme = extendTheme({
  ...chakraTheme,
  colors,
});
