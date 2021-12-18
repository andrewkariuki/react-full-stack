import { faCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { PatientsVitalsActionCenter, PatientsVitalsIcon } from "../elements";

interface PatientsSummaryActionsProps {}

export const PatientsSummaryActions: React.FC<PatientsSummaryActionsProps> = () => {
  return (
    <PatientsVitalsActionCenter>
      <PatientsVitalsIcon>
        <FontAwesomeIcon icon={faCog} />
      </PatientsVitalsIcon>
    </PatientsVitalsActionCenter>
  );
};
