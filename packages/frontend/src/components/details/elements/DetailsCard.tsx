import styled from "@emotion/styled";
import { COLORS } from "../../../constants";

export const DetailsChartEl = styled.div``;

export const DetailsChartTopEl = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0px;

  & .see-logs {
    color: ${COLORS.primaryColor};
    font-weight: bold;
  }

  & .chart-label {
    color: #d8d8d8;
    font-weight: 500;
  }
`;
export const DetailsChartChartEl = styled.div``;
