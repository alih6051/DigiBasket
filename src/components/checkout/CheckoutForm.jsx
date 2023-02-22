import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  GridItem,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { SiGooglepay } from "react-icons/si";
import { RiVisaFill } from "react-icons/ri";
import { FaCcMastercard } from "react-icons/fa";
import { SiAmericanexpress } from "react-icons/si";
import { formatCurrency } from "@/utils/formatCurrency";

const CheckoutForm = ({ cartTotal }) => {
  return (
    <GridItem p={10}>
      <VStack spacing="5">
        <Button
          w="100%"
          rounded="0"
          bg="black"
          color="#fff"
          _hover={{ bg: "#272727" }}
        >
          <SiGooglepay fontSize="40px" />
        </Button>
        <Text>Or pay with card</Text>
      </VStack>

      <VStack mt="20px" spacing={5}>
        <FormControl>
          <FormLabel>Email address</FormLabel>
          <Input type="email" borderColor="gray" rounded="0" />
        </FormControl>
        <FormControl>
          <FormLabel>Card Information</FormLabel>
          <Flex position="relative">
            <Input
              type="number"
              placeholder="1234 1234 1234 1234"
              borderColor="gray"
              rounded="0"
              borderBottom="none"
            />
            <HStack position="absolute" right="3" top="1" spacing={2}>
              <RiVisaFill fontSize="34px" />
              <FaCcMastercard fontSize="34px" />
              <SiAmericanexpress fontSize="30px" />
            </HStack>
          </Flex>

          <Flex>
            <Input
              type="number"
              borderColor="gray"
              rounded="0"
              placeholder="MM / YY"
            />
            <Input
              type="number"
              borderColor="gray"
              rounded="0"
              placeholder="CVV"
            />
          </Flex>
        </FormControl>
        <FormControl>
          <FormLabel>Name on card</FormLabel>
          <Input type="text" borderColor="gray" rounded="0" />
        </FormControl>
        <FormControl>
          <FormLabel>Shipping Details</FormLabel>
          <Flex position="relative">
            <Input
              type="text"
              placeholder="House no & Street"
              borderColor="gray"
              rounded="0"
              borderBottom="none"
            />
          </Flex>

          <Flex>
            <Input
              type="text"
              borderColor="gray"
              rounded="0"
              placeholder="State"
            />
            <Input
              type="number"
              borderColor="gray"
              rounded="0"
              placeholder="Pin code"
            />
          </Flex>
        </FormControl>
        <Button
          colorScheme="telegram"
          size="lg"
          rounded="md"
          w="100%"
          color="#FAF9F6"
        >
          Pay {formatCurrency(cartTotal)}
        </Button>
      </VStack>
    </GridItem>
  );
};

export default CheckoutForm;
