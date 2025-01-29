import { colors, fontFamily, fontSize, padding } from "./roots";

export const theme = {
  colors: { ...colors },
  fontSize: { ...fontSize },
  fontFamily: { ...fontFamily },
  padding:{...padding}
};

export type Theme = typeof theme;
