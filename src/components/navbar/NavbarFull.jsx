import { Box, Flex, HStack } from "@chakra-ui/react";
import React from "react";
import NavbarIcon from "./NavbarIcon";
import NavbarSearchBar from "./NabarSearchBar";
import NavbarAccount from "./NavbarAccount";

const NavbarFull = () => {
  return (
    <Box>
      <Flex py={3} justifyContent="space-between" alignItems="center">
        <NavbarIcon />
        <Box minW="50%" display={{ base: "none", md: "block" }}>
          <NavbarSearchBar />
        </Box>
        <NavbarAccount />
      </Flex>
      <Box paddingBottom={2} display={{ base: "block", md: "none" }}>
        <NavbarSearchBar />
      </Box>
    </Box>
  );
};

export default NavbarFull;
