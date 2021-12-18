import React from "react";
import { DetailsChart, DetailsMiddle, DetailsTop } from "./components";
import { FullDetailsEl } from "./elements";

interface PatientsFullDetailsProps {}

export const PatientsFullDetails: React.FC<PatientsFullDetailsProps> = () => {
  return (
    <FullDetailsEl>
      <DetailsTop />
      <DetailsMiddle />
      <DetailsChart label="History Blood Pressure" />
      <DetailsChart label="History Heart Beat" />
    </FullDetailsEl>
  );
};
