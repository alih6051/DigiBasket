import {
  Box,
  Button,
  HStack,
  Card,
  CardBody,
  CardFooter,
  Divider,
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
import { CateIcons } from "@/assets/cl/eggs-meats-fish/eggsMeatsFish";

// box-shadow:;
//FaCertificate;
export default function Cards({ data }) {
  const { discount, image, title, rate, id } = data;
  const [togglePrice, setTogglePrice] = useState(rate[0].price);
  const [toggleStrikePrice, setToggleStrikePrice] = useState(
    rate[0].strikePrice
  );
  const [Quantity, setQuantity] = useState(1);
  const [AddToCart, setAddToCart] = useState(null);

  const handleChange = (e) => {
    setTogglePrice(e.target.value);

    setToggleStrikePrice(+e.target.value + Math.floor(Math.random() * 20));
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleAddTocart = (val) => {
    setAddToCart(id);
  };

 const [isHovering, setHovering] = useState("");

 function handleMouseEnter() {
   setHovering(true);
 }
 function handleMouseLeave() {
   setHovering(false);
 }
  const { veg, nonveg } = CateIcons;

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
      ? " rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px": null,
  };


  return (
    <Box>
      <Card
        width={"240px"}
        style={Style_card}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <CardBody px={"10px"} pt={"5px"} pb={"15px"}>
          <HStack style={Styles_top}>
            <Spacer />
            <Text>{discount}</Text> <FaCertificate />
          </HStack>
          <Image height={"170px"} width="100%" src={image} alt="" />
          <Image src={veg.src} height={"25px"} alt={"veg-icon"} />
          <Text as={"p"} color={"gray.500"}>
            Fresho
          </Text>
          <Text
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
              {rate.map((el, i) => (
                <option size="xs" key={i + 1} value={el.price}>
                  {el.weight} g - Rs {el.price}
                </option>
              ))}
            </Select>
            <Stack bg={"#f4f3f2"} p="5px" pb={"10px"}>
              <HStack>
                <Text textDecoration={"line-through"} fontSize="12px">
                  MRP:Rs {toggleStrikePrice}
                </Text>
                <Text>Rs {togglePrice}</Text>
              </HStack>
              {/* Delivery section */}
              <HStack sy={0}>
                <Text sy={0} _hover={{ color: "green" }} h={"30px"}>
                  {" "}
                  <FaTruckMoving w={"25px"} h={"30px"} fontSize={"30px"}/>
                </Text>
                <Text fontSize="12px" spacing={0}>
                  Standard Delivery: Tomorrow 9:00AM - 1:30PM
                </Text>
              </HStack>
              <HStack spacing={7}>
                <InputGroup border={"1px solid  #8a8076"} width={"80px"}>
                  <InputLeftAddon
                    borderRadius={0}
                    width={"30px"}
                    pl="1"
                    pr="1"
                    height="20px"
                    fontSize={12}
                    border={"1px solid  #8a8076"}
                    focusBorderColor="#8a8076"
                  >
                    Qty
                  </InputLeftAddon>
                  <Input
                    bg={"white"}
                    textAlign={"center"}
                    width={"50px"}
                    padding={1}
                    height="20px"
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
                  width={"90px"}
                  padding={2}
                  px={4}
                  _hover={{ bg: "#e6bf48" }}
                  onClick={() => handleAddTocart(id)}
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
