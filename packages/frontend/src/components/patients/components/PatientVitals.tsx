import { faWeight, faHeart, faTint, faWaveSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  PatientsVitals,
  PatientsVitalsIcon,
  PatientsVitalsIconSet,
  PatientsVitalsLabel,
} from "../elements";

interface PatientVitalsProps {
  heartColor?: string;
  weightColor?: string;
  pulseColor?: string;
  dropColor?: string;
}

export const PatientVitals: React.FC<PatientVitalsProps> = ({ ...props }) => {
  return (
    <PatientsVitals>
      <PatientsVitalsLabel>
        <span>Vital Status</span>
      </PatientsVitalsLabel>
      <PatientsVitalsIconSet>
        <PatientsVitalsIcon style={{ color: `${props.weightColor || null}` }}>
          <FontAwesomeIcon icon={faWeight} />
        </PatientsVitalsIcon>
        <PatientsVitalsIcon style={{ color: `${props.dropColor || null}` }}>
          <FontAwesomeIcon icon={faTint} />
        </PatientsVitalsIcon>
        <PatientsVitalsIcon style={{ color: `${props.pulseColor || null}` }}>
          <FontAwesomeIcon icon={faWaveSquare} />
        </PatientsVitalsIcon>
        <PatientsVitalsIcon style={{ color: `${props.heartColor || null}` }}>
          <FontAwesomeIcon icon={faHeart} />
        </PatientsVitalsIcon>
      </PatientsVitalsIconSet>
    </PatientsVitals>
  );
};
