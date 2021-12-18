import React from "react";
import {
  DoctorActionAreaButton,
  DoctorActionAreaButtons,
  DoctorActionAreaEL,
  DoctorActionAreaFooter,
} from "../elements";
import { faCog, faVideo, faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
interface DoctorActionAreaProps {}

export const DoctorActionArea: React.FC<DoctorActionAreaProps> = () => {
  return (
    <DoctorActionAreaEL>
      <DoctorActionAreaButtons>
        <DoctorActionAreaButton className="round">
          <FontAwesomeIcon icon={faComment} />
        </DoctorActionAreaButton>
        <DoctorActionAreaButton className="round">
          <FontAwesomeIcon icon={faVideo} />
        </DoctorActionAreaButton>
        <DoctorActionAreaButton>
          <span>View Logs</span>
        </DoctorActionAreaButton>
        <DoctorActionAreaButton className="assign">
          <span>Assign</span>
          <FontAwesomeIcon icon={faCog} />
        </DoctorActionAreaButton>
      </DoctorActionAreaButtons>
      <DoctorActionAreaFooter>
        <span>Assigned on Nov 23, 19</span>
      </DoctorActionAreaFooter>
    </DoctorActionAreaEL>
  );
};
