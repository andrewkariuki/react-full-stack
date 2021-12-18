import styled from "@emotion/styled";
import { COLORS } from "../../../constants";

export const DetailsMiddleEl = styled.div`
  // display: flex;
  // align-items: center;
  // justify-content: space-between;
  padding: 10px 0px;
  border-bottom: 1px solid ${COLORS.mainBgColor};
`;

export const DiagnosticWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;

  border-right: 1px solid ${COLORS.mainBgColor};
  &:last-child {
    border-right: 0;
  }
`;

export const DiagnosticHeader = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  & .heading {
    color: ${COLORS.textSecondary};
  }

  & .sub-heading {
    color: #d8d8d8;
    font-size: 0.75rem;
  }

  & .title {
    font-size: 1rem;
    margin-left: 5px;
  }

  & .svg-inline--fa {
    height: 1rem;
    width: auto;
  }
`;

export const DiagnosticUnits = styled.div`
  width: 100%;
  & .diagnostic-unit {
    display: flex;
    align-items: center;
    width: 100%;
  }
  & .unit-icon {
    margin-left: 8px;
  }
  & .unit {
    font-size: 1.5rem;
    font-weight: 500;
  }

  & .waiting {
    font-size: 0.8rem;
    font-weight: 500;
    color: #d8d8d8;

    padding: 10px 0px;
  }
`;

export const DiagnosticFooter = styled.div`
  display: flex;
  flex-direction: column;
  color: #d8d8d8;
  font-size: 0.75rem;
  width: 100%;
`;
