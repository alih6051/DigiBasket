import { authReset } from "@/redux/authSlice";
import {
  Avatar,
  Box,
  Flex,
  HStack,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const UserProfile = () => {
  // REDUX
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <Box mr={5}>
      <Menu>
        <MenuButton>
          <Avatar src={user?.avatar_url} name={user?.name} size="sm" />
        </MenuButton>
        <MenuList>
          <MenuItem>{user?.email}</MenuItem>
          <MenuItem>Orders</MenuItem>
          <MenuDivider />
          <MenuItem onClick={() => dispatch(authReset())}>Sign Out</MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};

export default UserProfile;
