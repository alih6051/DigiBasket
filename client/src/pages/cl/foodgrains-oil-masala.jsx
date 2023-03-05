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
import Pagination from "@/components/products/Pagination/Pagination";
import Loader from "@/components/products/Loader/Loader";

//foodgrains-oil-masala category page
const FoodgrainsOilMasala = () => {
  //this data will change according to filter and sort
  let [data, setdata] = useState([]);
  let [allData, setAllData] = useState([]);
  // this ALLdATA will keep all data fetched it will not change on filter or sorting
  // i.e for rendring all data
  const [sort, setSort] = useState("price");
  const [sortOrder, setsortOrder] = useState("asc");
  const [totalPages, setTotalPages] = useState(1);
  const [totalProduct, setTotalProduct] = useState(0);
  const [page, setPage] = useState(1);
  const [loader, setLoader] = useState(false);
  const getData = () => {
    return axios.get(
      `https://ill-puce-bunny-cape.cyclic.app/api/products/?category=foodgrains-oil-masala&price=${sortOrder}&page=${page}&limit=12`
    );
  };

  useEffect(() => {
    setLoader(true);
    getData(sort).then((res) => {
      //fetching only active data in backend
      let updated = res.data.data.filter((el) => el.active);
      setLoader(false);
      setTotalPages(res.data.totalPages);
      setTotalProduct(res.data.totalItems);
      setdata(updated);
      setAllData(updated);
    });
  }, [sort, sortOrder, page]);
  const handlePage = (val) => {
    setPage(page + val);
  };

  // This is handling sort functionality by different select tag
  const handleSortFunctionality = (val) => {
    if (val === "Low to High") {
      setSort("price");
      setsortOrder("asc");
    } else if (val === "High to Low") {
      setSort("price");
      setsortOrder("desc");
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

  // This is handling filter functionality accroding to checkbox input
  const handleFilterFunctionality = (val, status) => {
    //BRAND WISE FILTER
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

  return (
    <Box maxW="6xl" m={"auto"}>
      <Carousels cards={foodGrains} />
      <Box>
        <Flex>
          <Stack width={"300px"}>
            <FilterSection
              //  handleFilterFunctionality WILL BRING STATUS OF CHECKBOX  AND VALUE TO FILTER

              handleFilterFunctionality={handleFilterFunctionality}
            />
          </Stack>
          {loader && loader ? (
            <Loader />
          ) : (
            <Stack width={"full"} borderLeft={"1px solid #d6cbbf"}>
              <ProductSectionTop
                // PROPS WILL DISPLAY CATEGORY AND NUMBER OF PRODUCT
                props={`Foodgrains, Oil & Masala ${totalProduct}`}
                //  handleSortFunctionality WILL BRING OPTION VALUE OF SELECT TAG AND TYPE TO SORT

                handleSortFunctionality={handleSortFunctionality}
              />
              <Box>
                {/* -------------SEND DATA TO PRODUCT GRID FOR RENDRING----------------------- */}

                <ProductGrid>
                  {data.map((product) => (
                    <Cards
                      key={product._id}
                      data={product}
                      cateicons={CateIcons.veg}
                    />
                  ))}
                </ProductGrid>
              </Box>
            </Stack>
          )}
        </Flex>
      </Box>
      <Pagination page={totalPages} handlePage={handlePage} />
    </Box>
  );
};

export default FoodgrainsOilMasala;
