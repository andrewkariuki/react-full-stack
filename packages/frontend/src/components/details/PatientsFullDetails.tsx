import React from "react";
import { DetailsChart, DetailsMiddle, DetailsTop } from "./components";
import { FullDetailsEl } from "./elements";

interface PatientsFullDetailsProps {}

export const PatientsFullDetails: React.FC<PatientsFullDetailsProps> = () => {
  return (
    <FullDetailsEl>
      <DetailsTop />
      <DetailsMiddle />
      <DetailsChart />
      <DetailsChart />
    </FullDetailsEl>
  );
};
