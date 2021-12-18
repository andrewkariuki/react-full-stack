import { faFileMedical, faHeart, faTint, faWaveSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  PatientsVitals,
  PatientsVitalsIcon,
  PatientsVitalsIconSet,
  PatientsVitalsLabel,
} from "../elements";

interface PatientVitalsProps {}

export const PatientVitals: React.FC<PatientVitalsProps> = () => {
  return (
    <PatientsVitals>
      <PatientsVitalsLabel>
        <span>Vital Status</span>
      </PatientsVitalsLabel>
      <PatientsVitalsIconSet>
        <PatientsVitalsIcon>
          <FontAwesomeIcon icon={faFileMedical} />
        </PatientsVitalsIcon>
        <PatientsVitalsIcon>
          <FontAwesomeIcon icon={faTint} />
        </PatientsVitalsIcon>
        <PatientsVitalsIcon>
          <FontAwesomeIcon icon={faWaveSquare} />
        </PatientsVitalsIcon>
        <PatientsVitalsIcon>
          <FontAwesomeIcon icon={faHeart} />
        </PatientsVitalsIcon>
      </PatientsVitalsIconSet>
    </PatientsVitals>
  );
};
