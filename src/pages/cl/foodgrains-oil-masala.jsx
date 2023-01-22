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
 const [sort, setSort] = useState(null);
 const [sortOrder, setsortOrder] = useState("asc");
 const getData = () => {
   return axios.get(
     `http://localhost:8080/foodgrains-oil-masala?_sort=${sort}&_order=${sortOrder}`
   );
 };

 useEffect(() => {
   getData(sort).then((res) => {
     let updated = res.data.filter((el) => el.active);
     setdata(updated);
   });
 }, [sort, sortOrder]);

 const handleBrand = () => {
   data.filter((el) => {});
 };

 const handleSortFunctionality = (val) => {
   console.log(val);
   if (val === "Low to High") {
     setSort("price");
     setsortOrder("asc");
     getData(sort);
   } else if (val === "High to Low") {
     setSort("price");
     setsortOrder("desc");
     getData(sort);
   } else if (val === "Alphabetical") {
     setSort("title");
     setsortOrder("asc");
     getData(sort);
   } else if (val === "Rupee saving-Low to High") {
     setSort("price");
     setsortOrder("desc");
     getData(sort);
   } else if (val === "Rupee saving-High to Low") {
     setSort("price");
     setsortOrder("asc");
     getData(sort);
   } else if (val === "% Off") {
     setSort("discount");
     setsortOrder("desc");
     getData(sort);
   }
 };
  return (
    <Box maxW="6xl" m={"auto"}>
      <Carousels cards={foodGrains} />
      <Box>
        <Flex>
          <Stack width={"300px"}>
            <FilterSection products={data} />
          </Stack>

          <Stack width={"full"} borderLeft={"1px solid #d6cbbf"}>
            <ProductSectionTop
              props={`Foodgrains, Oil & Masala ${data.length}`}
              handleSortFunctionality={handleSortFunctionality}
            />
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
