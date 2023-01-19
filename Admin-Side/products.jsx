import { Box, Flex, Grid, GridItem, Select } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";

const Products = () => {
  return (
    <Box color={"white"} minH={"100vh"} mt={{ base: "60px", md: "0px" }} p={3}>
      <Header title="Products" />
      <Flex mt="30px">
        <Select bg="#181e2a" color="white" size="sm" width="100px">
          <option
            style={{ color: "white", backgroundColor: "#181e2a" }}
            value=""
          >
            Sort By
          </option>
          <option
            style={{ color: "white", backgroundColor: "#181e2a" }}
            value="asc"
          >
            Price Low to High
          </option>
          <option
            style={{ color: "white", backgroundColor: "#181e2a" }}
            value="desc"
          >
            Price Low to High
          </option>
        </Select>
        <Select bg="#181e2a" color="white" size="sm" width="150px" ml="15px">
          <option
            style={{ color: "white", backgroundColor: "#181e2a" }}
            value="all_products"
          >
            Select Category
          </option>
          <option
            style={{ color: "white", backgroundColor: "#181e2a" }}
            value="fruits"
          >
            Fruits
          </option>
          <option
            style={{ color: "white", backgroundColor: "#181e2a" }}
            value="vegetable"
          >
            Vegetables
          </option>
          <option
            style={{ color: "white", backgroundColor: "#181e2a" }}
            value="foodgrain"
          >
            Foodgrains
          </option>
          <option
            style={{ color: "white", backgroundColor: "#181e2a" }}
            value="spice"
          >
            Spices
          </option>
          <option
            style={{ color: "white", backgroundColor: "#181e2a" }}
            value="dairyBarkery"
          >
            Bakery
          </option>
        </Select>
      </Flex>

      {/* ------------------------- Table  ----------------------------- */}
    </Box>
  );
};

export default Products;
