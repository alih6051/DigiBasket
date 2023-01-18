import React from "react";
import Carousels from "@/components/products/Carousels/Carousels";
import { Container } from "@chakra-ui/react";
import { fruitsVegitables } from "@/assets/cl/fruits-vegetables/fruitsVegitables";
const FruitsAndVegetables = () => {
  return (
    <Container w={"7xl"} ml={"0px"} mr={"0"}>
      <Carousels cards={fruitsVegitables} />
    </Container>
  );
};
export default FruitsAndVegetables;
