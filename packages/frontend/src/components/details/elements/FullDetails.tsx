import styled from "@emotion/styled";
import { COLORS } from "../../../constants";

export const FullDetailsEl = styled.section`
  padding: 20px 15px;
  margin-right: 10px;
  background-color: ${COLORS.white};
  border-radius: 4px;

  @media (max-width: 992px) {
    width: 100%;
    margin-top: 20px;
  }
`;
