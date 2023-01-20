import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import { GoLocation } from "react-icons/go";
import { useRouter } from 'next/router'
import VoucherSummary from "@/components/cart_checkout/VoucherSummary";
import CheckoutNavbar from "@/components/cart_checkout/CheckoutNavbar";

const Checkout = () => {
  const [fName,setFname] = useState("");
  const [lName,setLname] = useState("");
  const [contact,setContact] = useState("");
  const [street,setStreet] = useState("");
  const [city,setCity] = useState("");
  const [pin, setPin] = useState("");
  const router = useRouter()
  // const handleFname = (e) =>{
  //   setFname(e.target.value)
  // }

  const handleAddAddress = () =>{
    let obj = {
      id:Date.now(),
      fName:fName,
      lName:lName,
      contact:contact,
      street:street,
      pin:pin
    }
    axios.post("http://localhost:8080/checkout",obj);
    router.push('/payment')
  }
  
  return (
    <div>
      <CheckoutNavbar />
      <Box display="flex">
        <Box width="60%" ml={20} mt={5} border="1px gray solid" >
          <Box ml={2} mt={5} mb={5} display="flex" gap={2}>
            <GoLocation style={{ marginTop: "5px" }}></GoLocation>
            <Heading size="md" fontWeight="20px">
              {" "}
              Delivery Address{" "}
            </Heading>
          </Box>
          <Box bg="#f5f5f5" width="98%" m="auto">
            <Box ml={2} mt={5} mb={5}>
              {" "}
              Personal Details{" "}
            </Box>
            <Box display="flex">
              <Box display="flex" ml={2} flexDirection="column">
                <span
                  style={{
                    marginLeft: "1px",
                    marginBottom: "5px",
                    fontSize: "13px",
                  }}
                >
                  Enter First Name
                </span>
                <Input onChange={(e) => setFname(e.target.value)} size="sm" w={200} bg="white"></Input>
              </Box>
              <Box display="flex" ml={2} flexDirection="column">
                <span
                  style={{
                    marginLeft: "1px",
                    marginBottom: "5px",
                    fontSize: "13px",
                  }}
                >
                  Enter Last Name 
                </span>
                <Input onChange={(e) => setLname(e.target.value)} size="sm" w={200} bg="white"></Input>
              </Box>
              <Box display="flex" ml={2} flexDirection="column">
                <span
                  style={{
                    marginLeft: "1px",
                    marginBottom: "5px",
                    fontSize: "13px",
                  }}
                >
                  Enter Contact Number
                </span>
                <Input onChange={(e) => setContact(e.target.value)} size="sm" w={350} bg="white"></Input>
              </Box>
            </Box>
            <Box mt={5} mb={5} display="flex">
              <Box display="flex" ml={2} flexDirection="column">
                <span
                  style={{
                    marginLeft: "1px",
                    marginBottom: "5px",
                    fontSize: "13px",
                  }}
                >
                  House No
                </span>
                <Input size="sm" w={200} bg="white"></Input>
              </Box>

              <Box display="flex" ml={2} flexDirection="column">
                <span
                  style={{
                    marginLeft: "1px",
                    marginBottom: "5px",
                    fontSize: "13px",
                  }}
                >
                  Enter Apartment Name
                </span>
                <Input size="sm" w={560} bg="white"></Input>
              </Box>
            </Box>
            <Box mt={5} mb={5} display="flex">
              <Box display="flex" ml={2} flexDirection="column">
                <span
                  style={{
                    marginLeft: "1px",
                    marginBottom: "5px",
                    fontSize: "13px",
                  }}
                >
                  Enter Street Details
                </span>
                <Input onChange={(e) => setStreet(e.target.value)} size="sm" w={400} bg="white"></Input>
              </Box>

              <Box display="flex" ml={2} flexDirection="column">
                <span
                  style={{
                    marginLeft: "1px",
                    marginBottom: "5px",
                    fontSize: "13px",
                  }}
                >
                  Enter Landmark For Easy Reach Out
                </span>
                <Input size="sm" w={360} bg="white"></Input>
              </Box>
            </Box>
            <Box display="flex">
              <Box w={200} display="flex" ml={2} flexDirection="column">
                <span
                  style={{
                    marginLeft: "1px",
                    marginBottom: "5px",
                    fontSize: "13px",
                  }}
                >
                  Enter city name
                </span>
                <Select
                  size="sm"
                  bg="#f5f5f5"
                  color="black"
                  placeholder="Bangalore"
                >
                  <option value="option1">Jaipur</option>
                  <option value="option2">Mumbai</option>
                  <option value="option3">Hyderabad</option>
                  <option value="option3">Chennai</option>
                  <option value="option3">Kerala</option>
                  <option value="option3">Delhi</option>
                </Select>
              </Box>
              <Box w={360} display="flex" ml={2} flexDirection="column">
                <span
                  style={{
                    marginLeft: "1px",
                    marginBottom: "5px",
                    fontSize: "13px",
                  }}
                >
                  Area details
                </span>
                <Input size="sm" bg="white" />
              </Box>
              <Box w={185} display="flex" ml={2} flexDirection="column">
                <span
                  style={{
                    marginLeft: "1px",
                    marginBottom: "5px",
                    fontSize: "13px",
                  }}
                >
                  * Enter Pincode
                </span>
                <Input onChange={(e) => setPin(e.target.value)} size="sm" bg="white" />
              </Box>
            </Box>
            <Box mt={3} w={250} display="flex" ml={2} flexDirection="column">
              <span
                style={{
                  marginLeft: "1px",
                  marginBottom: "10px",
                  fontSize: "13px",
                }}
              >
                Choose nick name for this address
              </span>
              <Box>
                <Button border="1px gray solid" ml={1} bg="white" size="sm">
                  HOME
                </Button>
                <Button border="1px gray solid" ml={1} bg="white" size="sm">
                  OFFICE
                </Button>
                <Button border="1px gray solid" ml={1} bg="white" size="sm">
                  OTHER
                </Button>
              </Box>
              <Button
                w={150}
                border="1px gray solid"
                ml={1}
                mt={3}
                bg="#444"
                color="red"
                mb={10}
                size="sm"
                onClick={handleAddAddress}
              >
                ADD ADDRESS
              </Button>
            </Box>
          </Box>
        </Box>
        <VoucherSummary />
      </Box>
    </div>
  );
};

export default Checkout;
