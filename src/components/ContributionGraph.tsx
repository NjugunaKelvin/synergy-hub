import React from "react";
import { default as Heatmap } from "react-calendar-heatmap";

import "react-calendar-heatmap/dist/styles.css";

const ContributionGraph: React.FC = () => {
  return (
    <div className="p-3 bg-dark rounded">
      <h5>Contribution Overview</h5>
      <Heatmap
        startDate={new Date("2025-03-01")}
        endDate={new Date("2025-03-31")}
        values={[
          { date: "2025-03-01", count: 3 },
          { date: "2025-03-02", count: 5 },
          { date: "2025-03-03", count: 8 },
        ]}
        classForValue={(value) => {
          if (!value) return "color-empty";
          return `color-scale-${value.count}`;
        }}
      />
    </div>
  );
};

export default ContributionGraph;
