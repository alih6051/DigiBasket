import React, { useEffect, useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/scrollbar';
import "swiper/css/navigation";
import { Navigation, Pagination, Autoplay,Scrollbar,A11y } from 'swiper';
import {
  Image,
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Show,
  Hide,
  Text,
  Center,
  Divider,
  IconButton,
  useBreakpointValue,
  Heading,
  UnorderedList,
  ListItem,
  Container,
} from "@chakra-ui/react";
import Cards from "../products/Cards/Cards";
import { CateIcons } from "@/assets/cl/eggs-meats-fish/eggsMeatsFish";
import axios from "axios";
import Veg from "./Veg";

const HomeCom = () => {
  let [data, setdata] = useState([])


useEffect(()=>{
axios
.get("http://localhost:8080/fruits-vegetables")
  .then((res) => setdata(res.data));
},[])



  return (
    <div>
      <Box w="100%" m={"auto"}>
        <Box marginBottom={"20px"}>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Image
                alt=""
                w={"full"}
                src="https://www.bigbasket.com/media/uploads/banner_images/YXHP144_hp_fom_m_bbpl-staples_460_160123_Bangalore.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                alt=""
                w={"full"}
                src="https://www.bigbasket.com/media/uploads/banner_images/HP_EMF_M_WeekdayBangalore-1600x460-160123.jpeg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                alt=""
                w={"full"}
                src="https://www.bigbasket.com/media/uploads/banner_images/hp_m_cmc_breakfast_460px-020122.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                alt=""
                w={"full"}
                src="https://www.bigbasket.com/media/uploads/banner_images/hp_wedding-brida_EP_1600x460px-020122.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                alt=""
                w={"full"}
                src="https://www.bigbasket.com/media/uploads/banner_images/hp_m_bcd_paneer_460px-020122.jpg"
              />
            </SwiperSlide>
          </Swiper>
        </Box>
        <Container maxW="6xl">
          <Box marginBottom="20px">
            <Hide below="md">
              <Box marginBottom={"20px"} maxW="6xl" margin={"auto"}>
                <Swiper
                  slidesPerView={6}
                  spaceBetween={30}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <Button bg={"#e8e8e8"} w={"100%"} h={"65px"}>
                      <Center display="block">
                        <Text color={"black"} fontWeight="bold">
                          EGGS, MEAT
                        </Text>
                        <Text color={"black"} fontWeight="bold">
                          AND FISH
                        </Text>
                      </Center>
                    </Button>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Button w="100%" h={"65px"}>
                      <Image
                        vertical-align="middle"
                        w="100%"
                        h="100%"
                        src="https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_251122_02.png"
                        alt="pro"
                      />
                    </Button>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Button bg={"#4c6020"} w={"100%"} h={"65px"}>
                      <Text color={"white"} fontWeight="bold">
                        AYURVEDA
                      </Text>
                    </Button>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Button bg={"#e8e8e8"} w={"100%"} h={"65px"}>
                      <Center display="block">
                        <Text color={"black"} fontWeight="bold">
                          BUY MORE
                        </Text>
                        <Text color={"black"} fontWeight="bold">
                          SAVE MORE
                        </Text>
                      </Center>
                    </Button>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Button bg={"#e8e8e8"} w={"100%"} h={"65px"}>
                      <Center display="block">
                        <Text color={"black"} fontWeight="bold">
                          DEALS
                        </Text>
                        <Text color={"black"} fontWeight="bold">
                          OF THE WEEK
                        </Text>
                      </Center>
                    </Button>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Button bg={"#e8e8e8"} w={"100%"} h={"65px"}>
                      <Text color={"black"} fontWeight="bold">
                        COMBO STORE
                      </Text>
                    </Button>
                  </SwiperSlide>
                </Swiper>
              </Box>
            </Hide>
            <Hide breakpoint="(min-width: 762px)">
              <Show breakpoint="(min-width: 416px)">
                <Box marginBottom={"20px"} w={"96%"} margin="auto">
                  <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                      clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                      <Button bg={"#e8e8e8"} w={"100%"} h={"65px"}>
                        <Center display="block">
                          <Text color={"black"} fontWeight="bold">
                            EGGS, MEAT
                          </Text>
                          <Text color={"black"} fontWeight="bold">
                            AND FISH
                          </Text>
                        </Center>
                      </Button>
                    </SwiperSlide>
                    <SwiperSlide>
                      <Button w="100%" h={"65px"}>
                        <Image
                          vertical-align="middle"
                          w="100%"
                          h="100%"
                          src="https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_251122_02.png"
                          alt="pro"
                        />
                      </Button>
                    </SwiperSlide>
                    <SwiperSlide>
                      <Button bg={"#4c6020"} w={"100%"} h={"65px"}>
                        <Text color={"white"} fontWeight="bold">
                          AYURVEDA
                        </Text>
                      </Button>
                    </SwiperSlide>
                    <SwiperSlide>
                      <Button bg={"#e8e8e8"} w={"100%"} h={"65px"}>
                        <Center display="block">
                          <Text color={"black"} fontWeight="bold">
                            BUY MORE
                          </Text>
                          <Text color={"black"} fontWeight="bold">
                            SAVE MORE
                          </Text>
                        </Center>
                      </Button>
                    </SwiperSlide>
                    <SwiperSlide>
                      <Button bg={"#e8e8e8"} w={"100%"} h={"65px"}>
                        <Center display="block">
                          <Text color={"black"} fontWeight="bold">
                            DEALS
                          </Text>
                          <Text color={"black"} fontWeight="bold">
                            OF THE WEEK
                          </Text>
                        </Center>
                      </Button>
                    </SwiperSlide>
                    <SwiperSlide>
                      <Button bg={"#e8e8e8"} w={"100%"} h={"65px"}>
                        <Text color={"black"} fontWeight="bold">
                          COMBO STORE
                        </Text>
                      </Button>
                    </SwiperSlide>
                  </Swiper>
                </Box>
              </Show>
            </Hide>

            <Show breakpoint="(max-width: 415px)">
              <Box marginBottom={"20px"} w={"100%"} margin={"auto"}>
                <Swiper
                  slidesPerView={2}
                  spaceBetween={30}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <Button bg={"#e8e8e8"} w={"100%"} h={"65px"}>
                      <Center display="block">
                        <Text color={"black"} fontWeight="bold">
                          EGGS, MEAT
                        </Text>
                        <Text color={"black"} fontWeight="bold">
                          AND FISH
                        </Text>
                      </Center>
                    </Button>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Button w="100%" h={"65px"}>
                      <Image
                        vertical-align="middle"
                        w="100%"
                        h="100%"
                        src="https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_251122_02.png"
                        alt="pro"
                      />
                    </Button>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Button bg={"#4c6020"} w={"100%"} h={"65px"}>
                      <Text color={"white"} fontWeight="bold">
                        AYURVEDA
                      </Text>
                    </Button>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Button bg={"#e8e8e8"} w={"100%"} h={"65px"}>
                      <Center display="block">
                        <Text color={"black"} fontWeight="bold">
                          BUY MORE
                        </Text>
                        <Text color={"black"} fontWeight="bold">
                          SAVE MORE
                        </Text>
                      </Center>
                    </Button>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Button bg={"#e8e8e8"} w={"100%"} h={"65px"}>
                      <Center display="block">
                        <Text color={"black"} fontWeight="bold">
                          DEALS
                        </Text>
                        <Text color={"black"} fontWeight="bold">
                          OF THE WEEK
                        </Text>
                      </Center>
                    </Button>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Button bg={"#e8e8e8"} w={"100%"} h={"65px"}>
                      <Text color={"black"} fontWeight="bold">
                        COMBO STORE
                      </Text>
                    </Button>
                  </SwiperSlide>
                </Swiper>
              </Box>
            </Show>
          </Box>

          <Box marginBottom={"20px"}>
          <Box borderBottom={"1px solid #e8e8e8"} marginBottom="20px">
              <Text fontSize={"30px"} textAlign={"center"}>
              My Smart Basket
              </Text>
            </Box>
            <Box  marginBottom={"20px"} maxW="6xl" margin={"auto"}>
            <Hide breakpoint="(max-width: 763px)">
              <Swiper
         modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
         spaceBetween={40}
         slidesPerView={5}
         navigation
         pagination={{ clickable: true }}
         scrollbar={{ draggable: false }}
        
      >
         {
                 data.map((item) => (
                     
                    <SwiperSlide key={item.id}> 
                               <Cards
                    key={item.id}
                    data={item}
                    cateicons={CateIcons.veg}
                  />      
                        </SwiperSlide>
                        
                   
                ))
             }
        
      </Swiper>
            </Hide>
         </Box>

            <Hide breakpoint="(min-width: 762px)">
              <Show breakpoint="(min-width: 416px)">
              <Box marginBottom={"20px"} w={"100%"} margin="auto">     
              <Swiper
         modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
         spaceBetween={50}
         slidesPerView={3}
         navigation
         pagination={{ clickable: true }}
         scrollbar={{ draggable: false }}
        
      >
         {
                 data.map((item) => (
                     
                    <SwiperSlide key={item.id}> 
                               <Cards
                    key={item.id}
                    data={item}
                    cateicons={CateIcons.veg}
                  />      
                        </SwiperSlide>
                        
                   
                ))
             }
        
              </Swiper>
            </Box>
                </Show>
                </Hide>

                <Show breakpoint="(max-width: 415px)">
               <Box  marginBottom={"20px"} w={"100%"} margin={"auto"}>
                <Swiper
         modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        
         slidesPerView={2}
         
         navigation
         pagination={{ clickable: true }}
         scrollbar={{ draggable: false }}
        
      >
         {
                 data.map((item) => (
                     
                    <SwiperSlide key={item.id}> 
                               <Cards
                    key={item.id}
                    data={item}
                    cateicons={CateIcons.veg}
                  />      
                        </SwiperSlide>
                        
                   
                ))
             }
        
             </Swiper>
               </Box>
                </Show>

          </Box>

          <Box marginBottom={"30px"}>
            <Box borderBottom={"1px solid #e8e8e8"} marginBottom="20px">
              <Text fontSize={"30px"} textAlign={"center"}>
                Bank Offers
              </Text>
            </Box>

            <Grid
              w={"100%"}
              templateColumns={{
                base: "repeat(2, 1fr)",
                md: "repeat(2, 1fr)",
                lg: "repeat(4, 1fr)",
              }}
              gap={4}
              margin="auto"
            >
              <GridItem
                border={"1px solid #e8e8e8"}
                _hover={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
              >
                <Image
                  w="100%"
                  src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/c180fc98-bbcd-4dba-9bad-65fc5dca26e6/t1_hp_aff_m_onecard_360_160123.jpg"
                  alt="pro"
                />
              </GridItem>
              <GridItem
                border={"1px solid #e8e8e8"}
                _hover={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
              >
                <Image
                  w="100%"
                  src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/c180fc98-bbcd-4dba-9bad-65fc5dca26e6/t1_hp_aff_m_hsbc_360_160123.jpg"
                  alt="pro"
                />
              </GridItem>
              <GridItem
                border={"1px solid #e8e8e8"}
                _hover={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
              >
                <Image
                  w="100%"
                  src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/c180fc98-bbcd-4dba-9bad-65fc5dca26e6/t1_hp_aff_m_indusind-500_360_160123.jpg"
                  alt="pro"
                />
              </GridItem>
              <GridItem
                border={"1px solid #e8e8e8"}
                _hover={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
              >
                <Image
                  w="100%"
                  src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/c180fc98-bbcd-4dba-9bad-65fc5dca26e6/t1_hp_aff_m_paytm-wallet_360_160123.jpg"
                  alt="pro"
                />
              </GridItem>
            </Grid>
          </Box>



        <Veg/>
          
          <Box marginBottom="30px">
            <Box borderBottom={"1px solid #e8e8e8"} marginBottom="20px">
              <Text fontSize={"30px"} textAlign={"center"}>
                Most Popular
              </Text>
            </Box>
            <Grid
              w={"100%"}
              templateColumns={{
                base: "repeat(2, 1fr)",
                md: "repeat(2, 1fr)",
                lg: "repeat(4, 1fr)",
              }}
              gap={4}
              margin="auto"
            >
              <GridItem
                border={"1px solid #e8e8e8"}
                _hover={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
              >
                <Image
                  w="100%"
                  src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/52baa9db-3a18-48de-9d19-31ded0c30604/hp_winter-mostpopularStorefront_m_480_251222_01.jpg"
                  alt="pro"
                />
              </GridItem>
              <GridItem
                border={"1px solid #e8e8e8"}
                _hover={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
              >
                <Image
                  w="100%"
                  src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/52baa9db-3a18-48de-9d19-31ded0c30604/hp_stationy-mostpopularStorefront_m_480_251222_02.jpg"
                  alt="pro"
                />
              </GridItem>
              <GridItem
                border={"1px solid #e8e8e8"}
                _hover={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
              >
                <Image
                  w="100%"
                  src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/52baa9db-3a18-48de-9d19-31ded0c30604/hp_winter-loc-mostpopularStorefront_m_480_251222_03.jpg"
                  alt="pro"
                />
              </GridItem>
              <GridItem
                border={"1px solid #e8e8e8"}
                _hover={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
              >
                <Image
                  w="100%"
                  src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/52baa9db-3a18-48de-9d19-31ded0c30604/hp_say-mostpopularStorefront_m_480_251222_04.jpg"
                  alt="pro"
                />
              </GridItem>
            </Grid>
          </Box>

          <Box marginBottom="30px">
            <Box borderBottom={"1px solid #e8e8e8"} marginBottom="20px">
              <Text fontSize={"30px"} textAlign={"center"}>
                Top Offers
              </Text>
            </Box>
            <Grid
              w={"100%"}
              templateColumns={{
                base: "repeat(2, 1fr)",
                md: "repeat(2, 1fr)",
                lg: "repeat(4, 1fr)",
              }}
              gap={4}
              margin="auto"
            >
              <GridItem
                border={"1px solid #e8e8e8"}
                _hover={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
              >
                <Image
                  w="100%"
                  src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/eae9b0cd-6588-4f6c-9204-a9c0c578a38f/hp_dow-topoffersStorefront_m_480_251222_01.jpg"
                  alt="pro"
                />
              </GridItem>
              <GridItem
                border={"1px solid #e8e8e8"}
                _hover={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
              >
                <Image
                  w="100%"
                  src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/eae9b0cd-6588-4f6c-9204-a9c0c578a38f/hp_big-packs-topoffersStorefront_m_480_251222_02.jpg"
                  alt="pro"
                />
              </GridItem>
              <GridItem
                border={"1px solid #e8e8e8"}
                _hover={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
              >
                <Image
                  w="100%"
                  src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/eae9b0cd-6588-4f6c-9204-a9c0c578a38f/hp_combos-topoffersStorefront_m_480_251222_03.jpg"
                  alt="pro"
                />
              </GridItem>
              <GridItem
                border={"1px solid #e8e8e8"}
                _hover={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
              >
                <Image
                  w="100%"
                  src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/eae9b0cd-6588-4f6c-9204-a9c0c578a38f/hp_30-corner-topoffersStorefront_m_480_251222_04.jpg"
                  alt="pro"
                />
              </GridItem>
            </Grid>
          </Box>

          <Box marginBottom={"30px"}>
            <Hide below="lg">
              <Box>
                <Box borderBottom={"1px solid #e8e8e8"} marginBottom="20px">
                  <Text fontSize={"30px"} textAlign={"center"}>
                    Fruits & Vegetables
                  </Text>
                </Box>

                <Grid
                  w={"100%"}
                  templateColumns={{
                    base: "repeat(2, 1fr)",
                    md: "repeat(3, 1fr)",
                    lg: "repeat(6, 1fr)",
                  }}
                  gap={4}
                  margin="auto"
                >
                  <GridItem
                    border={"1px solid #e8e8e8"}
                    _hover={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
                  >
                    <Image
                      w="100%"
                      src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/ed8bac1c-1a43-4a1b-837f-6ab9c9058268/hp_organic-fnc-fnv_Storefront_m_251222_01.jpg"
                      alt="pro"
                    />
                  </GridItem>
                  <GridItem
                    border={"1px solid #e8e8e8"}
                    _hover={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
                  >
                    <Image
                      w="100%"
                      src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/ed8bac1c-1a43-4a1b-837f-6ab9c9058268/hp_fresh-fruits-fnv_Storefront_m_251222_02.jpg"
                      alt="pro"
                    />
                  </GridItem>
                  <GridItem
                    border={"1px solid #e8e8e8"}
                    _hover={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
                  >
                    <Image
                      w="100%"
                      src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/ed8bac1c-1a43-4a1b-837f-6ab9c9058268/hp_fresh-vegetables-fnv_Storefront_m_251222_03.jpg"
                      alt="pro"
                    />
                  </GridItem>
                  <GridItem
                    border={"1px solid #e8e8e8"}
                    _hover={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
                  >
                    <Image
                      w="100%"
                      src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/ed8bac1c-1a43-4a1b-837f-6ab9c9058268/hp_cuts-sprouts-fnv_Storefront_m_251222_04.jpg"
                      alt="pro"
                    />
                  </GridItem>
                  <GridItem
                    border={"1px solid #e8e8e8"}
                    _hover={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
                  >
                    <Image
                      w="100%"
                      src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/ed8bac1c-1a43-4a1b-837f-6ab9c9058268/hp_exotic-fruits-fnv_Storefront_m_251222_05.jpg"
                      alt="pro"
                    />
                  </GridItem>
                  <GridItem
                    border={"1px solid #e8e8e8"}
                    _hover={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
                  >
                    <Image
                      w="100%"
                      src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/ed8bac1c-1a43-4a1b-837f-6ab9c9058268/hp_herbs-seasonings-fnv_Storefront_m_251222_06.jpg"
                      alt="pro"
                    />
                  </GridItem>
                </Grid>
              </Box>
            </Hide>

            <Hide breakpoint="(min-width: 991px)">
              <Show breakpoint="(min-width: 416px)">
                <Box>
                  <Box borderBottom={"1px solid #e8e8e8"} marginBottom="20px">
                    <Text fontSize={"30px"} textAlign={"center"}>
                      Fruits & Vegetables
                    </Text>
                  </Box>

                  <Grid
                    w={"100%"}
                    templateColumns={{
                      base: "repeat(3, 1fr)",
                      md: "repeat(3, 1fr)",
                    }}
                    gap={4}
                    margin="auto"
                  >
                    <GridItem
                      border={"1px solid #e8e8e8"}
                      _hover={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
                    >
                      <Image
                        w="100%"
                        src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/ed8bac1c-1a43-4a1b-837f-6ab9c9058268/hp_organic-fnc-fnv_Storefront_m_251222_01.jpg"
                        alt="pro"
                      />
                    </GridItem>
                    <GridItem
                      border={"1px solid #e8e8e8"}
                      _hover={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
                    >
                      <Image
                        w="100%"
                        src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/ed8bac1c-1a43-4a1b-837f-6ab9c9058268/hp_fresh-fruits-fnv_Storefront_m_251222_02.jpg"
                        alt="pro"
                      />
                    </GridItem>
                    <GridItem
                      border={"1px solid #e8e8e8"}
                      _hover={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
                    >
                      <Image
                        w="100%"
                        src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/ed8bac1c-1a43-4a1b-837f-6ab9c9058268/hp_fresh-vegetables-fnv_Storefront_m_251222_03.jpg"
                        alt="pro"
                      />
                    </GridItem>
                  </Grid>
                </Box>
              </Show>
            </Hide>

            <Show breakpoint="(max-width: 415px)">
              <Box>
                <Box borderBottom={"1px solid #e8e8e8"} marginBottom="20px">
                  <Text fontSize={"30px"} textAlign={"center"}>
                    Fruits & Vegetables
                  </Text>
                </Box>
                <Grid
                  w={"100%"}
                  templateColumns={{
                    base: "repeat(2, 1fr)",
                    md: "repeat(2, 1fr)",
                  }}
                  gap={4}
                  margin="auto"
                >
                  <GridItem
                    border={"1px solid #e8e8e8"}
                    _hover={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
                  >
                    <Image
                      w="100%"
                      src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/ed8bac1c-1a43-4a1b-837f-6ab9c9058268/hp_organic-fnc-fnv_Storefront_m_251222_01.jpg"
                      alt="pro"
                    />
                  </GridItem>
                  <GridItem
                    border={"1px solid #e8e8e8"}
                    _hover={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
                  >
                    <Image
                      w="100%"
                      src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/ed8bac1c-1a43-4a1b-837f-6ab9c9058268/hp_fresh-fruits-fnv_Storefront_m_251222_02.jpg"
                      alt="pro"
                    />
                  </GridItem>
                </Grid>
              </Box>
            </Show>
          </Box>

          <Box marginBottom={"30px"}>
            <Hide below="lg">
              <Box>
                <Box borderBottom={"1px solid #e8e8e8"} marginBottom="20px">
                  <Text fontSize={"30px"} textAlign={"center"}>
                    Your Daily Staples
                  </Text>
                </Box>

                <Grid
                  w={"100%"}
                  templateColumns={{
                    base: "repeat(2, 1fr)",
                    md: "repeat(3, 1fr)",
                    lg: "repeat(6, 1fr)",
                  }}
                  gap={4}
                  margin="auto"
                >
                  <GridItem
                    border={"1px solid #e8e8e8"}
                    _hover={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
                  >
                    <Image
                      w="100%"
                      src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/d9f84366-1b86-4c62-ac86-56d6a33da6b3/hp_atta-flour-staplesStorefront_m_480_251222_01.jpg"
                      alt="pro"
                    />
                  </GridItem>
                  <GridItem
                    border={"1px solid #e8e8e8"}
                    _hover={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
                  >
                    <Image
                      w="100%"
                      src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/d9f84366-1b86-4c62-ac86-56d6a33da6b3/hp_rice-staplesStorefront_m_480_251222_02.jpg"
                      alt="pro"
                    />
                  </GridItem>
                  <GridItem
                    border={"1px solid #e8e8e8"}
                    _hover={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
                  >
                    <Image
                      w="100%"
                      src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/d9f84366-1b86-4c62-ac86-56d6a33da6b3/hp_dals-pulses-staplesStorefront_m_480_251222_03.jpg"
                      alt="pro"
                    />
                  </GridItem>
                  <GridItem
                    border={"1px solid #e8e8e8"}
                    _hover={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
                  >
                    <Image
                      w="100%"
                      src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/d9f84366-1b86-4c62-ac86-56d6a33da6b3/hp_cooking-oils-staplesStorefront_m_480_251222_04.jpg"
                      alt="pro"
                    />
                  </GridItem>
                  <GridItem
                    border={"1px solid #e8e8e8"}
                    _hover={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
                  >
                    <Image
                      w="100%"
                      src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/d9f84366-1b86-4c62-ac86-56d6a33da6b3/hp_dry-fruits-staplesStorefront_m_480_251222_05.jpg"
                      alt="pro"
                    />
                  </GridItem>
                  <GridItem
                    border={"1px solid #e8e8e8"}
                    _hover={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
                  >
                    <Image
                      w="100%"
                      src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/d9f84366-1b86-4c62-ac86-56d6a33da6b3/hp_salt-staplesStorefront_m_480_251222_06.jpg"
                      alt="pro"
                    />
                  </GridItem>
                </Grid>
              </Box>
            </Hide>

            <Hide breakpoint="(min-width: 991px)">
              <Show breakpoint="(min-width: 416px)">
                <Box marginBottom={"30px"}>
                  <Box borderBottom={"1px solid black"} marginBottom="20px">
                    <Text fontSize={"30px"} textAlign={"center"}>
                      Your Daily Staples
                    </Text>
                  </Box>

                  <Grid
                    w={"100%"}
                    templateColumns={{
                      base: "repeat(3, 1fr)",
                      md: "repeat(3, 1fr)",
                    }}
                    gap={4}
                    margin="auto"
                  >
                    <GridItem
                      border={"1px solid #e8e8e8"}
                      _hover={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
                    >
                      <Image
                        w="100%"
                        src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/d9f84366-1b86-4c62-ac86-56d6a33da6b3/hp_atta-flour-staplesStorefront_m_480_251222_01.jpg"
                        alt="pro"
                      />
                    </GridItem>
                    <GridItem
                      border={"1px solid #e8e8e8"}
                      _hover={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
                    >
                      <Image
                        w="100%"
                        src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/d9f84366-1b86-4c62-ac86-56d6a33da6b3/hp_rice-staplesStorefront_m_480_251222_02.jpg"
                        alt="pro"
                      />
                    </GridItem>
                    <GridItem
                      border={"1px solid #e8e8e8"}
                      _hover={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
                    >
                      <Image
                        w="100%"
                        src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/d9f84366-1b86-4c62-ac86-56d6a33da6b3/hp_dals-pulses-staplesStorefront_m_480_251222_03.jpg"
                        alt="pro"
                      />
                    </GridItem>
                  </Grid>
                </Box>
              </Show>
            </Hide>

            <Show breakpoint="(max-width: 415px)">
              <Box>
                <Box borderBottom={"1px solid #e8e8e8"} marginBottom="20px">
                  <Text fontSize={"30px"} textAlign={"center"}>
                    Your Daily Staples
                  </Text>
                </Box>
                <Grid
                  w={"100%"}
                  templateColumns={{
                    base: "repeat(2, 1fr)",
                    md: "repeat(2, 1fr)",
                  }}
                  gap={4}
                  margin="auto"
                >
                  <GridItem
                    border={"1px solid #e8e8e8"}
                    _hover={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
                  >
                    <Image
                      w="100%"
                      src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/d9f84366-1b86-4c62-ac86-56d6a33da6b3/hp_atta-flour-staplesStorefront_m_480_251222_01.jpg"
                      alt="pro"
                    />
                  </GridItem>
                  <GridItem
                    border={"1px solid #e8e8e8"}
                    _hover={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
                  >
                    <Image
                      w="100%"
                      src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/d9f84366-1b86-4c62-ac86-56d6a33da6b3/hp_rice-staplesStorefront_m_480_251222_02.jpg"
                      alt="pro"
                    />
                  </GridItem>
                </Grid>
              </Box>
            </Show>
          </Box>

          <Box marginBottom={"30px"}>
            <Box borderBottom={"1px solid #e8e8e8"} marginBottom="20px">
              <Text fontSize={"30px"} textAlign={"center"}>
                Beverages
              </Text>
            </Box>

            <Grid
              w={"100%"}
              templateColumns={{
                base: "repeat(1, 1fr)",
                md: "repeat(1, 1fr)",
                lg: "repeat(2, 1fr)",
              }}
              gap={4}
              margin="auto"
            >
              <GridItem
                border={"1px solid #e8e8e8"}
                _hover={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
              >
                <Image
                  src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/b56c687b-2a6f-407b-833d-2c0ce81369de/hp_power-booster-beveragesStorefront_m_251222_560x378_01.jpg"
                  alt="pro"
                />
              </GridItem>
              <GridItem>
                <Grid
                  templateColumns={{
                    base: "repeat(2, 1fr)",
                    md: "repeat(2, 1fr)",
                    lg: "repeat(2, 1fr)",
                  }}
                  gap={4}
                  margin="auto"
                >
                  <GridItem
                    border={"1px solid #e8e8e8"}
                    _hover={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
                  >
                    <Image
                      src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/b56c687b-2a6f-407b-833d-2c0ce81369de/hp_tea-beveragesStorefront_m_251222_275x184_02.jpg"
                      alt="pro"
                    />
                  </GridItem>
                  <GridItem
                    border={"1px solid #e8e8e8"}
                    _hover={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
                  >
                    <Image
                      src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/b56c687b-2a6f-407b-833d-2c0ce81369de/hp_fruity-beveragesStorefront_m_251222_275x184_04.jpg"
                      alt="pro"
                    />
                  </GridItem>
                  <GridItem
                    border={"1px solid #e8e8e8"}
                    _hover={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
                  >
                    <Image
                      src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/b56c687b-2a6f-407b-833d-2c0ce81369de/hp_fruity-beveragesStorefront_m_251222_275x184_04.jpg"
                      alt="pro"
                    />
                  </GridItem>
                  <GridItem
                    border={"1px solid #e8e8e8"}
                    _hover={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
                  >
                    <Image
                      src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/b56c687b-2a6f-407b-833d-2c0ce81369de/hp_soft-drinks-beveragesStorefront_m_251222_275x184_05.jpg"
                      alt="pro"
                    />
                  </GridItem>
                </Grid>
              </GridItem>
            </Grid>
          </Box>

          <Box marginBottom={"30px"}>
            <Hide below="lg">
              <Box>
                <Box borderBottom={"1px solid #e8e8e8"} marginBottom="20px">
                  <Text fontSize={"30px"} textAlign={"center"}>
                    Snack Store
                  </Text>
                </Box>

                <Grid
                  w={"100%"}
                  templateColumns={{
                    base: "repeat(2, 1fr)",
                    md: "repeat(3, 1fr)",
                    lg: "repeat(6, 1fr)",
                  }}
                  gap={4}
                  margin="auto"
                >
                  <GridItem
                    border={"1px solid #e8e8e8"}
                    _hover={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
                  >
                    <Image
                      w="100%"
                      src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/6dab85b0-1718-4306-8be4-0fa697be1c38/hp_namkeens-snacksStorefront_m_480_251022_01.jpg"
                      alt="pro"
                    />
                  </GridItem>
                  <GridItem
                    border={"1px solid #e8e8e8"}
                    _hover={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
                  >
                    <Image
                      w="100%"
                      src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/6dab85b0-1718-4306-8be4-0fa697be1c38/hp_frozen-snacks-snacksStorefront_m_480_251022_02.jpg"
                      alt="pro"
                    />
                  </GridItem>
                  <GridItem
                    border={"1px solid #e8e8e8"}
                    _hover={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
                  >
                    <Image
                      w="100%"
                      src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/6dab85b0-1718-4306-8be4-0fa697be1c38/hp_soups-noodles-snacksStorefront_m_480_251022_03.jpg"
                      alt="pro"
                    />
                  </GridItem>
                  <GridItem
                    border={"1px solid #e8e8e8"}
                    _hover={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
                  >
                    <Image
                      w="100%"
                      src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/6dab85b0-1718-4306-8be4-0fa697be1c38/hp_ready-cook-snacksStorefront_m_480_251022_04.jpg"
                      alt="pro"
                    />
                  </GridItem>
                  <GridItem
                    border={"1px solid #e8e8e8"}
                    _hover={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
                  >
                    <Image
                      w="100%"
                      src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/6dab85b0-1718-4306-8be4-0fa697be1c38/hp_biscuit-cookies-snacksStorefront_m_480_251022_05.jpg"
                      alt="pro"
                    />
                  </GridItem>
                  <GridItem
                    border={"1px solid #e8e8e8"}
                    _hover={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
                  >
                    <Image
                      w="100%"
                      src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/6dab85b0-1718-4306-8be4-0fa697be1c38/hp_chocolates-snacksStorefront_m_480_251022_06-13.jpg"
                      alt="pro"
                    />
                  </GridItem>
                </Grid>
              </Box>
            </Hide>

            <Hide breakpoint="(min-width: 991px)">
              <Show breakpoint="(min-width: 416px)">
                <Box marginBottom={"30px"}>
                  <Box borderBottom={"1px solid #e8e8e8"} marginBottom="20px">
                    <Text fontSize={"30px"} textAlign={"center"}>
                      Snack Store
                    </Text>
                  </Box>

                  <Grid
                    w={"100%"}
                    templateColumns={{
                      base: "repeat(3, 1fr)",
                      md: "repeat(3, 1fr)",
                    }}
                    gap={4}
                    margin="auto"
                  >
                    <GridItem
                      border={"1px solid #e8e8e8"}
                      _hover={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
                    >
                      <Image
                        w="100%"
                        src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/6dab85b0-1718-4306-8be4-0fa697be1c38/hp_namkeens-snacksStorefront_m_480_251022_01.jpg"
                        alt="pro"
                      />
                    </GridItem>
                    <GridItem
                      border={"1px solid #e8e8e8"}
                      _hover={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
                    >
                      <Image
                        w="100%"
                        src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/6dab85b0-1718-4306-8be4-0fa697be1c38/hp_frozen-snacks-snacksStorefront_m_480_251022_02.jpg"
                        alt="pro"
                      />
                    </GridItem>
                    <GridItem
                      border={"1px solid #e8e8e8"}
                      _hover={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
                    >
                      <Image
                        w="100%"
                        src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/6dab85b0-1718-4306-8be4-0fa697be1c38/hp_soups-noodles-snacksStorefront_m_480_251022_03.jpg"
                        alt="pro"
                      />
                    </GridItem>
                  </Grid>
                </Box>
              </Show>
            </Hide>

            <Show breakpoint="(max-width: 415px)">
              <Box marginBottom={"30px"}>
                <Box borderBottom={"1px solid #e8e8e8"} marginBottom="20px">
                  <Text fontSize={"30px"} textAlign={"center"}>
                    Snack Store
                  </Text>
                </Box>
                <Grid
                  w={"100%"}
                  templateColumns={{
                    base: "repeat(2, 1fr)",
                    md: "repeat(2, 1fr)",
                  }}
                  gap={4}
                  margin="auto"
                >
                  <GridItem
                    border={"1px solid #e8e8e8"}
                    _hover={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
                  >
                    <Image
                      w="100%"
                      src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/6dab85b0-1718-4306-8be4-0fa697be1c38/hp_namkeens-snacksStorefront_m_480_251022_01.jpg"
                      alt="pro"
                    />
                  </GridItem>
                  <GridItem
                    border={"1px solid #e8e8e8"}
                    _hover={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
                  >
                    <Image
                      w="100%"
                      src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/6dab85b0-1718-4306-8be4-0fa697be1c38/hp_frozen-snacks-snacksStorefront_m_480_251022_02.jpg"
                      alt="pro"
                    />
                  </GridItem>
                </Grid>
              </Box>
            </Show>
          </Box>

          <Box marginBottom={"30px"}>
            <Box borderBottom={"1px solid #e8e8e8"} marginBottom="20px">
              <Text fontSize={"30px"} textAlign={"center"}>
                Cleaning & Household
              </Text>
            </Box>

            <Grid
              w={"100%"}
              templateColumns={{
                base: "repeat(2, 1fr)",
                md: "repeat(2, 1fr)",
                lg: "repeat(4, 1fr)",
              }}
              gap={4}
              margin="auto"
            >
              <GridItem
                border={"1px solid #e8e8e8"}
                _hover={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
              >
                <Image
                  w="100%"
                  src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/4c928285-03d4-44c5-96f1-4bd6ee82200f/hp_cleaners-disfec_cleaningStorefront_m_480_251222_01.jpg"
                  alt="pro"
                />
              </GridItem>
              <GridItem
                border={"1px solid #e8e8e8"}
                _hover={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
              >
                <Image
                  w="100%"
                  src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/4c928285-03d4-44c5-96f1-4bd6ee82200f/hp_detergebts-favric-cleaningStorefront_m_480_251222_02.jpg"
                  alt="pro"
                />
              </GridItem>
              <GridItem
                border={"1px solid #e8e8e8"}
                _hover={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
              >
                <Image
                  w="100%"
                  src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/4c928285-03d4-44c5-96f1-4bd6ee82200f/hp_disposable-bags-cleaningStorefront_m_480_251222_03.jpg"
                  alt="pro"
                />
              </GridItem>
              <GridItem
                border={"1px solid #e8e8e8"}
                _hover={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
              >
                <Image
                  w="100%"
                  src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/4c928285-03d4-44c5-96f1-4bd6ee82200f/hp_fresheners-repellem-cleaningStorefront_m_480_251222_04.jpg"
                  alt="pro"
                />
              </GridItem>
            </Grid>
          </Box>

          <Box marginBottom={"30px"}>
            <Box borderBottom={"1px solid #e8e8e8"} marginBottom="20px">
              <Text fontSize={"30px"} textAlign={"center"}>
                Beauty & Hygiene
              </Text>
            </Box>

            <Grid
              w={"100%"}
              templateColumns={{
                base: "repeat(1, 1fr)",
                md: "repeat(1, 1fr)",
                lg: "repeat(2, 1fr)",
              }}
              gap={4}
              margin="auto"
            >
              <GridItem
                border={"1px solid #e8e8e8"}
                _hover={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
              >
                <Image
                  src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/41d73d99-69d4-4555-8613-348f40544f41/hpmakeup-mania-_beautyStorefront_m_251222_560x378_01.jpg"
                  alt="pro"
                />
              </GridItem>
              <GridItem border={"1px solid #e8e8e8"}>
                <Grid
                  templateColumns={{
                    base: "repeat(2, 1fr)",
                    md: "repeat(2, 1fr)",
                    lg: "repeat(2, 1fr)",
                  }}
                  gap={4}
                  margin="auto"
                >
                  <GridItem
                    border={"1px solid #e8e8e8"}
                    _hover={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
                  >
                    <Image
                      src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/41d73d99-69d4-4555-8613-348f40544f41/hp_min-40-beautyStorefront_m_251222_275x184_02.jpg"
                      alt="pro"
                    />
                  </GridItem>
                  <GridItem
                    border={"1px solid #e8e8e8"}
                    _hover={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
                  >
                    <Image
                      src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/41d73d99-69d4-4555-8613-348f40544f41/hp_fantastic-deos-perfumes-beautyStorefront_m_251222_275x184_04.jpg"
                      alt="pro"
                    />
                  </GridItem>
                  <GridItem
                    border={"1px solid #e8e8e8"}
                    _hover={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
                  >
                    <Image
                      src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/41d73d99-69d4-4555-8613-348f40544f41/hp_fantastic-deos-perfumes-beautyStorefront_m_251222_275x184_04.jpg"
                      alt="pro"
                    />
                  </GridItem>
                  <GridItem
                    border={"1px solid #e8e8e8"}
                    _hover={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
                  >
                    <Image
                      src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/41d73d99-69d4-4555-8613-348f40544f41/hp_shaving-carebeautyStorefront_m_251222_275x184_05.jpg"
                      alt="pro"
                    />
                  </GridItem>
                </Grid>
              </GridItem>
            </Grid>
          </Box>

          <Box marginBottom={"30px"}>
            <Hide below="lg">
              <Box>
                <Box borderBottom={"1px solid #e8e8e8"} marginBottom="20px">
                  <Text fontSize={"30px"} textAlign={"center"}>
                    Home & Kitchen Essentials
                  </Text>
                </Box>

                <Grid
                  w={"100%"}
                  templateColumns={{
                    base: "repeat(2, 1fr)",
                    md: "repeat(3, 1fr)",
                    lg: "repeat(6, 1fr)",
                  }}
                  gap={4}
                  margin="auto"
                >
                  <GridItem
                    border={"1px solid #e8e8e8"}
                    _hover={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
                  >
                    <Image
                      w="100%"
                      src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/9db9e4db-b1e2-4da0-816f-c6ed9c080442/hp_min25-GMStorefront(Till10th)_m_251222_01.jpg"
                      alt="pro"
                    />
                  </GridItem>
                  <GridItem
                    border={"1px solid #e8e8e8"}
                    _hover={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
                  >
                    <Image
                      w="100%"
                      src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/9db9e4db-b1e2-4da0-816f-c6ed9c080442/hp_min50-off-GMStorefront(Till10th)_m_251222_02.jpg"
                      alt="pro"
                    />
                  </GridItem>
                  <GridItem
                    border={"1px solid #e8e8e8"}
                    _hover={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
                  >
                    <Image
                      w="100%"
                      src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/9db9e4db-b1e2-4da0-816f-c6ed9c080442/hp_steel-coppers-GMStorefront(Till10th)_m_251222_03.jpg"
                      alt="pro"
                    />
                  </GridItem>
                  <GridItem
                    border={"1px solid #e8e8e8"}
                    _hover={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
                  >
                    <Image
                      w="100%"
                      src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/9db9e4db-b1e2-4da0-816f-c6ed9c080442/hp_kitchen-tools-GMStorefront(Till10th)_m_251222_04.jpg"
                      alt="pro"
                    />
                  </GridItem>
                  <GridItem
                    border={"1px solid #e8e8e8"}
                    _hover={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
                  >
                    <Image
                      w="100%"
                      src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/9db9e4db-b1e2-4da0-816f-c6ed9c080442/hp_casseroles-GMStorefront(Till10th)_m_251222_05.jpg"
                      alt="pro"
                    />
                  </GridItem>
                  <GridItem
                    border={"1px solid #e8e8e8"}
                    _hover={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
                  >
                    <Image
                      w="100%"
                      src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/9db9e4db-b1e2-4da0-816f-c6ed9c080442/hp_bathroom-GMStorefront(Till10th)_m_251222_06.jpg"
                      alt="pro"
                    />
                  </GridItem>
                </Grid>
              </Box>
            </Hide>

            <Hide breakpoint="(min-width: 991px)">
              <Show breakpoint="(min-width: 416px)">
                <Box marginBottom={"30px"}>
                  <Box borderBottom={"1px solid #e8e8e8"} marginBottom="20px">
                    <Text fontSize={"30px"} textAlign={"center"}>
                      Home & Kitchen Essentials
                    </Text>
                  </Box>

                  <Grid
                    w={"100%"}
                    templateColumns={{
                      base: "repeat(3, 1fr)",
                      md: "repeat(3, 1fr)",
                    }}
                    gap={4}
                    margin="auto"
                  >
                    <GridItem
                      border={"1px solid #e8e8e8"}
                      _hover={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
                    >
                      <Image
                        w="100%"
                        src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/9db9e4db-b1e2-4da0-816f-c6ed9c080442/hp_min25-GMStorefront(Till10th)_m_251222_01.jpg"
                        alt="pro"
                      />
                    </GridItem>
                    <GridItem
                      border={"1px solid #e8e8e8"}
                      _hover={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
                    >
                      <Image
                        w="100%"
                        src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/9db9e4db-b1e2-4da0-816f-c6ed9c080442/hp_min50-off-GMStorefront(Till10th)_m_251222_02.jpg"
                        alt="pro"
                      />
                    </GridItem>
                    <GridItem
                      border={"1px solid #e8e8e8"}
                      _hover={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
                    >
                      <Image
                        w="100%"
                        src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/9db9e4db-b1e2-4da0-816f-c6ed9c080442/hp_steel-coppers-GMStorefront(Till10th)_m_251222_03.jpg"
                        alt="pro"
                      />
                    </GridItem>
                  </Grid>
                </Box>
              </Show>
            </Hide>

            <Show breakpoint="(max-width: 415px)">
              <Box marginBottom={"30px"}>
                <Box borderBottom={"1px solid #e8e8e8"} marginBottom="20px">
                  <Text fontSize={"30px"} textAlign={"center"}>
                    Home & Kitchen Essentials
                  </Text>
                </Box>
                <Grid
                  w={"100%"}
                  templateColumns={{
                    base: "repeat(2, 1fr)",
                    md: "repeat(2, 1fr)",
                  }}
                  gap={4}
                  margin="auto"
                >
                  <GridItem
                    border={"1px solid #e8e8e8"}
                    _hover={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
                  >
                    <Image
                      w="100%"
                      src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/9db9e4db-b1e2-4da0-816f-c6ed9c080442/hp_min25-GMStorefront(Till10th)_m_251222_01.jpg"
                      alt="pro"
                    />
                  </GridItem>
                  <GridItem
                    border={"1px solid #e8e8e8"}
                    _hover={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
                  >
                    <Image
                      w="100%"
                      src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/9db9e4db-b1e2-4da0-816f-c6ed9c080442/hp_min50-off-GMStorefront(Till10th)_m_251222_02.jpg"
                      alt="pro"
                    />
                  </GridItem>
                </Grid>
              </Box>
            </Show>
          </Box>

          <Box
            border={"1px solid #e8e8e8"}
            marginBottom="20px"
            marginTop={"20px"}
          >
            <Swiper
              rewind={true}
              navigation={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Navigation, Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <Image
                  w={"full"}
                  src="https://www.bigbasket.com/media/uploads/banner_images/hp_m_health_suppliment_251222_400.jpg"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  w={"full"}
                  src="https://www.bigbasket.com/media/uploads/banner_images/hp_m_babycare_251222_400.jpg"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  w={"full"}
                  src="https://www.bigbasket.com/media/uploads/banner_images/hp_m_petstore_251222_400.jpg"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  w={"full"}
                  src="https://www.bigbasket.com/media/uploads/banner_images/hp_bcd_m_bcd_251222_400.jpg"
                />
              </SwiperSlide>
            </Swiper>
          </Box>

          <Box marginBottom={"30px"}>
            <Hide below="lg">
              <Box>
                <Box borderBottom={"1px solid #e8e8e8"} marginBottom="20px">
                  <Text fontSize={"30px"} textAlign={"center"}>
                    Brand Store
                  </Text>
                </Box>

                <Grid
                  w={"100%"}
                  templateColumns={{
                    base: "repeat(2, 1fr)",
                    md: "repeat(3, 1fr)",
                    lg: "repeat(6, 1fr)",
                  }}
                  gap={4}
                  margin="auto"
                >
                  <GridItem
                    _hover={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
                    border={"1px solid #e8e8e8"}
                  >
                    <Image
                      w="100%"
                      src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/14d11349-1c62-4803-be77-15a874fe6a4b/hp_brandStorefront_m_480_251222_01.jpg"
                      alt="pro"
                    />
                  </GridItem>
                  <GridItem
                    border={"1px solid #e8e8e8"}
                    _hover={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
                  >
                    <Image
                      w="100%"
                      src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/14d11349-1c62-4803-be77-15a874fe6a4b/hp_brandStorefront_m_480_251222_02.jpg"
                      alt="pro"
                    />
                  </GridItem>
                  <GridItem
                    border={"1px solid #e8e8e8"}
                    _hover={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
                  >
                    <Image
                      w="100%"
                      src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/14d11349-1c62-4803-be77-15a874fe6a4b/hp_brandStorefront_m_480_251222_03.jpg"
                      alt="pro"
                    />
                  </GridItem>
                  <GridItem
                    border={"1px solid #e8e8e8"}
                    _hover={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
                  >
                    <Image
                      w="100%"
                      src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/14d11349-1c62-4803-be77-15a874fe6a4b/hp_brandStorefront_m_480_251222_04.jpg"
                      alt="pro"
                    />
                  </GridItem>
                  <GridItem
                    border={"1px solid #e8e8e8"}
                    _hover={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
                  >
                    <Image
                      w="100%"
                      src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/14d11349-1c62-4803-be77-15a874fe6a4b/hp_brandStorefront_m_480_251222_05.jpg"
                      alt="pro"
                    />
                  </GridItem>
                  <GridItem
                    border={"1px solid #e8e8e8"}
                    _hover={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
                  >
                    <Image
                      w="100%"
                      src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/14d11349-1c62-4803-be77-15a874fe6a4b/hp_brandStorefront_m_480_251222_06.jpg"
                      alt="pro"
                    />
                  </GridItem>
                </Grid>
              </Box>
            </Hide>

            <Hide breakpoint="(min-width: 991px)">
              <Show breakpoint="(min-width: 416px)">
                <Box>
                  <Box borderBottom={"1px solid #e8e8e8"} marginBottom="20px">
                    <Text fontSize={"30px"} textAlign={"center"}>
                      Brand Store
                    </Text>
                  </Box>

                  <Grid
                    w={"100%"}
                    templateColumns={{
                      base: "repeat(3, 1fr)",
                      md: "repeat(3, 1fr)",
                    }}
                    gap={4}
                    margin="auto"
                  >
                    <GridItem
                      border={"1px solid #e8e8e8"}
                      _hover={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
                    >
                      <Image
                        w="100%"
                        src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/14d11349-1c62-4803-be77-15a874fe6a4b/hp_brandStorefront_m_480_251222_01.jpg"
                        alt="pro"
                      />
                    </GridItem>
                    <GridItem
                      border={"1px solid #e8e8e8"}
                      _hover={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
                    >
                      <Image
                        w="100%"
                        src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/14d11349-1c62-4803-be77-15a874fe6a4b/hp_brandStorefront_m_480_251222_02.jpg"
                        alt="pro"
                      />
                    </GridItem>
                    <GridItem
                      border={"1px solid #e8e8e8"}
                      _hover={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
                    >
                      <Image
                        w="100%"
                        src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/14d11349-1c62-4803-be77-15a874fe6a4b/hp_brandStorefront_m_480_251222_03.jpg"
                        alt="pro"
                      />
                    </GridItem>
                  </Grid>
                </Box>
              </Show>
            </Hide>

            <Show breakpoint="(max-width: 415px)">
              <Box>
                <Box borderBottom={"1px solid #e8e8e8"} marginBottom="20px">
                  <Text fontSize={"30px"} textAlign={"center"}>
                    Brand Store
                  </Text>
                </Box>
                <Grid
                  w={"100%"}
                  templateColumns={{
                    base: "repeat(2, 1fr)",
                    md: "repeat(2, 1fr)",
                  }}
                  gap={4}
                  margin="auto"
                >
                  <GridItem
                    border={"1px solid #e8e8e8"}
                    _hover={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
                  >
                    <Image
                      w="100%"
                      src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/14d11349-1c62-4803-be77-15a874fe6a4b/hp_brandStorefront_m_480_251222_01.jpg"
                      alt="pro"
                    />
                  </GridItem>
                  <GridItem
                    border={"1px solid #e8e8e8"}
                    _hover={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
                  >
                    <Image
                      w="100%"
                      src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/14d11349-1c62-4803-be77-15a874fe6a4b/hp_brandStorefront_m_480_251222_02.jpg"
                      alt="pro"
                    />
                  </GridItem>
                </Grid>
              </Box>
            </Show>
          </Box>

          <Box marginBottom={"30px"}>
            <Box borderBottom="1px solid #e8e8e8" marginBottom="20px">
              <Text fontSize={"30px"} textAlign={"center"}>
                Featured Recipes
              </Text>
            </Box>
            <Box w={"100%"} margin="auto">
              <Image
                w="100%"
                src="https://www.bigbasket.com/media/uploads/banner_images/hp_bbw_c_400_web_wellness_banner_1_dec_w2_14012023.jpg"
                alt="pro"
              />
            </Box>
          </Box>

          <Box
            w="100%"
            margin={"auto"}
            marginBottom={"30px"}
            p={4}
            border="1px solid #e8e8e8"
          >
            <Heading marginBottom={"20px"}>
              digibasket – online grocery store
            </Heading>
            <Text marginBottom={"20px"}>
              Did you ever imagine that the freshest of{" "}
              <span style={{ color: "#91c81f", fontWeight: "bold" }}>
                fruits and vegetables
              </span>
              , top quality pulses and food grains,{" "}
              <span style={{ color: "#91c81f", fontWeight: "bold" }}>
                dairy products
              </span>{" "}
              and hundreds of branded items could be handpicked and delivered to
              your home, all at the click of a button? India’s first
              comprehensive online megastore, bigbasket.com, brings a whopping
              20000+ products with more than 1000 brands, to over 4 million
              happy customers. From household cleaning products to beauty and
              makeup, bigbasket has everything you need for your daily needs.
              bigbasket.com is convenience personified We’ve taken away all the
              stress associated with shopping for daily essentials, and you can
              now order all your household products and even buy groceries
              online without travelling long distances or standing in serpentine
              queues. Add to this the convenience of finding all your
              requirements at one single source, along with great savings, and
              you will realize that bigbasket- India’s largest online
              supermarket, has revolutionized the way India shops for groceries.
              Online grocery shopping has never been easier. Need things fresh?
              Whether it’s fruits and vegetables or dairy and meat, we have this
              covered as well! Get fresh eggs, meat, fish and more online at
              your convenience. Hassle-free Home Delivery options
            </Text>
            <Text marginBottom={"20px"}>
              We deliver to 25 cities across India and maintain excellent
              delivery times, ensuring that all your products from groceries to
              snacks{" "}
              <span style={{ color: "#91c81f", fontWeight: "bold" }}>
                branded foods
              </span>{" "}
              reach you in time.
            </Text>

            <UnorderedList>
              <ListItem>
                Slotted Delivery: Pick the most convenient delivery slot to have
                your grocery delivered. From early morning delivery for early
                birds, to late-night delivery for people who work the late
                shift, bigbasket caters to every schedule.
              </ListItem>
              <ListItem>
                Express Delivery: This super useful service can be availed by
                customers in cities like Bangalore, Mumbai, Pune, Chennai,
                Kolkata, Hyderabad and Delhi-NCR in which we deliver your orders
                to your doorstep in 90 Minutes.
              </ListItem>
              <ListItem>
                BB Specialty stores: Missed out on buying that essential item
                from your favorite neighborhood store for tonight’s party? We’ll
                deliver it for you! From bakery, sweets and meat to flowers and
                chocolates, we deliver your order in 90 minutes, through a
                special arrangement with a nearby specialty store, verified by
                us.
              </ListItem>
            </UnorderedList>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default HomeCom;
