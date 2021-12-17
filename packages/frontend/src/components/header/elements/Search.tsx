import styled from "@emotion/styled";
import { COLORS } from "../../../constants";

export const SearchWrapper = styled.div`
  position: relative;
  padding: 10px 20px;

  & .svg-inline--fa {
    position: absolute;
    z-index: 22;
    top: 17px;
    height: 1.2rem;
    left: 32px;
    color: gray;
  }
`;

export const SearchInput = styled.input`
  padding: 8px 10px 8px 40px;
  background-color: ${COLORS.bgHeavy};
  border: 1px solid ${COLORS.bgHeavy};
  outline: none;
  position: relative;
  font-family: "Roboto", sans-serif;
  width: 300px;
  border-radius: 4px;
`;
