import React from "react";
import { UserPicture } from "../../user";
import { PatientInfoEL, PatientInfoPictureEL, PatientInfoProfileEL } from "../elements";

interface PatientInfoProps {}

export const PatientInfo: React.FC<PatientInfoProps> = () => {
  return (
    <PatientInfoEL>
      <PatientInfoPictureEL>
        <UserPicture width="40px" withBubble />
      </PatientInfoPictureEL>
      <PatientInfoProfileEL>
        <span className="time-sheet">
          <span className="hours">02:32 hours spent</span>
          <span className="logs">See Time Logs</span>
        </span>
        <span className="name">Erica Rodriguez</span>
        <span className="age">23 years | Female</span>
      </PatientInfoProfileEL>
    </PatientInfoEL>
  );
};
