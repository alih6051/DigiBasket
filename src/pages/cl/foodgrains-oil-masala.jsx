import React, { useEffect, useState } from "react";
import Carousels from "@/components/products/Carousels/Carousels";
import { Box, Flex, Heading, Stack } from "@chakra-ui/react";
import { foodGrains } from "@/assets/cl/foodgrains-oil-masala/foodGrains";
import FilterSection from "@/components/products/FilterSidebar/FilterSection";
import { ProductGrid } from "@/components/products/Cards/ProductGrid";
import Cards from "@/components/products/Cards/Cards";
import axios from "axios";
import { CateIcons } from "@/assets/cl/eggs-meats-fish/eggsMeatsFish";
import ProductSectionTop from "@/components/products/ProductSectionTop/ProductSectionTop";
const FoodgrainsOilMasala = () => {
 let [data, setdata] = useState([]);

 useEffect(() => {
   axios
     .get("http://localhost:8080/foodgrains-oil-masala")
     .then((res) => setdata(res.data));
 }, []);

  return (
    <Box width="6xl" m={"auto"}>
      <Carousels cards={foodGrains} />
      <Box>
        <Flex>
          <Stack width={"300px"} >
            <FilterSection products={data} />
          </Stack>

          <Stack width={"full"} borderLeft={"1px solid #d6cbbf"}>
            <ProductSectionTop props={`Foodgrains, Oil & Masala ${data.length}`} />
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

export default FoodgrainsOilMasala;
