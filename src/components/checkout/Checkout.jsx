import { updateTotal } from '@/redux/cartSlice';
import { Box, Button, Checkbox, Container, Divider, Flex, FormControl, FormLabel, Grid, GridItem, Heading, Image, Input, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { GoLocation } from 'react-icons/go'
import { useDispatch, useSelector } from 'react-redux';

const Checkoutcom = () => {
    const [total, setTotal] = React.useState(0);
    
    const {data} = useSelector(state => state.cart)
    const dispatch = useDispatch();
   
    React.useEffect(() => {
        let totalPrice = 0;
        data.forEach((item) => {
            totalPrice += item.price * item.quantity;
        });
        setTotal(totalPrice);
    }, [data]);

    

   

  return (
    <Box margin={"auto"} w="80%"   marginTop="20px"  marginBottom={"20px"}  >
        <Box marginBottom={"20px"}>
            <Flex justifyContent={"space-between"} alignItems="center">
            <Image
          src="https://www.bigbasket.com/static/v2626/common/img/bb_logo.png"
          alt="bigbasket Logo"
        />
        <Heading>8789436229</Heading>
            </Flex>
        </Box>
         <Divider/>

      <Grid  
        w={"100%"}
        
           templateColumns={{
             base: "repeat(1, 1fr)",
             md: "repeat(1, 1fr)",
             lg: "repeat(3, 1fr)",
           }}
           gap={4}
           margin="auto"
           marginTop={"20px"}
      >
     <GridItem 
     border={"1px solid #e8e8e8"}  
     p={4}
       colSpan={2}
       bg={"#f5f5f5"}
     >
        <Flex alignItems={"center"} gap={2} marginBottom="20px">
            <Heading><GoLocation/> </Heading>     
           <Heading>Delivery Address</Heading> 
        </Flex>
        <Text>Personal Details</Text>
        <Grid 
        gap={2}
        templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(1, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          marginBottom="20px"
         
        >
            
            <GridItem>
 <FormControl isRequired>
          <FormLabel>First name</FormLabel>
             <Input placeholder='First name' bg="white"/>
        </FormControl>
            </GridItem>

            <GridItem>
                   <FormControl isRequired>
          <FormLabel>Last name</FormLabel>
             <Input placeholder='Last name' bg="white"/>
        </FormControl>
            </GridItem>

            <GridItem>
                 <FormControl isRequired>
          <FormLabel> Enter contact number</FormLabel>
             <Input type="number" placeholder='Contact No' bg="white"/>
        </FormControl>
            </GridItem>
       
        </Grid>
        <Text>Address Details</Text>
        <Grid 
        gap={2}
        templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(1, 1fr)",
            lg: "repeat(2, 1fr)",
          }}
        >
            <GridItem>
 <FormControl isRequired>
          <FormLabel>House No</FormLabel>
             <Input placeholder='' bg="white"/>
        </FormControl>
            </GridItem>

            <GridItem>
                   <FormControl isRequired>
          <FormLabel>Enter apartment name</FormLabel>
             <Input placeholder='' bg="white"/>
        </FormControl>
            </GridItem>

            <GridItem>
                 <FormControl isRequired>
          <FormLabel>Enter street details</FormLabel>
             <Input placeholder='' bg="white"/>
        </FormControl>
            </GridItem>

            <GridItem>
                 <FormControl isRequired>
          <FormLabel>Enter landmark for easy reach out</FormLabel>
             <Input placeholder='' bg="white" />
        </FormControl>
            </GridItem>

            <GridItem>
                 <FormControl isRequired>
          <FormLabel>Enter city name</FormLabel>
             <Input placeholder='' bg="white"/>
        </FormControl>
            </GridItem>

            <GridItem>
                 <FormControl isRequired>
          <FormLabel>Enter Pincode</FormLabel>
             <Input type="number" placeholder='' bg="white" />
        </FormControl>
            </GridItem>
       
        </Grid>
       <Box marginTop="20px" >
        <Text marginBottom={"10px"}>Choose nick name for this address</Text>
        <Flex gap={4} marginBottom="10px">
            <Button border={"1px solid green"} color="green">HOME</Button>
            <Button>OFFICE</Button>
            <Button>OTHER</Button>

        </Flex>
        <Checkbox colorScheme='green' defaultChecked>
        Set this as my default delivery address
        </Checkbox>

       </Box>

       <Flex gap={4} marginTop="20px">
        <Button _hover={{backgroundColor:"gray.700"}} bg={"gray.600"} color="white">ADD ADDRESS</Button>
        <Button border={"1px solid gray"}>CANCEL</Button>

       </Flex>
       
     </GridItem>
      <GridItem 
      p={4}
      >
        <Box border={"1px solid #e8e8e8"} p={4} marginBottom="10px">
            <Text fontSize={"20px"} marginBottom="20px">Apply Voucher</Text>
       <Flex bg={"#f5f5f5"} p={4}>
       <Input 
       placeholder='Enter vocher code' 
       bg="white"
      
       
       />
       <Button 
       
       >Apply</Button>
      </Flex>
        </Box>

        <Box border={"1px solid #e8e8e8"} p={4}>
            <Text fontSize={"20px"} marginBottom="20px">Order Summary</Text>
       <Flex  marginBottom={"5px"} alignItems={"center"} justifyContent="space-between" bg={"#f5f5f5"} p={4}>
        <Text>Basket</Text>
        <Text>Rs</Text>
      </Flex>
      <Flex  marginBottom={"10px"} alignItems={"center"} justifyContent="space-between" bg={"#f5f5f5"} p={4}>
        <Text>Value</Text>
        <Text>{total}</Text>
      </Flex>

      <Flex  marginBottom={"10px"} alignItems={"center"} justifyContent="space-between" bg={"#f5f5f5"} p={4}>
        <Text>Delivery Charge</Text>
        <Text color="#91c81f" fontWeight={"bold"}>FREE</Text>
      </Flex>

      <Flex  marginBottom={"10px"} alignItems={"center"} justifyContent="space-between" bg={"#f5f5f5"} p={4}>
        <Text fontWeight={"bold"}>Total Amount Payable</Text>
        <Text fontWeight={"bold"}>RS {total}</Text>
      </Flex>

      <Flex    alignItems={"center"} justifyContent="space-between" p={4}   bg={"#edf6de"}>
        <Text fontWeight={"bold"} color="#91c81f">Total Savings</Text>
        <Text fontWeight={"bold"} color="#91c81f">RS   </Text>
      </Flex>
        </Box>
    
      </GridItem>
      
     
      </Grid>
    </Box>
  )
}

export default Checkoutcom