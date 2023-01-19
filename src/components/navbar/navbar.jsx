import React from "react";
import styles from "./navbar.module.css";

import { BsFillHandbagFill, BsSearch, BsTelephone } from "react-icons/Bs";
import { TfiLocationPin } from "react-icons/Tfi";
import { SlArrowDown } from "react-icons/Sl";
import { FiUser } from "react-icons/Fi";
import { MdLocalOffer } from "react-icons/Md";
import logo from "../../assets/logo.png";

import {
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";

const Navbar = () => {
  return (
    <>
      <div className={styles.parent_container}>
        <div className={styles.child_container}>
          {/* nav top row */}
          <div className={styles.top_row}>
            <div className={styles.top_row_content}>
              <BsTelephone />{" "}
              <Text fontSize="13px" color="#666666">
                1860 123 1000
              </Text>
            </div>
            <div className={styles.top_row_content}>
              <TfiLocationPin />{" "}
              <Text fontSize="13px" color="#4A4A4A">
                560004,Bangalore
              </Text>{" "}
            </div>
            <div className={styles.top_row_content}>
              <FiUser />{" "}
              <Text fontSize="13px" color="#4A4A4A">
                Login/Sign Up
              </Text>
            </div>
          </div>
          {/* nav mid row */}
          <div className={styles.mid_row}>
            <div className={styles.mid_row_logo}>
              <div>
                <img src={logo.src} alt="h" />
              </div>
              <div></div>
            </div>
            <div className={styles.mid_row_input}>
              {/* <input type="text" placeholder='Search for Products..' /> */}
              <ChakraInput />
            </div>
            <div className={styles.mid_row_cart}>
              <BsFillHandbagFill size={40} color="#DB3236" />
              <div>
                <Text fontSize="13px" color="#4D4D4D">
                  My Basket
                </Text>
                <Text fontSize="13px" color="#4D4D4D">
                  0 Items
                </Text>
              </div>
            </div>
          </div>
          {/* nav bottom row */}
          <div className={styles.bottom_row}>
            <div className={styles.dropdown}>
              <Text as="b">SHOP BY CATEGORY</Text>
              <SlArrowDown />
            </div>
            <div className={styles.offers}>
              <MdLocalOffer color="#DB3236" />
              <Text>OFFERS</Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

// chakra input
function ChakraInput() {
  return (
    <InputGroup size="md" border="1px solid black">
      <Input pr="4.5rem" placeholder="Search for Products.." />
      <InputRightElement width="4.5rem">
        <Button h="1.75rem" size="sm" bg="#84c225">
          <BsSearch color="white" size={20} />
        </Button>
      </InputRightElement>
    </InputGroup>
  );
}
