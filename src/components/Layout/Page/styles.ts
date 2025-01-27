import { styled } from "@phantomstudios/css-components";

import css from "./styles.module.scss";

export const PageRoot = styled("main", {
  css: css.PageRoot,
});

export const Column = styled("div", {
  css: css.Column,
  variants: {
    width: {
      narrow: css.Column__narrow,
      extraNarrow: css.Column__extraNarrow,
    },
  },
});

export const Description = styled("div", {
  css: css.Description,
});
