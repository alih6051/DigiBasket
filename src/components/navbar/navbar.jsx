import { Box, Container, Flex } from "@chakra-ui/react";
import React from "react";
import NavbarFull from "./NavbarFull";

const Navbar = () => {
  return (
    <Box
      bg="rgb(255, 255, 255)"
      position="sticky"
      top="0"
      zIndex="100"
      boxShadow="rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"
    >
      <Container maxW="6xl">
        <NavbarFull />
      </Container>
    </Box>
  );
};

export default Navbar;
