import styled from "@emotion/styled";
import { COLORS } from "../../../constants";

export const FullDetailsEl = styled.section`
  width: 50%;
  padding: 20px 15px;

  background-color: ${COLORS.white};
  @media (max-width: 992px) {
    width: 100%;
    margin-top: 20px;
  }
`;
