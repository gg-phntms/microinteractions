import { styled } from "@phantomstudios/css-components";

import css from "./styles.module.scss";

export const ModalRoot = styled("dialog", {
  css: css.ModalRoot,
});

export const Close = styled("button", {
  css: css.Close,
});

export const Content = styled("div", {
  css: css.Content,
});
