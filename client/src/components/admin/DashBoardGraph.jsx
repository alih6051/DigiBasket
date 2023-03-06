import { Box } from "@chakra-ui/react";
import Chart from "react-apexcharts";
import React, { useState } from "react";

const DashBoardGraph = () => {
  const [pieChart, setPieChart] = useState({
    series: [44, 55, 13, 43, 22],
    options: {
      chart: {
        width: 150,
        type: "pie",
      },
      labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
      responsive: [
        {
          breakpoint: 761,
          options: {
            chart: {
              width: 150,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  });
  return (
    <Box>
      <Chart
        options={pieChart.options}
        series={pieChart.series}
        type="pie"
        width="350"
      />
    </Box>
  );
};

export default DashBoardGraph;
