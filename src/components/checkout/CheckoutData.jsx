import { Box, Flex, GridItem, Heading, Tag, Text } from "@chakra-ui/react";
import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { formatCurrency } from "@/utils/formatCurrency";
import { useRouter } from "next/router";

const CheckoutData = ({ cartTotal }) => {
  const router = useRouter();

  return (
    <GridItem p={10}>
      <Flex alignItems="center">
        <Box
          cursor="pointer"
          p={2}
          rounded="full"
          border="1px solid black"
          onClick={() => {
            router.back();
          }}
        >
          <BiArrowBack fontSize="20px" />
        </Box>
        <Text ml={2}>DIGI BASKET, LLC</Text>
        <Tag colorScheme="yellow" ml={3}>
          TEST MODE
        </Tag>
      </Flex>
      <Box ml="44px">
        <Text mt={10} fontSize="lg">
          Pay DIGI BASKET, LLC
        </Text>
        <Heading>{formatCurrency(cartTotal)}</Heading>
      </Box>
    </GridItem>
  );
};

export default CheckoutData;
