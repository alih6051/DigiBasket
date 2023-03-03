import { Box, Text } from "@chakra-ui/react";
import React from "react";

const Discounts = () => {
  return (
    <Box color={"white"} minH={"100vh"} mt={{ base: "60px", md: "0px" }} p={3}>
      <Text textTransform="uppercase" fontSize="xl" fontWeight="500">
        Discounts
      </Text>
      <Text fontSize="xs" color="blue.300">
        List of Coupons
      </Text>
    </Box>
  );
};

export default Discounts;
