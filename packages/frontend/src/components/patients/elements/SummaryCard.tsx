import styled from "@emotion/styled";
import { COLORS } from "../../../constants";

export const PatientSummaryCardEl = styled.div`
  padding: 1rem !important;
  margin-bottom: 1rem;
  border-radius: 0.25rem !important;
  border: 1px solid ${COLORS.bgHeavy};
  display: flex;
  justify-content: space-between;
  position: relative;

  @media (max-width: 500px) {
    flex-direction: column;
  }

  &.active {
    background-color: #fff !important;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
    border: 0;
  }

  &:hover {
    background-color: #fff !important;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
    border: 0;
  }
`;

export const PatientsInfoEL = styled.div`
  display: flex;
`;

export const PatientsSummaryDetails = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
`;

export const PatientsSummaryInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;

  & span {
    font-size: 0.7rem;
    color: ${COLORS.textPrimary};
  }
  & .patient-name {
    font-size: 1rem;
    font-weight: 500;
    color: ${COLORS.textSecondary};
  }
`;

export const PatientsVitalsSummaryEl = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 500px) {
    margin-top: 20px;
  }
`;

export const PatientStatusBubbleEl = styled.div`
  display: flex;
  align-items: center;
  & .bubble {
    border-radius: 50%;
    width: 10px;
    height: 10px;
    margin-right: 8px;
    background-color: rgb(255, 89, 89);
  }
`;

export const PatientsVitals = styled.div`
  display: flex;
  // align-items: center;
  flex-direction: column;
`;

export const PatientsVitalsLabel = styled.div`
  margin-bottom: 5px;
  & span {
    font-size: 0.7rem;
    color: ${COLORS.textPrimary};
  }
`;

export const PatientsVitalsIconSet = styled.div`
  display: flex;
  align-items: center;
`;

export const PatientsVitalsIcon = styled.div`
  margin-right: 18px;
  color: ${COLORS.bgHeavy};

  & .svg-inline--fa {
    height: 1.5rem;
    width: auto;
  }
`;

export const PatientsVitalsActionCenter = styled.div`
  border-left: 1px solid #d8d8d8;
  margin:left: 5px;
  padding-left: 10px;
`;
