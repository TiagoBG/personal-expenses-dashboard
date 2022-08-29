import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

function Chart({ dataPoints }) {
    const dataPonitValues = dataPoints.map(dataPoint => dataPoint.value);

    const totalMaximum = Math.max(...dataPonitValues);

  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}

export default Chart;
