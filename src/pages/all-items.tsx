import React from "react";
import { Add } from "@mui/icons-material";
import { useList } from "@pankod/refine-core";
import { Box, Typography, Stack } from "@pankod/refine-mui";
import { useNavigate } from "@pankod/refine-react-router-v6";

import { ItemCard, CustomButton } from "components";
const AllItems = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography fontSize={25} fontWeight={700} color="#11142d">
          All Items
        </Typography>
        <CustomButton
        title="Add Item"
        icon={<Add />}
        handleClick={() => navigate("/menus/create")}
        backgroundColor="#475be8"
        color="#fcfcfc"
        />
      </Stack>
    </Box>
  );
};

export default AllItems;
