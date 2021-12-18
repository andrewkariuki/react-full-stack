import styled from "@emotion/styled";
import { COLORS } from "../../../constants";

export const DetailsTopEl = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 20px;
  border-bottom: 1px solid ${COLORS.mainBgColor};

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export const PatientInfoEL = styled.div`
  display: flex;
  align-items: center;
`;

export const PatientInfoPictureEL = styled.div`
  & .bubble {
    height: 10px;
    width: 10px;
    left: 31px;
    top: 28px;
  }
`;

export const PatientInfoProfileEL = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;

  & .hours {
    font-size: 0.7rem;
    margin-right: 5px;
    color: ${COLORS.textPrimary};
  }
  & .logs {
    color: ${COLORS.primaryColor};
    font-size: 0.85rem;
    font-weight: 500;
  }

  & .name {
    font-size: 0.9rem;
    font-weight: 500;
    color: ${COLORS.primaryColor};
  }
  & .age {
    color: ${COLORS.textPrimary};
    font-size: 0.75rem;
  }
`;

export const DoctorActionAreaEL = styled.div`
  @media (max-width: 500px) {
    margin-top: 20px;
    text-align: center;
  }
`;

export const DoctorActionAreaButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  margin-bottom: 10px;
`;

export const DoctorActionAreaButton = styled.a`
  padding: 3px;
  border-radius: 4px;
  color: ${COLORS.textSecondary};
  margin-right: 8px;
  border: 1px solid ${COLORS.textSecondary};
  display: flex;
  align-items: center;
  font-size: 0.75rem;

  &.round {
    padding: 7px;
    border-radius: 50%;
    background-color: ${COLORS.textSecondary};
    color: ${COLORS.primaryColor};
  }
  &.assign .svg-inline--fa {
    margin-left: 3px;
  }
`;

export const DoctorActionAreaFooter = styled.div`
  text-align: right;
  font-size: 0.7rem;
  color: ${COLORS.textPrimary};
  @media (max-width: 500px) {
    text-align: center;
  }
`;
