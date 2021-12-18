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

interface PatientSummaryCardProps {}

export const PatientSummaryCard: React.FC<PatientSummaryCardProps> = () => {
  return (
    <PatientSummaryCardEl>
      <PatientsInfoEL>
        <PatientStatusBubbleEl>
          <span className="bubble"></span>
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
