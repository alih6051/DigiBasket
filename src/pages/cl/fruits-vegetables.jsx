import React from "react";
import Carousels from "@/components/products/Carousels/Carousels";
import { Box, Container } from "@chakra-ui/react";
import { fruitsVegitables } from "@/assets/cl/fruits-vegetables/fruitsVegitables";
const FruitsAndVegetables = () => {
  return (
    <Box width="6xl" m={"auto"}>
      <Carousels cards={fruitsVegitables} />
    </Box>
  );
};
export default FruitsAndVegetables;
