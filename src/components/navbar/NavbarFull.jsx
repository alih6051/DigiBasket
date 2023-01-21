import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import NavbarIcon from "./NavbarIcon";
import NavbarSearchBar from "./NabarSearchBar";
import NavbarAccount from "./NavbarAccount";

const NavbarFull = () => {
  return (
    <Flex py={3} justifyContent="space-between" alignItems="center">
      <NavbarIcon />
      <NavbarSearchBar />
      <NavbarAccount />
    </Flex>
  );
};

export default NavbarFull;
