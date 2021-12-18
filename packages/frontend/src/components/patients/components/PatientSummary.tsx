import React from "react";
import {
  PatientsInfoEL,
  PatientStatusBubbleEl,
  PatientSummaryCardEl,
  PatientsVitalsSummaryEl,
} from "../elements";
import { PatientDetails } from "./PatientDetails";
import { PatientsSummaryActions } from "./PatientsSummaryActions";
import { PatientVitals } from "./PatientVitals";

interface PatientSummaryCardProps {
  heartColor?: string;
  weightColor?: string;
  pulseColor?: string;
  dropColor?: string;
  bubbleColor?: string;
  isActive?: boolean;
}

export const PatientSummaryCard: React.FC<PatientSummaryCardProps> = ({
  bubbleColor,
  isActive,
  ...rest
}) => {
  return (
    <PatientSummaryCardEl className={`${isActive ? "active" : null}`}>
      <PatientsInfoEL>
        <PatientStatusBubbleEl>
          <span style={{ backgroundColor: `${bubbleColor || null}` }} className="bubble"></span>
        </PatientStatusBubbleEl>
        <PatientDetails />
      </PatientsInfoEL>
      <PatientsVitalsSummaryEl>
        <PatientVitals {...rest} />
        <PatientsSummaryActions />
      </PatientsVitalsSummaryEl>
    </PatientSummaryCardEl>
  );
};
