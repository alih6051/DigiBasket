import {
  Avatar,
  Box,
  Button,
  Flex,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  SimpleGrid,
  Text,
  useToast,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";
import ProductItem from "./ProductItem";
import { useDispatch, useSelector } from "react-redux";
import { setAdminData, sortAdminData } from "@/redux/adminSlice";

const Products = () => {
  const toast = useToast();

  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.admin);
  const [category, setCategory] = useState("fruits-vegetables");
  const [order, setOrder] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, SetImage] = useState("");
  const [mid, msetId] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const getData = () => {
    axios
      .get(
        `https://digibasket.onrender.com/${category}?_sort=price&_order=${order}`
      )
      .then((res) => dispatch(setAdminData(res.data)));
  };

  // ``````````````````````````````````````````````````````` Editable Modal ````````````````````````````````
  const handleOpenDetails = (id, image, price, title) => {
    setTitle(title);
    setPrice(price);
    SetImage(image);
    msetId(id);
    onOpen();
  };

  //``````````````````````` submit modal data`````````````````````````````
  const handleSubmitModalDetails = () => {
    let dataToSend = {
      title: title,
      price: +price,
      image: image,
    };

    axios
      .patch(`https://digibasket.onrender.com/${category}/${mid}`, dataToSend)
      .then((res) => {
        getData();
        toast({
          title: "Updated Successfully",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      })
      .catch((res) => {
        toast({
          title: "Invalid Request",
          status: "Error",
          duration: 3000,
          isClosable: true,
        });
      });
  };

  const handleToggleStatus = (id, active) => {
    axios
      .patch(`https://digibasket.onrender.com/${category}/${id}`, {
        active: !active,
      })
      .then((res) => {
        getData();
        active
          ? toast({
              title: "Deactivated Successfully",
              status: "error",
              duration: 3000,
              isClosable: true,
            })
          : toast({
              title: "Activated Successfully",
              status: "success",
              duration: 3000,
              isClosable: true,
            });
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, [category, order]);

  return (
    <Box color={"white"} minH={"100vh"} mt={{ base: "60px", md: "0px" }} p={3}>
      <Header title="Products" />
      <Flex mt="30px">
        <Select
          bg="#181e2a"
          color="white"
          size="sm"
          maxW="150px"
          onChange={(e) => setOrder(e.target.value)}
        >
          <option
            style={{ color: "white", backgroundColor: "#181e2a" }}
            value=""
          >
            Sort By
          </option>
          <option
            style={{ color: "white", backgroundColor: "#181e2a" }}
            value="asc"
          >
            Low to High
          </option>
          <option
            style={{ color: "white", backgroundColor: "#181e2a" }}
            value="desc"
          >
            High to Low
          </option>
        </Select>
        <Select
          bg="#181e2a"
          color="white"
          size="sm"
          maxW="150px"
          ml="15px"
          onChange={handleCategoryChange}
        >
          <option
            style={{ color: "white", backgroundColor: "#181e2a" }}
            value="fruits-vegetables"
          >
            Fruits and Vegetables
          </option>
          <option
            style={{ color: "white", backgroundColor: "#181e2a" }}
            value="foodgrains-oil-masala"
          >
            Foodgrains
          </option>
          <option
            style={{ color: "white", backgroundColor: "#181e2a" }}
            value="eggs-meat-fish"
          >
            Non-Veg
          </option>
        </Select>
      </Flex>

      <Box>
        <SimpleGrid gap={5}>
          <Box
            display={{ base: "none", md: "flex" }}
            justifyContent={"space-between"}
            alignItems={"center"}
            textAlign={"left"}
            boxShadow="rgba(0, 0, 0, 0.4) 0px 1px 4px, rgba(0, 0, 0, 0.3) 0px 5px 10px -1px, rgba(0, 0, 0, 0.2) 0px -1px 0px inset"
            padding={"10px"}
            mt={"20px"}
          >
            <Box
              width={{ base: "10%", md: "10%" }}
              fontSize={{ base: "12px", md: "12px", lg: "md" }}
            >
              <Text>ID</Text>
            </Box>
            <Box
              width={{ base: "5%", md: "13%", lg: "10%" }}
              fontSize={{ base: "12px", md: "12px", lg: "md" }}
            >
              <Text>IMAGE</Text>
            </Box>
            <Box
              width={{ base: "10%", md: "27%", lg: "25%" }}
              fontSize={{ base: "12px", md: "12px", lg: "md" }}
            >
              <Text>PRODUCTS</Text>
            </Box>
            <Box
              width={{ base: "5%", md: "7%", lg: "8%" }}
              fontSize={{ base: "12px", md: "12px", lg: "md" }}
            >
              <Text>PRICE</Text>
            </Box>
            <Box
              width={{ base: "5%", md: "15%", lg: "15%" }}
              fontSize={{ base: "12px", md: "12px", lg: "md" }}
            >
              <Text>BRAND</Text>
            </Box>
            <Box
              w={{ base: "5%", md: "13%", lg: "10%" }}
              fontSize={{ base: "12px", md: "12px", lg: "md" }}
            >
              <Text>STATUS</Text>
            </Box>
          </Box>
          {data.map((el) => (
            <ProductItem
              key={el.id}
              {...el}
              handleOpenDetails={handleOpenDetails}
              handleToggleStatus={handleToggleStatus}
            />
          ))}
        </SimpleGrid>
      </Box>

      {/* ``````````````````````````````````````````Modal`````````````````````````````````````` */}

      <Modal
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
        size={{ base: "sm", md: "md" }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Listing</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6} textAlign={"center"}>
            <Avatar size={"2xl"} src={image}></Avatar>
            <Box textAlign={"left"}>
              <Text p={"10px"} cursor={"pointer"} mt={"10px"}>
                ID-{mid}
              </Text>
              <Text mt={"10px"}>Image:- </Text>
              <Input
                border={"1px solid"}
                cursor={"pointer"}
                value={image}
                onChange={(e) => {
                  SetImage(e.target.value);
                  console.log(e.target.value);
                }}
              >
                {/* Title- {modalDetail.product_title} */}
              </Input>
              <Text mt={"10px"}>Title:- </Text>
              <Input
                border={"1px solid"}
                cursor={"pointer"}
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                  console.log(e.target.value);
                }}
              >
                {/* Title- {modalDetail.product_title} */}
              </Input>
              <Text mt={"10px"}>Price:- </Text>
              <Input
                border={"1px solid"}
                cursor={"pointer"}
                value={price}
                onChange={(e) => {
                  setPrice(e.target.value);
                  console.log(e.target.value);
                }}
              >
                {/* Price- Rs {Math.floor(Number(modalDetail.product_price) * 60)} */}
              </Input>
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => {
                handleSubmitModalDetails();
                onClose();
              }}
            >
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Products;
