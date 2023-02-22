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
const FruitsAndVegetables = () => {
  let [data, setdata] = useState([]);
  let [allData, setAllData] = useState([]);
  const [sort, setSort] = useState(null);
  const [sortOrder, setsortOrder] = useState("asc");
  const [filterData, setfilterData] = useState([]);
  const getData = () => {
    return axios.get(
      `https://digibasket.onrender.com/fruits-vegetables?_sort=${sort}&_order=${sortOrder}`
    );
  };

  // const getFilterData=()=>{
  //    return axios.get(
  //      `https://digibasket.onrender.com/fruits-vegetables??title=${[...filterData]}`
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

  const handleFilterFunctionality = (val, status) => {
    console.log(val, status);
    if (val === "Fresho" && status === true) {
      let filteredData = allData.filter((el) => el.brand === "Fresho");
      setdata(filteredData);
    } else if (val === "Fresho" && status === false) {
      setdata(allData);
    } else if (val === "Gopalan Organic" && status === true) {
      let filteredData = allData.filter((el) => el.brand === "Gopalan Organic");
      setdata(filteredData);
    } else if (val === "Gopalan Organic" && status === false) {
      setdata(allData);
      // PRICE RANGE FILTER
    } else if (val === "Organic" && status === true) {
      let filteredData = allData.filter((el) => el.brand === "Organic");
      setdata(filteredData);
    } else if (val === "Organic" && status === false) {
      setdata(allData);
      // PRICE RANGE FILTER
    } else if (val === "Less than Rs 20" && status === true) {
      let filteredData = allData.filter((el) => el.price <= 20);
      setdata(filteredData);
    } else if (val === "Less than Rs 20" && status === false) {
      setdata(allData);
    } else if (val === "Rs 21 to Rs 50" && status === true) {
      let filteredData = allData.filter(
        (el) => el.price > 20 && el.price <= 50
      );
      setdata(filteredData);
    } else if (val === "Rs 21 to Rs 50" && status === false) {
      setdata(allData);
    } else if (val === "Rs 51 to Rs 100" && status === true) {
      let filteredData = allData.filter(
        (el) => el.price > 51 && el.price <= 100
      );
      setdata(filteredData);
    } else if (val === "Rs 51 to Rs 100" && status === false) {
      setdata(allData);
    } else if (val === "Rs 101 to Rs 200" && status === true) {
      let filteredData = allData.filter(
        (el) => el.price > 101 && el.price <= 200
      );
      setdata(filteredData);
    } else if (val === "Rs 101 to Rs 200" && status === false) {
      setdata(allData);
    } else if (val === "Rs 201 to Rs 500" && status === true) {
      let filteredData = allData.filter(
        (el) => el.price > 201 && el.price <= 500
      );
      setdata(filteredData);
    } else if (val === "Rs 201 to Rs 500" && status === false) {
      setdata(allData);
    } else if (val === "more than 500" && status === true) {
      let filteredData = allData.filter((el) => el.price > 501);
      setdata(filteredData);
    } else if (val === "more than 500" && status === false) {
      setdata(allData);
    }
    // DISCOUNT WISE FILTER
    else if (val === "10% - 15%" && status === true) {
      let filteredData = allData.filter((el) => el.discount <= 15);
      setdata(filteredData);
    } else if (val === "10% - 15%" && status === false) {
      setdata(allData);
    } else if (val === "15% - 25%" && status === true) {
      let filteredData = allData.filter(
        (el) => el.discount > 15 && el.discount <= 25
      );
      setdata(filteredData);
    } else if (val === "15% - 25%" && status === false) {
      setdata(allData);
    } else if (val === "More than 25%" && status === true) {
      let filteredData = allData.filter((el) => el.discount > 25);
      setdata(filteredData);
    } else if (val === "More than 25%" && status === false) {
      setdata(allData);
    }
  };
  //
  return (
    <Box maxW={"6xl"} m={"auto"}>
      <Carousels cards={fruitsVegitables} />

      <Box>
        <Flex>
          <Stack width={"300px"}>
            <FilterSection
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
