import {
  Avatar,
  Box,
  Container,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import logo from "../../assets/logo.png";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { logoutAdmin } from "@/redux/adminSlice";
import Dashboard from "./Dashboard";
import Products from "./Products";
import Customers from "./Customers";


const AdminPanel = () => {
  // REDUX
  const { admin } = useSelector((state) => state.admin);
  const dispatch = useDispatch();

  return (
    <>
      <Box maxW="full">
        <Flex
          p={4}
          h="9vh"
          justifyContent="space-between"
          borderBottom="1px solid #edf2f7"
          position={"sticky"}
          top="0"
          bg="#fff"
          zIndex={"10"}
        >
          <Box>
            <Image src={logo.src} w={24} />
          </Box>
          <Menu>
            <MenuButton>
              <Flex alignItems="center" gap={3}>
                <Avatar size="sm" src={admin.avatar_url} name={admin.name} />
                <Box textAlign={"left"}>
                  <Text fontSize="sm" fontWeight="bold">
                    {admin.name}{" "}
                  </Text>
                  <Text fontSize="xs" color="gray.500">
                    Admin
                  </Text>
                </Box>
                <ChevronDownIcon />
              </Flex>
            </MenuButton>
            <MenuList>
              <MenuItem>Profile</MenuItem>
              <MenuItem>Setting</MenuItem>
              <MenuItem onClick={() => dispatch(logoutAdmin())}>
                Sign Out
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
        <Tabs orientation="vertical" minH="90vh" variant="unstyled">
          <TabList minW={270} borderRight="1px solid #edf2f7">
            <Tab _selected={{ color: "white", bg: "blue.500" }}>Dashboard</Tab>
            <Tab _selected={{ color: "white", bg: "blue.500" }}>Products</Tab>
            <Tab _selected={{ color: "white", bg: "blue.500" }}>Customers</Tab>
          </TabList>

          <TabPanels bg="#edf2f7" color="black">
            <TabPanel>
              <Dashboard />
            </TabPanel>
            <TabPanel>
              <Products />
            </TabPanel>
            <TabPanel>
              <Customers />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
      <hr />
    </>
  );
};

export default AdminPanel;
