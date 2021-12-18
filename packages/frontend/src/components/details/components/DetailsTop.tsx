import React from "react";
import { DetailsTopEl } from "../elements";
import { DoctorActionArea } from "./DoctorActionArea";
import { PatientInfo } from "./PatientInfo";

interface DetailsTopProps {}

export const DetailsTop: React.FC<DetailsTopProps> = () => {
  return (
    <DetailsTopEl>
      <PatientInfo />
      <DoctorActionArea />
    </DetailsTopEl>
  );
};
