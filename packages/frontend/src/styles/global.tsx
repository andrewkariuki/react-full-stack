import React from "react";
import { Global, css } from "@emotion/react";
import { COLORS } from "../constants";

export const globalStyles = (
  <Global
    styles={css`
      @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800&family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,500;1,700&display=swap");

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
        font-family: "Poppins", sans-serif;
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 1.5;
        color: ${COLORS.black};
        text-align: left;
        background-color: ${COLORS.mainBgColor};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      .row {
        margin: 0;
      }
      .container,
      .container-fluid {
        padding: 0;
      }

      a {
        text-decoration: none;
        color: inherit;
      }
    `}
  />
);
