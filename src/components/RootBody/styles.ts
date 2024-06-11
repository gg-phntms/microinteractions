import { styled } from "@phantomstudios/css-components";

import { FONT_VARIABLES } from "@/theme/fonts";

import css from "./styles.module.css";

export const RootBodyElement = styled("body", {
  css: [css.RootBodyElement, FONT_VARIABLES],
});
