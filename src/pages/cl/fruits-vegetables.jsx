import React, { useEffect, useState } from "react";
import Carousels from "@/components/products/Carousels/Carousels";
import { Box, Flex, Stack } from "@chakra-ui/react";
import { fruitsVegitables } from "@/assets/cl/fruits-vegetables/fruitsVegitables";
import Cards from "@/components/products/Cards/Cards";
import FilterSection from "@/components/products/FilterSidebar/FilterSection";
import axios from "axios";
import { ProductGrid } from "@/components/products/Cards/ProductGrid";
import { CateIcons } from "@/assets/cl/eggs-meats-fish/eggsMeatsFish";
import ProductSectionTop from "@/components/products/ProductSectionTop/ProductSectionTop";
import { useRef } from "react";
const FruitsAndVegetables = () => {
  let [data, setdata] = useState([]);
  let [allData, setAllData] = useState([]);
  const [sort, setSort] = useState(null);
  const [sortOrder, setsortOrder] = useState("asc");
  const [filterData, setfilterData] = useState([]);
  const getData = () => {
    return axios.get(
      `http://localhost:8080/fruits-vegetables?_sort=${sort}&_order=${sortOrder}`
    );
  };

  // const getFilterData=()=>{
  //    return axios.get(
  //      `http://localhost:8080/fruits-vegetables??title=${[...filterData]}`
  //    );
  // }

  useEffect(() => {
    getData(sort).then((res) => {
      let updated = res.data.filter((el) => el.active);
      setdata(updated);
      setAllData(updated);
    });
    //  getFilterData(filterData).then((res) => {
    //    let updated = res.data.filter((el) => el.active);
    //    setdata(updated);
    //  });
  }, [sort, sortOrder]);

  const freshoRef = useRef();
  const organicRef = useRef();
  const gopalanRef = useRef();

  

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

  const handleFilterFunctionality = (val, status) => {};

  return (
    <Box maxW={"6xl"} m={"auto"}>
      <Carousels cards={fruitsVegitables} />

      <Box>
        <Flex>
          <Stack width={"300px"}>
            <FilterSection
              freshoRef={freshoRef}
              organicRef={organicRef}
              gopalanRef={gopalanRef}
              handleFilterFunctionality={handleFilterFunctionality}
            />
          </Stack>

          <Stack width={"full"} borderLeft={"1px solid #d6cbbf"}>
            <ProductSectionTop
              props={`Fruits & Vegetables ${data.length}`}
              handleSortFunctionality={handleSortFunctionality}
            />
            <Box pl={2}>
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
