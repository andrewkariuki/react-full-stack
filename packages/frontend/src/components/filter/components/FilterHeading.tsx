import React from "react";
import { FilterHeadingEl, FilterHeadingText } from "../elements";

interface FilterHeadingProps {}

export const FilterHeading: React.FC<FilterHeadingProps> = () => {
  return (
    <FilterHeadingEl>
      <FilterHeadingText>Patients</FilterHeadingText>
    </FilterHeadingEl>
  );
};
