import CheckoutData from "@/components/checkout/CheckoutData";
import CheckoutForm from "@/components/checkout/CheckoutForm";
import { Box, Container, Flex, Grid, GridItem } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Checkout = () => {
  const { authState } = useSelector((state) => state.auth);
  const { data } = useSelector((state) => state.cart);
  const [cartTotal, setCartTotal] = useState(0);
  console.log(cartTotal);

  const router = useRouter();

  useEffect(() => {
    if (!authState) {
      router.back();
    }
    let totalPrice = 0;
    data.forEach((item) => {
      totalPrice += item.price * item.quantity;
    });
    setCartTotal(totalPrice);
  }, []);

  return (
    authState && (
      <Flex
        bg="#FAF9F6"
        minH="100vh"
        w="100%"
        justifyContent="center"
        alignItems="center"
      >
        <Container maxW="5xl">
          <Grid
            templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
          >
            <CheckoutData cartTotal={cartTotal} />
            <CheckoutForm cartTotal={cartTotal} />
          </Grid>
        </Container>
      </Flex>
    )
  );
};

export default Checkout;
