import { loginAdmin } from "@/redux/adminSlice";
import {
  Button,
  Card,
  CardBody,
  Center,
  Divider,
  FormControl,
  FormLabel,
  HStack,
  Image,
  Input,
  Text,
  VStack,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import logo from "../../assets/logo.png";

const AdminLogin = () => {
  // REDUX
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const toast = useToast();

  // ADMIN USER
  const admin = {
    username: "admin",
    password: "admin",
  };

  const handleSignIn = () => {
    if (formData.username === "" || formData.password == "") {
      toast({
        title: `Please fill the details`,
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    } else if (
      formData.username === admin.username &&
      formData.password == admin.password
    ) {
      toast({
        title: `Signed in Successfully`,
        status: "success",
        duration: 2000,
        isClosable: true,
      });
      dispatch(
        loginAdmin({
          name: "Hasan",
          email: "authhasan@gmail.com",
          avatar_url: "https://avatars.githubusercontent.com/u/42648139?v=4",
        })
      );
    } else {
      toast({
        title: `Wrong Credentials`,
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  return (
    <Center height="100vh" bg="#edf2f7">
      <Card w={400}>
        <CardBody>
          <Center height="50px">
            <Text px={3}>Admin</Text>
            <Divider orientation="vertical" />
            <Image src={logo.src} w={24} px={3} />
          </Center>
          <FormControl>
            <FormLabel>Username</FormLabel>
            <Input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleFormChange}
            />
          </FormControl>
          <FormControl mt={2}>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleFormChange}
            />
          </FormControl>
          <Button
            colorScheme={"blue"}
            width="100%"
            mt={5}
            onClick={handleSignIn}
          >
            Sign In
          </Button>
        </CardBody>
      </Card>
    </Center>
  );
};

export default AdminLogin;
