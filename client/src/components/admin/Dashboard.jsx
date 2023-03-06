import {
  Box,
  Grid,
  GridItem,
  Heading,
  HStack,
  Text,
  Icon,
  Container,
  Stack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Header from "./Header";
import { TbMoneybag, TbShoppingBag } from "react-icons/tb";
import { MdPendingActions } from "react-icons/md";
import { VscServerProcess } from "react-icons/vsc";
import DashBoardRow from "./DashBoardRow";
import axios from "axios";
import { useEffect } from "react";
import Loader from "../products/Loader/Loader";

const Dashboard = () => {
const [totalProduct, setTotalProduct] = useState(0)
const [allProduct, setAllProduct]=useState(0)
const [allUsers, setAllUsers]= useState(0)
const [loader, setLoader] = useState(false)
const [stock, setStock] = useState(0)

 const getData = () => {
  //getting Total Product
   return axios.get(
     `https://ill-puce-bunny-cape.cyclic.app/api/products`
   );
 };
  const getUsers = () => {
    //getting All users
    return axios.get(`https://ill-puce-bunny-cape.cyclic.app/api/admin/users`);
  };
 useEffect(() => {
  setLoader(true)
   getData().then((res) => {
     //fetching only active data in backend
     let stock=res.data.data.reduce((acc,el)=>{return acc+el.inventory},0)
     setStock(stock);
     let updated = res.data.data.filter((el) => el.active);
     setTotalProduct(updated.length);
   
     setAllProduct(res.data.totalItems);
   });
     getUsers().then((res) => {
       setLoader(false);
       //fetching All active users 
       let updated = res.data;
       setAllUsers(updated.length);
    
     });
 },[])
console.log(stock)
  return (
    <Box>
      <Header title="DASHBOARD" sub="Welcome to your dashboard" />
      <br />
      {loader && loader ? (
        <Loader />
      ) : (
        <Grid
          w={"100%"}
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(4, 1fr)",
          }}
          gap={4}
          margin="auto"
        >
          {/*----------------------- Dsahboard Status---------------------------------------  */}

          <GridItem maxW={250} bgColor="#49720b" height={100} borderRadius={5}>
            <Heading size={"sm"} p={2} color="white">
              Total Active Product
            </Heading>
            <HStack justifyContent={"space-between"} pl="5" pr="5">
              <Heading size={"sm"} p={2} color="white">
                {totalProduct}
              </Heading>
              <Icon
                as={TbShoppingBag}
                w={15}
                h={15}
                color="white"
                boxSize={10}
                bgColor="#027bff"
                p={1}
                borderRadius="50%"
              />
            </HStack>
          </GridItem>
          <GridItem maxW={250} bgColor="#4aac9d" height={100} borderRadius={5}>
            <Heading size={"sm"} p={2} color="white">
              All Products
            </Heading>
            <HStack pl="5" pr="5" justifyContent={"space-between"}>
              <Heading size={"sm"} p={2} color="white">
                {allProduct}
              </Heading>
              <Icon
                as={MdPendingActions}
                w={15}
                h={15}
                color="white"
                boxSize={10}
                bgColor="#027bff"
                p={1}
                borderRadius="50%"
              />
            </HStack>
          </GridItem>

          <GridItem maxW={250} bgColor="#9c6576" height={100} borderRadius={5}>
            <Heading size={"sm"} p={2} color="white">
              All Active users
            </Heading>
            <HStack pl="5" pr="5" justifyContent={"space-between"}>
              <Heading size={"sm"} p={2} color="white">
                {allUsers}
              </Heading>
              <Icon
                as={TbMoneybag}
                w={15}
                h={15}
                color="white"
                boxSize={10}
                bgColor="#027bff"
                p={1}
                borderRadius="50%"
              />
            </HStack>
          </GridItem>
          <GridItem maxW={250} bgColor="#b1c51a" height={100} borderRadius={5}>
            <Heading size={"sm"} p={2} color="white">
              Products in Stock
            </Heading>
            <HStack pl="5" pr="5" justifyContent={"space-between"}>
              <Heading size={"sm"} p={2} color="white">
                {stock}
              </Heading>
              <Icon
                as={TbMoneybag}
                w={15}
                h={15}
                color="white"
                boxSize={10}
                bgColor="#027bff"
                p={1}
                borderRadius="50%"
              />
            </HStack>
          </GridItem>
        </Grid>
      )}

      {/*---------------------------------- Recent order Data-------------------- */}
      <Stack mt="20px">
        <Box>{/* <DashBoardRow /> */}</Box>
      </Stack>
    </Box>
  );
};

export default Dashboard;
