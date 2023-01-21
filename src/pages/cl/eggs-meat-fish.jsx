import Carousels from "@/components/products/Carousels/Carousels";
import { Box, Flex, Stack } from "@chakra-ui/react";
import { eggsMeatsFish } from "@/assets/cl/eggs-meats-fish/eggsMeatsFish";
import FilterSection from "@/components/products/FilterSidebar/FilterSection";
import { ProductGrid } from "@/components/products/Cards/ProductGrid";
import Cards from "@/components/products/Cards/Cards";
import axios from "axios";
import { CateIcons } from "@/assets/cl/eggs-meats-fish/eggsMeatsFish";
import { useEffect, useState } from "react";
import ProductSectionTop from "@/components/products/ProductSectionTop/ProductSectionTop";
const EggsMeatFish = () => {
   let [data, setdata] = useState([]);

   useEffect(() => {
     axios
       .get("http://localhost:8080/eggs-meat-fish")
       .then((res) => setdata(res.data));
   }, []);
  return (
    <Box width="6xl" m={"auto"}>
      <Carousels cards={eggsMeatsFish} />
      <Box height={"200px"} border={"1px solid red"}>
        <Flex>
          <Stack width={"300px"} >
            <FilterSection products={data} />
          </Stack>

          <Stack width={"full"} borderLeft={"1px solid #d6cbbf"}>
            <ProductSectionTop
              props={`Egg, Meat & Fishe ${data.length}`}
            />
            <Box>
              <ProductGrid>
                {data.map((product) => (
                  <Cards
                    key={product.id}
                    data={product}
                    cateicons={CateIcons.nonveg}
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
export default EggsMeatFish;
