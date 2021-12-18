import React from "react";
import { FilterButtonEl, FilterButtonLabel } from "../elements";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface FilterButtonProps {
  icon?: any;
  withIcon?: boolean;
  withBubble?: boolean;
  label?: string;
  bubbleColor?: string;
}

export const FilterButton: React.FC<FilterButtonProps> = ({ ...props }) => {
  return (
    <FilterButtonEl>
      {props.withBubble ? (
        <span className="bubble" style={{ backgroundColor: `${props.bubbleColor}` }}></span>
      ) : null}
      <FilterButtonLabel>{props.label}</FilterButtonLabel>
      {props.withIcon ? <FontAwesomeIcon icon={props.icon} /> : null}
    </FilterButtonEl>
  );
};
