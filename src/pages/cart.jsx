import { Box, Button, Container, Heading, Text } from "@chakra-ui/react";
import React from "react";

{
  /* <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> */
}
<link
  href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
  rel="stylesheet"
></link>;

// import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
// import "../Components/cart.css"

let cartData = [
  {
    id: 1,
    category: "Fruits and Vegetable",
    subCat: "Fresho",
    product: "Cauliflower 1pc",
    unitPrice: 20,
    quanitity: 1,
  },
  {
    id: 2,
    category: "Snacks",
    subCat: "Betty Crocker",
    product: "Cauliflower 1pc",
    unitPrice: 20,
    quanitity: 1,
  },
];
// let cartData = []
const Cart = () => {
  if (cartData.length == 0) {
    return (
      <Box margin="auto" maxW="75%" border="1px red solid" h={100}>
        <Text fontSize={25}> There are no items in your basket. </Text>
        <Button p={4} mt={2}>
          {" "}
          CONTINUE SHOPPING{" "}
        </Button>
      </Box>
    );
  }
  return (
    <div>
      <Container maxW="75%" border="1px red solid">
        <Box>
          <h4
            style={{
              fontFamily: "sans-serif",
              padding: "5px",
              marginLeft: "7px",
            }}
          >
            {" "}
            Your Basket{" "}
          </h4>
        </Box>
        <hr
          className="horizontal-row"
          style={{ width: "90%", marginLeft: "10px" }}
        />
        <Box display="flex" flexDirection="column" h="60px" padding={2}>
          <Box border="1px yellow solid" width="25%" p="4px">
            <Text fontFamily="sans-serif" ml={6} fontSize={12}>
              {" "}
              VIEW AVAILABLE PROMOS{" "}
            </Text>
          </Box>
        </Box>

        <Box
          border="1px red solid"
          bg="#555555"
          display="flex"
          justifyContent="space-between"
          pl={20}
          h={12}
          alignItems="center"
          color="white"
        >
          <Box>
            <p>ITEM DESCRIPTION</p>
          </Box>

          <Box border="1px red solid" display="flex" gap="80px">
            <p>UNIT PRICE</p>
            <p>QUANTITY</p>
            <p>SUBTOTAL</p>
            <p>SAVINGS</p>
          </Box>
        </Box>
        {cartData.map((item) => (
          <Box
            key={item.id}
            display="flex"
            justifyContent="space-between"
            pl={20}
            h={12}
            alignItems="center"
          >
            <Box>
              <p>{item.product}</p>
            </Box>

            <Box border="1px red solid" display="flex" gap="150px">
              <p>{item.unitPrice}</p>
              <p>{item.quanitity}</p>
              <p>0</p>
              <p>0</p>
            </Box>
          </Box>
        ))}
        <Box>
          <Box border="1px red solid" h={300} display="flex" flexDirection={"column"} justifyContent="space-between">
            <Box>
                EMPTY BASKET
            </Box>
            <Box> CONTINUE SHOPPING </Box>
          </Box>
          <Box>

          </Box>
          <Box>

          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Cart;
