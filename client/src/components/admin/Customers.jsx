import React, { useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Box,
  Tr,
  Th,
  Td,
  TableContainer,
  Image,
} from "@chakra-ui/react";
import Header from "./Header";
import axios from "axios";

// Users Page
const Customers = () => {
  const [users, setUsers] = useState(0);
  const getUsers = () => {
    //getting All users
    return axios.get(`https://ill-puce-bunny-cape.cyclic.app/api/admin/users`);
  };
  useEffect(() => {
    getUsers().then((res) => {
      //fetching All active users
      let updated = res.data;
      setUsers(updated);
    });
  }, []);
  return (
    <Box>
      <Header title="CUSTOMERS" sub="List of Customers" />
      <TableContainer mt={3}>
        <b> Recent Orders</b>
        {/*------------------- User data Table---------------------- */}
        <Table colorScheme="linkedin">
          <Thead bgColor={"#448AFF"}>
            <Tr>
              <Th color="white">Avatar</Th>
              <Th color="white">Email ID</Th>
              <Th color="white">Name</Th>
            </Tr>
          </Thead>
          <Tbody>
            {users &&
              users.map((el) => (
                <Tr key={el._id}>
                  <Td>
                    <Image
                      src={el.avatar_url}
                      width={"50px"}
                      height={"50px"}
                      borderRadius={"50%"}
                      alt={el.name}
                    />
                  </Td>
                  <Td>{el.email}</Td>
                  <Td>{el.name}</Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Customers;
