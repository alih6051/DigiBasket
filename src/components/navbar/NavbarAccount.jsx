import { Box, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { VscAccount } from "react-icons/vsc";
import { BsCart } from "react-icons/bs";

const NavbarAccount = () => {
  return (
    <Flex>
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="end"
        mr={5}
      >
        <VscAccount fontSize="24px" />
        <Text fontSize="xs" mt={0}>
          Account
        </Text>
      </Flex>
      <Link href="/cart">
        <button style={{ position: "relative" }}>
          <VStack spacing={0} paddingTop="5px">
            <BsCart fontSize="24px" />
            <Text fontSize="xs">Cart</Text>
          </VStack>
          <div
            style={{
              position: "absolute",
              top: "0",
              left: "18px",
              fontSize: "15px",
              background: "#ff1f2c",
              color: "white",
              borderRadius: "50%",
              width: "22px",
              height: "22px",
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            {0}
          </div>
        </button>
      </Link>
    </Flex>
  );
};

export default NavbarAccount;
