import { Box, Button, Flex, Input } from "@chakra-ui/react";
import React from "react";
import { BiSearch } from "react-icons/bi";

const NabarSearchBar = () => {
  return (
    <Flex minW="50%">
      <Input placeholder="Search for Products..." size="sm" rounded="0" />
      <Button size="sm" rounded="0" bg="primary" _hover={{ bg: "#588219" }}>
        <BiSearch color="white" fontSize="24px" />
      </Button>
    </Flex>
  );
};

export default NabarSearchBar;
