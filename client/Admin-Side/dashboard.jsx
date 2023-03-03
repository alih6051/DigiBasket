import { Box, Text } from "@chakra-ui/react";

import React from "react";

const Dashboard = () => {
  return (
    <Box color={"white"} minH={"100vh"} mt={{ base: "60px", md: "0px" }} p={3}>
      <Text textTransform="uppercase" fontSize="xl" fontWeight="500">
        Dashboard
      </Text>
      <Text fontSize="xs" color="blue.300">
        Welcome to your dashboard
      </Text>
    </Box>
  );
};

export default Dashboard;
