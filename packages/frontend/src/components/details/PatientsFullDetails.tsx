import React from "react";
import { DetailsTop } from "./components";
import { FullDetailsEl } from "./elements";

interface PatientsFullDetailsProps {}

export const PatientsFullDetails: React.FC<PatientsFullDetailsProps> = () => {
  return (
    <FullDetailsEl>
      <DetailsTop />
    </FullDetailsEl>
  );
};
