import { getCartData } from "@/redux/cartSlice";
import { Box, Button, Container, Heading, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { getData } from "@/redux/cartSlice";
import { RxCross2 } from "react-icons/rx";
import { CloseIcon } from "@chakra-ui/icons";
import { BiRupee } from "react-icons/bi";

let cartData = [];
const Cart = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.cart);

  // const [,setCartData] = useState([])
  const quantityDec = (id) => {
    let filteredData = data.filter((item) => {
      if (item.id == id) {
        return { ...item, quantity: item.quantity };
      }
      return item;
    });
    dispatch(getData(filteredData));
  };
  const quantityInc = () => {
    // data.quantity++
  };

  // getCartData(dispatch)
  useEffect(() => {
    axios
      .get("http://localhost:8080/cart")
      .then((res) => dispatch(getData(res.data)));
  }, []);

  const handleItemRemoveBtn = () => {};

  const totalPaymentFun = () => {
    let totalPayment = data.map(
      (item) => Number(item.price) * Number(item.quantity)
    );
    return totalPayment;
  };
  if (data.length == 0) {
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
      <Container mt={40} maxW="75%" border="1px red solid">
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

          <Box display="flex" gap="80px" mr={1}>
            <Text>UNIT PRICE</Text>
            <Text>QUANTITY</Text>
            <Text>SUBTOTAL</Text>
            <Text>SAVINGS</Text>
          </Box>
        </Box>
        {data.map((item) => (
          <Box
            key={item.id}
            display="flex"
            justifyContent="space-between"
            pl={20}
            h={14}
            alignItems="center"
            bg="#4444"
            mt={2}
          >
            <Box>
              <p>{item.product}</p>
            </Box>
            {/* "text-decoration:line-through" */}
            <Box
              cursor="pointer"
              display="flex"
              width="59%"
              alignItems="center"
            >
              <Box mr="90px" width="70px" display="flex" flexDirection="column">
                <Text width="70px" textAlign="center">
                  {" "}
                  Rs. {(item.price * 70) / 100}{" "}
                </Text>
                <Text fontSize="11px">
                  {" "}
                  <p
                    style={{
                      textAlign: "center",
                      width: "70px",
                      textDecoration: "line-through",
                    }}
                  >
                    Rs. {item.price}{" "}
                  </p>{" "}
                </Text>
              </Box>

              <Box mr="80px" display="flex" flexDirection="row">
                <Button onClick={() => quantityDec(item.id)} size="xs" mr={2}>
                  -
                </Button>{" "}
                <p>{item.quantity}</p>{" "}
                <Button onClick={quantityInc} ml={2} size="xs">
                  +
                </Button>
              </Box>
              <Box>
                <Text width="70px" textAlign="center">
                  Rs. {(item.price * 70) / 100}
                </Text>
              </Box>
              <CloseIcon
                onClick={handleItemRemoveBtn}
                ml="32px"
                boxSize={3}
                mt={1.5}
                mr="30px"
              />
              <Box>
                <Text width="70px" textAlign="center">
                  {" "}
                  Rs. {Math.floor(item.price - (item.price * 70) / 100)}.00{" "}
                </Text>
              </Box>
            </Box>
          </Box>
        ))}
        <Box display="flex" justifyContent="space-between">
          <Box
            mt={10}
            h={300}
            display="flex"
            flexDirection={"column"}
            justifyContent="space-between"
            width={300}
          >
            <Button m={5}>EMPTY BASKET</Button>
            <Button m={5}> CONTINUE SHOPPING </Button>
          </Box>
          <Box></Box>
          <Box border="1px red solid" w="45%" h={300} mt={10} mb={10}>
            <Box display="flex" flexDirection="row">
              <Box w="80%">
                <Box
                  m={2}
                  display="flex"
                  p={1}
                  justifyContent="space-between"
                  border="1px gray solid"
                >
                  <Text>Subtotal</Text>
                  <Text> {totalPaymentFun()} </Text>
                </Box>
                <Box
                  m={2}
                  display="flex"
                  p={1}
                  justifyContent="space-between"
                  border="1px gray solid"
                >
                  <Text>Delivery Charges </Text>
                  <Text> Free </Text>
                </Box>
                <hr />
                <Box
                  m={2}
                  display="flex"
                  p={1}
                  mb={4}
                  justifyContent="space-between"
                  border="1px gray solid"
                >
                  <Heading size="sm">TOTAL </Heading>
                  <Heading size="sm"> {totalPaymentFun()} </Heading>
                </Box>
                <Text>For this order: Accepted food coupon is Rs.{totalPaymentFun()} </Text>
                <hr />
              </Box>
              
              <Box border="1px red solid" h="100px" m={2}  > You saved -- </Box>
            </Box>
            <Button bg="black" color="red" mt={6} ml={40} textAlign="center" > CHECKOUT </Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Cart;
