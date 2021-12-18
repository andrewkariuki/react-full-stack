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
  bubbleColor?: string;
  dropColor?: string;
}

export const PatientSummaryCard: React.FC<PatientSummaryCardProps> = ({ bubbleColor }) => {
  return (
    <PatientSummaryCardEl>
      <PatientsInfoEL>
        <PatientStatusBubbleEl>
          <span style={{ backgroundColor: `${bubbleColor || null}` }} className="bubble"></span>
        </PatientStatusBubbleEl>
        <PatientDetails />
      </PatientsInfoEL>
      <PatientsVitalsSummaryEl>
        <PatientVitals />
        <PatientsSummaryActions />
      </PatientsVitalsSummaryEl>
    </PatientSummaryCardEl>
  );
};
