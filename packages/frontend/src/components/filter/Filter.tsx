import React from "react";
import { FilterButtonSet, FilterHeading } from "./components";
import { FilterEl } from "./elements";

interface FilterProps {}

export const Filter: React.FC<FilterProps> = () => {
  return (
    <FilterEl>
      <FilterHeading />
      <FilterButtonSet />
    </FilterEl>
  );
};
