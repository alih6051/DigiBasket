import { Box, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { MdArrowForwardIos, MdKeyboardArrowLeft } from "react-icons/md";

const Pagination = ({ page, handlePage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  let arr = Array(page)
    .fill()
    .map((_, i) => i + 1);
  const HandlePageInc = () => {
    setCurrentPage(currentPage + 1);
    handlePage(1);
  };
  const HandlePageDec = () => {
    setCurrentPage(currentPage - 1);
    handlePage(-1);
  };

  return (
    <Box float={"right"} mt={10} mb={10}>
      <Button
        bgColor={currentPage === 1 ? "#a6ba87" : "#84c225"}
        leftIcon={<MdKeyboardArrowLeft />}
        _hover={{ bgColor: currentPage === 1 ? "#a6ba87" : "#639c0f" }}
        onClick={HandlePageDec}
        isDisabled={currentPage === 1}
      ></Button>
      {arr.map((el) => (
        <Button
          bgColor={el === currentPage ? "#84c225" : null}
          variant="outline"
          key={el}
          _hover={{ bgColor: currentPage === el ? "#639c0f" : null }}
        >
          {el}
        </Button>
      ))}
      <Button
        rightIcon={<MdArrowForwardIos />}
        bgColor={currentPage === page ? "#a6ba87" : "#84c225"}
        _hover={{ bgColor: currentPage === page ? "#a6ba87" : "#639c0f" }}
        onClick={HandlePageInc}
        isDisabled={currentPage === page}
      ></Button>
    </Box>
  );
};

export default Pagination;
