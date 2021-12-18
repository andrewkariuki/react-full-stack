import React from "react";
import { PatientsWrapperEl } from "./elements";

interface PatientsListProps {}

export const PatientsList: React.FC<PatientsListProps> = ({ children }) => {
  return <PatientsWrapperEl>{children}</PatientsWrapperEl>;
};
