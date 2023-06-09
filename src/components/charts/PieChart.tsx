import React from "react";
import ReactApexChart from "react-apexcharts";
import { Box, Typography, Stack } from "@pankod/refine-mui";
import { PieChartProps } from "interfaces/home";

const PieChart = ({ title, value, series, colors }: PieChartProps) => {
  return (
    <Box 
      id="chart"
      flex={1}
      display="flex"
      flexDirection="row"
      bgcolor="#fcfcfc"
      justifyContent="space-between"
      alignItems="center"
      pl={3.5}
      py={2}
      gap={2}
      minHeight="110px  "
      width="fit-content"
      borderRadius="15px"
    >
      <Stack
        direction="column"
        justifyContent="space-between"
        alignItems="start"
      >
        <Typography fontSize={14} fontWeight={500} color="#808191">
          {title}
        </Typography>
        <Typography fontSize={24} fontWeight={700} color="#11142d" mt={1}>
          {value}
        </Typography>
      </Stack>
      <ReactApexChart
        options={{
          chart: { type: "donut" },
          colors,
          legend: { show: false },
          dataLabels: { enabled: false },
        }}
        series={series}
        type="donut"
        width="120px"
      />
    </Box>
  );
};

export default PieChart;
