import { Box, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import {
  MdBuild,
  MdCall,
  MdArrowForwardIos,
  MdKeyboardArrowLeft,
} from "react-icons/md";

const Pagination = () => {
  const [page, setPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  let arr = Array(page)
    .fill()
    .map((_, i) => i + 1);
  return (
    <Box float={"right"} mt={10} mb={10}>
      <Button
        bgColor={currentPage === 1 ? "#a6ba87" : "#84c225"}
        leftIcon={<MdKeyboardArrowLeft />}
        _hover={{ bgColor: currentPage === 1 ? "#a6ba87" : "#639c0f" }}
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Prev
      </Button>
      {arr.map((el) => (
        <Button
          bgColor={el === currentPage ? "#84c225" : null}
          variant="outline"
          key={el}
        >
          {el}
        </Button>
      ))}
      <Button
        rightIcon={<MdArrowForwardIos />}
        bgColor={currentPage === page ? "#a6ba87" : "#84c225"}
        _hover={{ bgColor: currentPage === page ? "#a6ba87" : "#639c0f" }}
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === page}
      >
        Next
      </Button>
    </Box>
  );
};

export default Pagination;
