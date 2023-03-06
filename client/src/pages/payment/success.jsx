import React, { useContext, useEffect } from "react";
import { Button, Container } from "@chakra-ui/react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { BsCheckCircleFill } from "react-icons/bs";
import Link from "next/link";

const Success = () => {
  return (
    <Container maxW="5xl" p="20px">
      <Flex
        flexDirection="column"
        padding="40px"
        justifyContent="center"
        alignItems="center"
      >
        <Box>
          <BsCheckCircleFill color="#16a34a" fontSize="60px" />
        </Box>
        <Text fontSize="2xl" marginTop="20px">
          Payment Done !
        </Text>
        <Text fontSize="sm">
          Thank you for completing your secure online payment
        </Text>
        <Text as="b">Have a nice day !</Text>
        <Link href="/">
          <Button colorScheme="green" mt="20px" rounded="none">
            Go to Home
          </Button>
        </Link>
      </Flex>
    </Container>
  );
};

export default Success;
