import styled from "@emotion/styled";
import { COLORS } from "../../../constants";

export const FilterButtonEl = styled.button`
  outline: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${COLORS.white};
  color: ${COLORS.textSecondary};
  border: 1px solid ${COLORS.mainBgColor};
  padding: 8px 6px;
  font-size: 0.8rem;
  border-radius: 4px;
  appearance: none;
  font-family: "Poppins", sans-serif;
  margin-right: 5px;

  & .bubble {
    border-radius: 50%;
    width: 6px;
    height: 6px;
    margin-right: 8px;
  }

  & .svg-inline--fa {
    height: 1.2em;
    width: auto;
    margin-left: 8px;
  }
`;

export const FilterButtonLabel = styled.span`
  font-weight: 400;
`;
