import React from "react";
import { DetailsMiddleEl, DiagnosticWrapper } from "../elements";

interface DetailsMiddleProps {}

export const DetailsMiddle: React.FC<DetailsMiddleProps> = () => {
  return <DetailsMiddleEl>
    <DiagnosticWrapper></DiagnosticWrapper>
  </DetailsMiddleEl>;
};
