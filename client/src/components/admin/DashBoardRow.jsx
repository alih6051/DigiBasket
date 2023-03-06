import React, { useState } from 'react'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
  Icon,
  HStack,
  Select,
} from "@chakra-ui/react";
import { GrView } from "react-icons/gr";
import { FaCaretDown, FaRegEdit } from "react-icons/fa";
import { ChevronDownIcon } from '@chakra-ui/icons';
const DashBoardRow = () => {
const [status, setStatus] = useState("Pending");
const [order, setOrder] = useState([]);
//function to change status on changing select tag
 const handleStatus = (e) => {
   setStatus(e.target.value);
 };
 console.log(status)
  return (
    <TableContainer>
      <b> Recent Orders</b>
      <Table variant="striped" colorScheme="teal">
        <Thead bgColor={"#448AFF"}>
          <Tr>
            <Th color="white">Order ID</Th>
            <Th color="white">Order Date</Th>
            <Th color="white">Delivery Date</Th>
            <Th color="white">Status</Th>
            <Th color="white" isNumeric>
              Total
            </Th>
            <Th color="white">Action</Th>
          </Tr>
        </Thead>
        {/*------------------------ maping order data here------------------------- */}
        <Tbody>
          <Tr>
            <Td>1001</Td>
            <Td>10-03-2023</Td>
            <Td>10-03-2023</Td>
            <Td>{status}</Td>
            <Td isNumeric>5000</Td>
            <Td>
              {/* ---------------Select tag for changing status ------------------*/}
              <HStack>
                <Select
                  fontSize={"16px"}
                  height={"30px"}
                  maxW={"230px"}
                  size="xs"
                  bg={"whiteAlpha.400"}
                  border="1px solid #8a8076"
                  colorScheme={"#8a8076"}
                  focusBorderColor={"#84c225"}
                  icon={<FaCaretDown border="1px solid #84c225" />}
                  value={status}
                  onChange={handleStatus}
                >
                  <option>Update Status</option>
                  <option value={"Delivered"}>Delivered</option>
                  <option value={"Pending"}>Pending</option>
                  <option value={"Rejected"}>Rejected</option>
                  <option value={"Shiped"}>Shiped</option>
                </Select>
              </HStack>
            </Td>
          </Tr>
          <Tr>
            <Td>1002</Td>
            <Td>10-03-2023</Td>
            <Td>10-03-2023</Td>
            <Td>progress</Td>
            <Td isNumeric>7000</Td>
            <Td>
              <HStack>
                <Icon as={GrView} boxSize={3} color="#2f3937c7" />
                <Icon as={FaRegEdit} boxSize={3} color="#2f3937c7" />
              </HStack>
            </Td>
          </Tr>
          <Tr>
            <Td>1003</Td>
            <Td>10-03-2023</Td>
            <Td>10-03-2023</Td>
            <Td>progress</Td>
            <Td isNumeric>7000</Td>
            <Td>
              <HStack>
                <Icon as={GrView} boxSize={3} />
                <Icon as={FaRegEdit} boxSize={3} />
              </HStack>
            </Td>
          </Tr>
        </Tbody>
        <Tfoot>
          <Tr>
            <Td>1004</Td>
            <Td>10-03-2023</Td>
            <Td>10-03-2023</Td>
            <Td>progress</Td>
            <Td isNumeric>7000</Td>
            <Td>
              <HStack>
                <Icon as={GrView} boxSize={3} />
                <Icon as={FaRegEdit} boxSize={3} />
              </HStack>
            </Td>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
}

export default DashBoardRow
