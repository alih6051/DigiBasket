import { Box, Button, Heading, Input, Text } from "@chakra-ui/react";
import React from "react";

const VoucherSummary = () => {
  return (
    <Box border="1px gray solid" w="25%" mt={5} ml={10} h={300}>
      <Heading fontSize="md" mt={3} ml={3}>
        Apply Voucher
      </Heading>
      <Box>
        <Box ml={3} mt={5} display="flex">
          <Input w={250} size="sm" placeholder="Enter Voucher Code"></Input>
          <Button ml={3} size="sm">
            {" "}
            Apply{" "}
          </Button>
        </Box>
      </Box>
      <Heading fontSize="md" mt={3} ml={3} mb={2}>
        Order Summary
      </Heading>
      <Box bg="#f5f5f5" p={1} >
        <Box w="80%" m="auto"  bg="white" border="1px gray solid" mt={2}>
          <Box display="flex" m={4} justifyContent="space-between">
            <Text>Basket Value</Text>
            <Text>$ 243</Text>
          </Box>
          <Box display="flex" m={4} justifyContent="space-between">
            <Text>Delivery Charge</Text>
            <Text color="green">FREE</Text>
          </Box>
          <hr />
          <Box display="flex" m={4} justifyContent="space-between">
            <Text>Total Amount Payable</Text>
            <Text>$ 243</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default VoucherSummary;
