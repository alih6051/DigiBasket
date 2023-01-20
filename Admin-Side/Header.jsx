import { Text } from "@chakra-ui/react";
import React from "react";

const Header = ({ title }) => {
  return (
    <>
      <Text textTransform="uppercase" fontSize="xl" fontWeight="500">
        {title}
      </Text>
      <Text fontSize="xs" color="blue.300">
        List of {title}
      </Text>
    </>
  );
};

export default Header;
