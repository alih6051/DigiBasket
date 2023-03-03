import { Box } from "@chakra-ui/react";
import React from "react";
import Header from "./Header";

const Orders = () => {
  return (
    <Box color={"white"} minH={"100vh"} mt={{ base: "60px", md: "0px" }} p={3}>
      <Header title="Orders" />
    </Box>
  );
};

export default Orders;
