import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useDisclosure,
  VStack,
  useToast,
  Card,
  CardHeader,
  Heading,
  CardBody,
  CardFooter,
  Avatar,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { useState } from "react";
import { VscAccount } from "react-icons/vsc";
import { BsCart } from "react-icons/bs";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  authError,
  authLoading,
  authSuccess,
  createUserSuccess,
  authReset,
} from "@/redux/authSlice";

const NavbarAccount = () => {
  // Redux action
  const { loading, error, authState, token, user } = useSelector(
    (state) => state.auth
  );

  const { data } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const toast = useToast();

  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [signUpData, setSignUpData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleLoginDataChange = (e) => {
    setLoginData({ ...loginData, [e.target.type]: e.target.value });
  };

  const handleSignUpData = (e) => {
    setSignUpData({ ...signUpData, [e.target.type]: e.target.value });
  };

  const loginWithToken = (token) => {
    axios
      .get("https://enthusiastic-pink-scrubs.cyclic.app/getProfile", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        // console.log(res.data[0]);
        dispatch(authSuccess({ user: res.data[0], token: token }));
        onClose();
      })
      .catch((err) => console.log(err));
  };

  const handleLoginUser = () => {
    dispatch(authLoading());
    axios
      .post("https://enthusiastic-pink-scrubs.cyclic.app/login", loginData)
      .then(({ data }) => {
        toast({
          title: data.message,
          description: "You are Successfully Logged in.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        loginWithToken(data.token);
      })
      .catch((err) => {
        toast({
          title: "Invaild Email or Password",
          description: "Please check your Email and Password.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
        dispatch(authError());
      });
  };

  const handleCreateUser = () => {
    // setLoading(true);
    dispatch(authLoading());
    axios
      .post("https://enthusiastic-pink-scrubs.cyclic.app/signup", signUpData)
      .then((res) => {
        toast({
          title: "Account created.",
          description: "We've created your account for you.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        dispatch(createUserSuccess());
      })
      .catch((err) => {
        toast({
          title: "Email already registered.",
          description: "Please use another email address.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
        dispatch(authError());
      });
  };

  return (
    <Flex>
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="end"
        mr={5}
        onClick={onOpen}
        cursor="pointer"
      >
        <VscAccount fontSize="24px" />
        <Text fontSize="xs" mt={0}>
          {user.name || "Account"}
        </Text>
      </Flex>
      <Link href="/cart">
        <button style={{ position: "relative" }}>
          <VStack spacing={0} paddingTop="5px">
            <BsCart fontSize="24px" />
            <Text fontSize="xs">Cart</Text>
          </VStack>
          <div
            style={{
              position: "absolute",
              top: "0",
              left: "18px",
              fontSize: "15px",
              background: "#ff1f2c",
              color: "white",
              borderRadius: "50%",
              width: "22px",
              height: "22px",
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            {data.length}
          </div>
        </button>
      </Link>

      {/* Account Modal */}
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign={"center"}>
            {authState ? "ACCOUNT INFO" : "LOGIN/SIGNUP"}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {authState ? (
              <VStack spacing={5}>
                <Avatar
                  name={user.name}
                  src="https://bit.ly/broken-link"
                  size="xl"
                />
                <Text>{user.name}</Text>
                <Text>{user.email}</Text>
                <Button
                  w="100%"
                  colorScheme="red"
                  isLoading={loading}
                  loadingText="Logging In"
                  onClick={() => {
                    dispatch(authLoading());
                    setTimeout(() => {
                      dispatch(authReset());
                      onClose();
                    }, 1000);
                  }}
                >
                  Logout
                </Button>
              </VStack>
            ) : (
              <Tabs isLazy colorScheme={"gray"}>
                <TabList>
                  <Tab>LOGIN</Tab>
                  <Tab>SIGN UP</Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <VStack paddingY="20px" spacing={5}>
                      <FormControl isRequired>
                        <FormLabel>Email Address</FormLabel>
                        <Input
                          placeholder="Email"
                          type="email"
                          borderRadius="3px"
                          value={loginData.email}
                          onChange={(e) => handleLoginDataChange(e)}
                        />
                      </FormControl>
                      <FormControl isRequired>
                        <FormLabel>Password</FormLabel>
                        <Input
                          placeholder="Password"
                          type="password"
                          borderRadius="3px"
                          value={loginData.password}
                          onChange={(e) => handleLoginDataChange(e)}
                        />
                      </FormControl>
                      <Button
                        colorScheme="green"
                        variant="solid"
                        size="md"
                        width="100%"
                        borderRadius="3px"
                        isLoading={loading}
                        loadingText="Logging In"
                        onClick={handleLoginUser}
                      >
                        Sign In
                      </Button>
                    </VStack>
                  </TabPanel>
                  <TabPanel>
                    <VStack paddingY="20px" align="left" spacing={5}>
                      <FormControl isRequired>
                        <FormLabel>Name</FormLabel>
                        <Input
                          value={signUpData.name}
                          placeholder="Name"
                          borderRadius="3px"
                          onChange={(e) =>
                            setSignUpData({
                              ...signUpData,
                              name: e.target.value,
                            })
                          }
                        />
                      </FormControl>
                      <FormControl isRequired>
                        <FormLabel>Email Address</FormLabel>
                        <Input
                          placeholder="Email"
                          borderRadius="3px"
                          type="email"
                          value={signUpData.email}
                          onChange={(e) => handleSignUpData(e)}
                        />
                      </FormControl>
                      <Flex justifyContent="space-between">
                        <FormControl isRequired w="45%">
                          <FormLabel>Create Password</FormLabel>
                          <Input
                            placeholder="Password"
                            type="password"
                            onChange={(e) => handleSignUpData(e)}
                            value={signUpData.password}
                            borderRadius="3px"
                          />
                        </FormControl>
                        <FormControl isRequired w="45%">
                          <FormLabel>Confirm Password</FormLabel>
                          <Input
                            placeholder="Confirm Password"
                            type="password"
                            borderRadius="3px"
                          />
                        </FormControl>
                      </Flex>

                      <Button
                        colorScheme="blue"
                        size="md"
                        borderRadius="3px"
                        isLoading={loading}
                        loadingText="Submitting"
                        onClick={handleCreateUser}
                      >
                        Create Account
                      </Button>
                    </VStack>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            )}
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default NavbarAccount;
