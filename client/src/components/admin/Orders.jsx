import { Box, Stack } from "@chakra-ui/react";
import React from "react";
import DashBoardRow from "./DashBoardRow";
import Header from "./Header";
const Orders = () => {
  return (
    <Box>
      <Header title="ORDER RECEIVED" sub="Total order received till now" />
      <Stack mt={10}>
        {" "}
        <DashBoardRow />
      </Stack>
    </Box>
  );
};
export default Orders;
