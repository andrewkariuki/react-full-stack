import React from "react";
import { Chart } from "../../chart";
import { DetailsChartChartEl, DetailsChartEl, DetailsChartTopEl } from "../elements/DetailsCard";

interface DetailsChartProps {}

export const DetailsChart: React.FC<DetailsChartProps> = () => {
  return (
    <DetailsChartEl>
      <DetailsChartTopEl></DetailsChartTopEl>
      <DetailsChartChartEl>
        <Chart />
      </DetailsChartChartEl>
    </DetailsChartEl>
  );
};
