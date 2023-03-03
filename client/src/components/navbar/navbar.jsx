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
      boxShadow="0 2px 3px 0 rgb(0 0 0 / 10%)"
    >
      <Container maxW="6xl">
        <NavbarFull />
      </Container>
    </Box>
  );
};

export default Navbar;
