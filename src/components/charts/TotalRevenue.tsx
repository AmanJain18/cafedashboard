import React from "react";
import ReactApexChart from "react-apexcharts";
import { Box, Typography, Stack } from "@pankod/refine-mui";
import { ArrowCircleUpRounded } from "@mui/icons-material";
import { TotalRevenueOptions, TotalRevenueSeries } from "./chart.config";

const TotalRevenue = () => {
  return (
    <Box
      id="chart"
      p={4}
      bgcolor="#fcfcfc"
      borderRadius="15px"
      flex={1}
      display="flex"
      flexDirection="column"
    >
      <Typography fontSize={18} fontWeight={600} color="#11142d">
        Total Revenue
      </Typography>
      <Stack my="20px" direction="row" gap={4} flexWrap="wrap">
        <Typography fontSize={28} fontWeight={700} color="#11142d">
          ₹56,000
        </Typography>
        <Stack direction="row" alignItems="center" gap={1}>
          <ArrowCircleUpRounded sx={{ fontSize: 25, color: "#00c853" }} />
          <Stack>
            <Typography fontSize={15} fontWeight={500} color="#00c853">
              2%
            </Typography>
            <Typography fontSize={14} color="#808191">
              Since last month
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <ReactApexChart 
      options={TotalRevenueOptions} 
      series={TotalRevenueSeries} 
      type="bar" 
      height={310}/>
    </Box>
  );
};

export default TotalRevenue;
