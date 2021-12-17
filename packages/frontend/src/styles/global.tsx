import React from "react";
import { Global, css } from "@emotion/react";
import { COLORS } from "../constants";

export const globalStyles = (
  <Global
    styles={css`
      *,
      :after,
      :before {
        box-sizing: border-box;
      }

      html {
        font-family: sans-serif;
        line-height: 1.15;
        -webkit-text-size-adjust: 100%;
        -webkit-tap-highlight-color: transparent;
      }
      body {
        margin: 0;
        font-family: "Roboto", sans-serif;
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 1.5;
        color: ${COLORS.black};
        text-align: left;
        background-color: ${COLORS.mainBgColor};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
    `}
  />
);
