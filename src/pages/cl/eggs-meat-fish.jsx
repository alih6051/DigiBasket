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
  const [sort, setSort] = useState(null);
  const [sortOrder, setsortOrder] = useState("asc");
  const getData = () => {
    return axios.get(
      `http://localhost:8080/eggs-meat-fish?_sort=${sort}&_order=${sortOrder}`
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
      <Carousels cards={eggsMeatsFish} />
      <Box>
        <Flex>
          <Stack minW={"180px"}  maxW={"300px"}>
            <FilterSection products={data} />
          </Stack>

          <Stack width={"full"} borderLeft={"1px solid #d6cbbf"}>
            <ProductSectionTop
              props={`Egg, Meat & Fishe (${data.length})`}
              handleSortFunctionality={handleSortFunctionality}
            />
            <Box pl={1}>
              <ProductGrid>
                {/* {data.map((product) => {
                  product.active ? (
                    <Cards
                      key={product.id}
                      data={product}
                      cateicons={CateIcons.veg}
                    />
                  ) : null;
                })} */}
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
export default EggsMeatFish;
