import React, { useEffect, useState } from "react";
import Carousels from "@/components/products/Carousels/Carousels";
import { Box, Divider, Flex, Heading, HStack, Select, Spacer, Stack, Text } from "@chakra-ui/react";
import { fruitsVegitables } from "@/assets/cl/fruits-vegetables/fruitsVegitables";
import Cards from "@/components/products/Cards/Cards";
import FilterSection from "@/components/products/FilterSidebar/FilterSection";
import axios from "axios";
import { ProductGrid } from "@/components/products/Cards/ProductGrid";
import { CateIcons } from "@/assets/cl/eggs-meats-fish/eggsMeatsFish";
import { FaCaretDown, FaTruckMoving } from "react-icons/fa";
import ProductSectionTop from "@/components/products/ProductSectionTop/ProductSectionTop";
const FruitsAndVegetables = () => {
  let [data, setdata] = useState([])

useEffect(()=>{
axios
.get("http://localhost:8080/fruits-vegetables")
  .then((res) => setdata(res.data));
},[])


  return (
    <Box width={["3xl", "4xl", "5xl", "6xl"]} m={"auto"}>
      <Carousels cards={fruitsVegitables} />

      <Box>
        <Flex>
          <Stack width={"300px"}>
            <FilterSection products={data} />
          </Stack>

          <Stack width={"full"} borderLeft={"1px solid #d6cbbf"}>
            <ProductSectionTop props={`Fruits & Vegetables ${data.length}`} />
            <Box>
             
              <ProductGrid>
                {data.map((product) => (
                  <Cards
                    key={product.id}
                    data={product}
                    cateicons={CateIcons.veg}
                  />
                ))}
              </ProductGrid>
            </Box>
          </Stack>
        </Flex>
      </Box>
    </Box>
  );
};
export default FruitsAndVegetables;
