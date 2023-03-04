import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const Header = ({ title, sub }) => {
  return (
    <Box>
      <Text fontSize="2xl" fontWeight="600">
        {title}
      </Text>
      <Text fontSize="xs" color="gray.600">
        {sub}
      </Text>
    </Box>
  );
};

export default Header;
