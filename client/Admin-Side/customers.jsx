import { Box } from "@chakra-ui/react";
import React from "react";
import Header from "./Header";

const Customers = () => {
  return (
    <Box color={"white"} minH={"100vh"} mt={{ base: "60px", md: "0px" }} p={3}>
      <Header title="Customers" />
    </Box>
  );
};

export default Customers;
