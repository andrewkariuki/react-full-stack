import React from "react";
import { Chart } from "../../chart";
import { DetailsChartChartEl, DetailsChartEl, DetailsChartTopEl } from "../elements/DetailsCard";

interface DetailsChartProps {
  label?: string;
}

export const DetailsChart: React.FC<DetailsChartProps> = ({ label }) => {
  return (
    <DetailsChartEl>
      <DetailsChartTopEl>
        <div className="chart-label">{label}</div>
        <div className="see-logs">See logs</div>
      </DetailsChartTopEl>
      <DetailsChartChartEl>
        <Chart />
      </DetailsChartChartEl>
    </DetailsChartEl>
  );
};
