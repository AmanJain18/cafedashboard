import React from "react";
import { useList } from "@pankod/refine-core";
import {
  PieChart,
  ItemReferrals,
  TotalRevenue,
  ItemCard,
  TopAgent,
} from "components";
import { Box, Typography, Stack } from "@pankod/refine-mui";

const home = () => {
  return (
    <Box>
      <Typography fontSize={25} sx={{ mb: 2 }} fontWeight={700} color="#11142d">
        Dashboard
      </Typography>
      <Box mt="20px" display="flex" flexWrap="wrap" gap={4}>
        <PieChart 
            title="Properties for Sale"
            value={100}
            series={[75, 25]}
            colors={["#475be8", "#e4e8ef"]}
        />
        <PieChart 
            title="Properties for rent"
            value={565}
            series={[20, 40]}
            colors={["#47557d", "#e4e"]}
        />
        <PieChart 
            title="Properties Sold"
            value={547}
            series={[70, 40]}
            colors={["#475be8", "#e4e8ef"]}
        />
        <PieChart 
            title="Total Customers"
            value={2541}
            series={[75, 25]}
            colors={["#475be8", "#e4e8ef"]}
        />
      </Box>
      <Stack direction={{ xs: "column", md: "row" }} gap={4} mt="25px">
        <TotalRevenue />
        <ItemReferrals />
      </Stack>
    </Box>
  );
};

export default home;
