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
import React from "react";
import { GoLocation } from "react-icons/go";

const Checkout = () => {
  return (
    <div>
      <Box
        display="flex"
        justifyContent="space-between"
        ml={20}
        mt={5}
        mr={20}
        mb={5}
      >
        <Image
          src="https://www.bigbasket.com/static/v2626/common/img/bb_logo.png"
          alt="bigbasket Logo"
        />
        <Heading display="flex" flexDirection="column-reverse" color="gray.500">
          8094941896
        </Heading>
      </Box>
      <hr />
      <Box display="flex">
        <Box width="60%" ml={20} mt={5} border="1px gray solid" h="100vh">
          <Box ml={2} mt={5} mb={5} display="flex" gap={2}>
            <GoLocation style={{ marginTop: "5px" }}></GoLocation>
            <Heading size="md" fontWeight="20px">
              {" "}
              Delivery Address{" "}
            </Heading>
          </Box>
          <Box bg="#f5f5f5" width="98%" m="auto" border="1px red solid">
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
                  Enter Last Name
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
                  Enter Contact Number
                </span>
                <Input size="sm" w={350} bg="white"></Input>
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
                <Input size="sm" w={400} bg="white"></Input>
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
                <Input size="sm" bg="white" />
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
              >
                ADD ADDRESS
              </Button>
            </Box>
          </Box>
        </Box>
        <Box border="1px gray solid" w="25%" mt={5} ml={10} h={300}>
          <Heading fontSize="md" mt={3} ml={3} >Apply Voucher</Heading>
          <Box  >
                <Box ml={3} mt={5} display="flex" >
                    <Input w={250} size="sm" placeholder="Enter Voucher Code" ></Input>
                    <Button ml={3} size="sm" > Apply </Button>
                </Box>
          </Box>
          <Heading fontSize="md" mt={3} ml={3} >Order Summary</Heading>
          <Box>
            <Box display="flex" bg="#f5f5f5" m={4} justifyContent="space-between" > 
                <Text>Basket Value</Text>
                <Text>$ 243</Text>
            </Box>
            <Box display="flex" bg="#f5f5f5" m={4} justifyContent="space-between" > 
                <Text>Delivery Charge</Text>
                <Text color="green" >FREE</Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Checkout;
