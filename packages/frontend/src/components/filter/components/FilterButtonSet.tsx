import React from "react";
import { FilterButton } from ".";
import { FilterButtonSetEl } from "../elements";
import { faFilter, faFileExport } from "@fortawesome/free-solid-svg-icons";
import { COLORS } from "../../../constants";

interface FilterButtonSetProps {}

export const FilterButtonSet: React.FC<FilterButtonSetProps> = () => {
  return (
    <FilterButtonSetEl>
      <FilterButton withBubble bubbleColor={COLORS.green} label="In Range" />
      <FilterButton withBubble bubbleColor={COLORS.danger} label="Out of Range" />
      <FilterButton withIcon label="Filter" icon={faFilter} />
      <FilterButton withIcon label="Export" icon={faFileExport} />
    </FilterButtonSetEl>
  );
};
