import {
  Box,
  Button,
  HStack,
  Card,
  CardBody,
  Image,
  Stack,
  Text,
  Spacer,
  Select,
  InputGroup,
  InputLeftAddon,
  Input,
} from "@chakra-ui/react";
import React, { useState } from "react";
import {
  FaCertificate,
  FaCaretDown,
  FaCarSide,
  FaCartPlus,
  FaTruckMoving,
} from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/cartSlice";
import { useToast } from "@chakra-ui/react";
// "id": "a61e9280-99c2-11ed-a786-8160523d452f",
//       "active": true,
//       "title": "Onion (Loose)",
//       "image": "https://www.bigbasket.com/media/uploads/p/s/40075537_5-fresho-onion.jpg",
//       "discount": 37,
//       "price": 53,
//       "brand": "Organic"

export default function Cards({ data, cateicons }) {
  const { discount, image, title, rate, id, brand, price } = data;
  const [togglePrice, setTogglePrice] = useState(price);
  const [toggleStrikePrice, setToggleStrikePrice] = useState(
    (Math.random() * (2 - 1) + 1) * price
  );
  const [Quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  const toast = useToast()

  const handleChange = (e) => {
    setTogglePrice(e.target.value);

    setToggleStrikePrice(+e.target.value + Math.floor(Math.random() * 20));
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleAddTocart = (data) => {
    dispatch(addToCart(data));
    toast({
      title: "Added to Cart Succesfully",
      description: `${Quantity} ${title} added to cart`,
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };

  const [isHovering, setHovering] = useState("");

  function handleMouseEnter() {
    setHovering(true);
  }
  function handleMouseLeave() {
    setHovering(false);
  }

  const Styles_top = {
    pr: "10px",
    h: "5px",
    color: "red",
    alignItems: "center",
    boxShadow:
      "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
  };

  const Style_card = {
    position: "relative",
    transition: "top ease 0.5s",

    boxShadow: isHovering
      ? " rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
      : null,
  };

  return (
    <Box>
      <Card
        maxW={{ base: "100%", md: "250px", lg: "220px", xl: "220px" }}
        style={Style_card}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        bg="transparent"
        color={"black"}
      >
        <CardBody px={"10px"} pt={"5px"} pb={"15px"}>
          <HStack style={Styles_top}>
            <Spacer />
            <Text>
              Get{"  "} {discount} % off{" "}
            </Text>{" "}
            <FaCertificate />
          </HStack>
          <Image width="100%" src={image} alt="" />
          <Image src={cateicons.src} height={"25px"} alt={"veg-icon"} />
          <Text as={"p"} color={"gray.500"}>
            {brand}
          </Text>
          <Text
            noOfLines={1}
            spacing={2}
            as={"h3"}
            fontSize={15}
            fontWeight={"600"}
            color={"black.700"}
          >
            {title}
          </Text>
          {/* pricing */}
          <Stack mt="2" spacing="1">
            <Select
              size="xs"
              bg={"whiteAlpha.400"}
              border="1px solid #8a8076"
              colorScheme={"#8a8076"}
              focusBorderColor={"#8a8076"}
              icon={<FaCaretDown border="1px solid #8a8076" />}
              value={togglePrice}
              onChange={handleChange}
            >
              <option size="xs" value={price}>
                {250} g - Rs {price}
              </option>
              <option size="xs" value={price * 2 - 15}>
                {500} g - Rs {price * 2 - 15}
              </option>
              <option size="xs" value={price * 3 - 15}>
                {1} kg - Rs {price * 3 - 25}
              </option>
            </Select>
            <Stack bg={"#f4f3f2"} p="5px" pb={"10px"}>
              <HStack>
                <Text
                  textDecoration={"line-through"}
                  fontSize={{ base: "16px", md: "16px", lg: "12px" }}
                >
                  MRP:Rs {Math.floor(toggleStrikePrice)}
                </Text>
                <Text>Rs {togglePrice}</Text>
              </HStack>
              {/* Delivery section */}
              <HStack sy={0}>
                <Text sy={0} _hover={{ color: "green" }} maxH={"30px"}>
                  {" "}
                  <FaTruckMoving
                    h={"30px"}
                    fontSize={["16px", "16px", "20px", "30px"]}
                  />
                </Text>
                <Text
                  fontSize={{ base: "10px", md: "12px", lg: "12px" }}
                  spacing={0}
                >
                  Standard Delivery: Tomorrow 9:00AM - 1:30PM
                </Text>
              </HStack>
              <HStack spacing={[5, 6, 7, 7]}>
                <InputGroup border={"1px solid  #8a8076"} maxW={"80px"}>
                  <InputLeftAddon
                    borderRadius={0}
                    maxW={"30px"}
                    pl="1"
                    pr="1"
                    maxH={"20px"}
                    fontSize={{ base: "12px", md: "14px", lg: "14px" }}
                    border={"1px solid  #8a8076"}
                    focusBorderColor="#8a8076"
                  >
                    Qty
                  </InputLeftAddon>
                  <Input
                    bg={"white"}
                    textAlign={"center"}
                    maxW={"50px"}
                    padding={[2, 1, 2, 1]}
                    maxH={"20px"}
                    type="number"
                    value={Quantity}
                    borderRadius={0}
                    focusBorderColor="#8a8076"
                    onChange={handleQuantityChange}
                  />
                </InputGroup>
                <Button
                  fontSize={"13px"}
                  bg={"#f7d779"}
                  height="22px"
                  maxW={"90px"}
                  padding={2}
                  px={4}
                  _hover={{ bg: "#e6bf48" }}
                  onClick={() =>
                    handleAddTocart({
                      id,
                      discount,
                      image,
                      title,
                      price,
                      quantity: +Quantity,
                    })
                  }
                >
                  ADD <FaCartPlus height="16px" width="16px" padding={"3px"} />
                </Button>
               
              </HStack>
            </Stack>
          </Stack>
        </CardBody>
      </Card>
    </Box>
  );
}
