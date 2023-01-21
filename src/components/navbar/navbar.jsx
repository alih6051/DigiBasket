import React from "react";
import styles from "./navbar.module.css";

import { BsFillHandbagFill, BsSearch, BsTelephone } from "react-icons/Bs";
import { TfiLocationPin } from "react-icons/Tfi";
import { SlArrowDown } from "react-icons/Sl";
import { FiUser } from "react-icons/Fi";
import { MdLocalOffer } from "react-icons/Md";
import { GiHamburgerMenu } from "react-icons/Gi"
import { AiOutlineShoppingCart } from "react-icons/ai";

import logo from "../../assets/logo.png";

import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";


const Navbar = () => {
 

  return (
    <>
    {/* responsive nav  */}
     <div className={styles.res_nav}>
      <div className={styles.res_icons}>
        <div><GiHamburgerMenu size={25} color="white"/></div>
        <div><FiUser size={25} color="white" /></div>
        <div><img style={{width:"40px",borderRadius:"10px"}} src={logo.src} alt="h" /></div>        
        <div><TfiLocationPin size={25} color="white" /></div>
        <div><AiOutlineShoppingCart size={25} color="white" /></div>
      </div>
      <div className={styles.res_input}>
      <InputGroup size="md" bg="white">
      <Input pr="4.5rem" placeholder="Search for Products.." />
      <InputRightElement width="4.5rem">
        <Button h="1.75rem" size="sm">
          <BsSearch color="black" size={20} />
        </Button>
      </InputRightElement>
    </InputGroup>
      </div>
     </div>


     {/* normal nav  */}
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
                <img style={{width:"60px",borderRadius:"10px"}} src={logo.src} alt="h" />
              </div>
              <div className={styles.logo_name}>
                <Text fontSize="2xl" color="red" as="b">Digi</Text>
                <Text fontSize="2xl" as="b">Basket</Text>
              </div>
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
              <div className={styles.dropdownBox}>
                <div className={styles.dropdown_child_div}>
                  <div><Text>Fruits and vegetables</Text></div>
                  <div><Text>Food Grains, Oil & Masala</Text></div>
                  <div><Text>Bakery, Cakes & Dairy</Text></div>
                  <div><Text>Beverages</Text></div>
                  <div><Text>Snacks & Branded Foods</Text></div>
                  <div><Text>Beauty & Hygiene</Text></div>
                  <div><Text>Cleaning & Household</Text></div>
                  <div><Text>Kitchen, Garden & Pets</Text></div>
                  <div><Text>Eggs, Meat & Fish</Text></div>
                  <div><Text>Gourmet & World Food</Text></div>
                  <div><Text>Baby Care</Text></div>
                  <div><Text>View All</Text></div>
                </div>
                <div className={styles.dropdown_child_div}>               
                <div><Text>Fresh Vegetables</Text></div>
                <div><Text>Herbs & Seasoning</Text></div>
                <div><Text>Fresh Fruits</Text></div>
                <div><Text>Organic Fruits & Vegetables</Text></div>
                <div><Text>Cuts & Sprouts</Text></div>
                <div><Text>Exotic Fruits & Veggies</Text></div>
                <div><Text>Flower Bouquets & Bunches</Text></div>
                                  
                </div>
                <div className={styles.dropdown_child_div}>
                  <div><Text>Potato, Onion & tomato</Text></div>
                  <div><Text>Cucumber & Capsicum</Text></div>
                  <div><Text>Leafy Vegetables</Text></div>
                  <div><Text>Root Vegetables</Text></div>
                  <div><Text>Beans, Brijals & Okra</Text></div>
                  <div><Text>Cabbage & Cauliflower</Text></div>
                  <div><Text>Gourd, Pumpkin, Drumstick</Text></div>
                  
                </div>
              </div>
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
    <InputGroup size="md">
      <Input pr="4.5rem" placeholder="Search for Products.." />
      <InputRightElement width="4.5rem">
        <Button h="1.75rem" size="sm" bg="#84c225">
          <BsSearch color="white" size={20} />
        </Button>
      </InputRightElement>
    </InputGroup>
  );
}


// chakra modal 
function DrawerExample() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
 
  return (
    <>
      <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
        Open
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder='Type here...' />
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}