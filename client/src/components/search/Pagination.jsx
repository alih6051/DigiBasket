import { Box, Button, HStack } from "@chakra-ui/react";
import { GrPrevious, GrNext } from "react-icons/gr";
import React from "react";

const Pagination = ({ current, total, handlePageChange }) => {
  const buttons = [...Array(total)].map((el, i) => (
    <Button
      isDisabled={current === i + 1}
      key={i}
      variant="outline"
      onClick={() => handlePageChange(i + 1)}
    >
      {i + 1}
    </Button>
  ));
  return (
    <HStack>
      <Button
        variant="outline"
        isDisabled={current === 1}
        onClick={() => handlePageChange(current - 1)}
      >
        <GrPrevious />
      </Button>
      {buttons}
      <Button
        variant="outline"
        isDisabled={current === total}
        onClick={() => handlePageChange(current + 1)}
      >
        <GrNext />
      </Button>
    </HStack>
  );
};

export default Pagination;
