import styled from "@emotion/styled";
import { COLORS } from "../../../constants";

export const HeaderIcon = styled.a`
  position: relative;

  display: flex;
  align-items: center;
  padding: 0 15px;
  height: 55px;
  color: ${COLORS.textSecondary};

  border-left: 1px solid #d8d8d8;

  & .notification {
    position: absolute;
    width: 6px;
    height: 6px;
    right: 15px;
    z-index: 22;
    top: 17px;
    border-radius: 50%;
    background-color: ${COLORS.danger};
  }

  & .svg-inline--fa {
    position: relative;
    height: 1.4rem;
    width: auto;
  }
`;
