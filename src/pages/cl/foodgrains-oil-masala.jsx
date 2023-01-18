import React from "react";
import Carousels from "@/components/products/Carousels/Carousels";
import { Box, Heading } from "@chakra-ui/react";
import { foodGrains } from "@/assets/cl/foodgrains-oil-masala/foodGrains";

const FoodgrainsOilMasala = () => {
  return (
    <Box width="6xl" m={"auto"} bg={"green"}>
      <Carousels cards={foodGrains} />
    </Box>
  );
};

export default FoodgrainsOilMasala;
