import React from "react";
import {
  DiagnosticWrapper,
  DiagnosticHeader,
  DiagnosticUnits,
  DiagnosticFooter,
} from "../elements";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface DiagnosticProps {
  icon?: any;
  chevronIcon?: any;
  unit?: string;
  unitColor?: string;
  date?: string;
  hours?: string;
}

export const Diagnostic: React.FC<DiagnosticProps> = ({
  icon,
  chevronIcon,
  unit,
  unitColor,
  date,
  hours,
}) => {
  return (
    <DiagnosticWrapper>
      <DiagnosticHeader>
        <span className="heading">
          <span>
            <FontAwesomeIcon icon={icon} />
          </span>
          <span className="title">Blood Pressure</span>
        </span>
        <span className="sub-heading">Assign 7 days Ago</span>
      </DiagnosticHeader>
      <DiagnosticUnits>
        <span className="diagnostic-unit">
          {unit ? (
            <>
              <span className="unit" style={{ color: `${unitColor || null}` }}>
                {unit}
              </span>
              <span className="unit-icon" style={{ color: `${unitColor || null}` }}>
                <FontAwesomeIcon icon={chevronIcon} />
              </span>
            </>
          ) : (
            <span className="waiting">Waiting</span>
          )}
        </span>
      </DiagnosticUnits>

      <DiagnosticFooter>
        {date ? <span>{date}</span> : null}
        {hours ? <span>{hours}</span> : null}
      </DiagnosticFooter>
    </DiagnosticWrapper>
  );
};
