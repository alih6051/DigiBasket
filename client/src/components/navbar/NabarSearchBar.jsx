import { Box, Button, Flex, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useRouter } from "next/router";

const NabarSearchBar = () => {
  // ROUTING TO SEARCH PAGE
  const router = useRouter();

  // STATE FOR SEACRH BOX
  const [value, setValue] = useState("");

  // HANLDE SEARCH
  const handleSearch = () => {
    if (value.length > 0) {
      router.push({
        pathname: "/search",
        query: { q: value },
      });
      setValue("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && value.length > 0) {
      router.push({
        pathname: "/search",
        query: { q: value },
      });
      setValue("");
    }
  };

  return (
    <Flex minW="50%">
      <Input
        placeholder="Search for Products..."
        size="sm"
        rounded="0"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <Button
        size="sm"
        rounded="0"
        bg="primary"
        _hover={{ bg: "#588219" }}
        onClick={handleSearch}
      >
        <BiSearch color="white" fontSize="24px" />
      </Button>
    </Flex>
  );
};

export default NabarSearchBar;
