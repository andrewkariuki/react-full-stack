import React from "react";
import { UserPicture } from "../../user";
import { PatientsSummaryDetails, PatientsSummaryInfo } from "../elements";

interface PatientDetailsProps {}

export const PatientDetails: React.FC<PatientDetailsProps> = () => {
  return (
    <PatientsSummaryDetails>
      <UserPicture />
      <PatientsSummaryInfo>
        <span>Assigned on Nov 23, 19</span>
        <span className="patient-name">Erica Rodriguez</span>
        <span>Cycle starts 31st</span>
      </PatientsSummaryInfo>
    </PatientsSummaryDetails>
  );
};
