import React from "react";
import { Global, css } from "@emotion/react";
import { COLORS } from "../constants";

export const globalStyles = (
  <Global
    styles={css`
      @import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,500;1,700&display=swap");
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
