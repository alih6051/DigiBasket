import { Box, Button, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";
const ProductItem = ({
  id,
  title,
  price,
  image,
  brand,
  active,
  handleToggleStatus,
  handleOpenDetails,
}) => {
  return (
    <Box
      boxShadow="rgba(0, 0, 0, 0.4) 0px 1px 4px, rgba(0, 0, 0, 0.3) 0px 5px 10px -1px, rgba(0, 0, 0, 0.2) 0px -1px 0px inset"
      cursor={"pointer"}
    >
      <Box
        display={{ base: "none", md: "flex" }}
        justifyContent={"space-between"}
        alignItems={"center"}
        textAlign={"left"}
        padding={"10px"}
      >
        <Box
          width={{ base: "10%", md: "10%" }}
          fontSize={{ base: "12px", md: "12px", lg: "md" }}
        >
          <Text>{id}</Text>
        </Box>
        <Box
          width={{ base: "5%", md: "13%", lg: "10%" }}
          onClick={() => {
            handleOpenDetails(id, image, price, title);
          }}
        >
          <Image width={"80%"} src={image} alt={brand}></Image>
        </Box>
        <Box
          width={{ base: "10%", md: "27%", lg: "25%" }}
          fontSize={{ base: "12px", md: "12px", lg: "md" }}
          onClick={() => {
            handleOpenDetails(id, image, price, title);
          }}
        >
          <Text>{title}</Text>
        </Box>
        <Box
          width={{ base: "5%", md: "10%", lg: "10%" }}
          fontSize={{ base: "12px", md: "12px", lg: "md" }}
          onClick={() => {
            handleOpenDetails(id, image, price, title);
          }}
        >
          <Text>Rs {price} / kg</Text>
        </Box>
        <Box
          width={{ base: "5%", md: "15%", lg: "15%" }}
          fontSize={{ base: "12px", md: "12px", lg: "md" }}
        >
          <Text>{brand === "WheyProtien" ? "WheyProtein" : brand}</Text>
        </Box>
        <Box w={{ base: "5%", md: "15%", lg: "10%" }}>
          <Button
            onClick={() => {
              handleToggleStatus(id, active);
            }}
            size={{ base: "sm", md: "sm", lg: "md" }}
            colorScheme={active ? "green" : "red"}
          >
            {active ? "Active" : "Inactive"}
          </Button>
        </Box>
      </Box>
      {/* ```````````````````````````````small screen ``````````````````````````````````*/}

      <Box
        display={{ base: "flex", md: "none" }}
        justifyContent={"space-between"}
        p={"10px"}
      >
        {/* ````````````````````````````````````left Div ``````````````````````````````````*/}
        <Box
          width={{ base: "50%", sm: "40%" }}
          onClick={() => {
            handleOpenDetails(id, image, price, title);
          }}
        >
          <Box
            h="25px"
            width={"58px"}
            border={active ? "1px solid Green" : "1px solid red"}
            bg={active ? "green.300" : "red.300"}
            mb={"10px"}
            color="black"
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            {active ? (
              <Text as="b" fontSize={{ base: "10px", sm: "12px" }}>
                Active
              </Text>
            ) : (
              <Text as="b" fontSize={{ base: "10px", sm: "12px" }}>
                Inactive
              </Text>
            )}
          </Box>
          <Image
            width={{ base: "60%", sm: "40%" }}
            src={image}
            alt={brand}
          ></Image>
          <Text fontWeight={"bold"} fontSize={"lg"} mt={"20px"}>
            Rs {Math.ceil(Number(price) * 60)}
          </Text>
        </Box>
        {/* ```````````````````````````````````right Div````````````````````````````` */}
        <Box
          w={{ base: "50%", sm: "60%" }}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-around"}
        >
          <Box>
            <Text as="b" fontSize={{ base: "13px", sm: "14px" }}>
              {title}
            </Text>
            <Text mt={"10px"} fontSize={{ base: "12px", sm: "13px" }}>
              {brand === "WheyProtien" ? "WheyProtein" : brand}
            </Text>
            <Text mt={"10px"} fontSize={{ base: "12px", sm: "13px" }}>
              ID- {id}
            </Text>
          </Box>

          <Button
            mt={"10px"}
            onClick={() => {
              handleToggleStatus(id, active);
            }}
            size={"sm"}
            colorScheme={active ? "green" : "red"}
          >
            {active ? "Active" : "Inactive"}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductItem;
