import React from "react";
import Carousels from "@/components/products/Carousels/Carousels";
import { Box, Center, Container, Divider, Flex, Stack } from "@chakra-ui/react";
import { fruitsVegitables } from "@/assets/cl/fruits-vegetables/fruitsVegitables";
import Cards from "@/components/products/Cards/Cards";
import FilterSection from "@/components/products/FilterSidebar/FilterSection";
const cardsData = {
  id:1,
  discount: "Get 42% off",
  image:
    "https://www.bigbasket.com/media/uploads/p/s/10000098_9-fresho-coriander-leaves.jpg",
  title: "Coriander Leaves",
  rate: [
    { weight: 100, price: 10, strikePrice: 13 },
    { weight: 250, price: 20, strikePrice: 25 },
  ],
};

const FruitsAndVegetables = () => {
  return (
    <Box width="6xl" m={"auto"}>
      <Carousels cards={fruitsVegitables} />

      <Box height={"200px"} border={"1px solid red"}>
        <Flex>
          <Stack width={"300px"} border={"1px solid yellow"} height={200}>
            <FilterSection />
          </Stack>

          <Stack col width={"full"} h={"600px"} borderLeft={"1px solid #d6cbbf"}>
            <Cards data={cardsData} />
          </Stack>
        </Flex>
      </Box>
    </Box>
  );
};
export default FruitsAndVegetables;
