import { Box, Hide, Show, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import Cards from '../products/Cards/Cards';
import { CateIcons } from "@/assets/cl/eggs-meats-fish/eggsMeatsFish";
import axios from "axios";
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/scrollbar';
import "swiper/css/navigation";
import { Navigation, Pagination, Autoplay,Scrollbar,A11y } from 'swiper';

const Veg = () => {
    let [data, setData]= useState([])

    useEffect(()=>{
        axios
        .get("http://localhost:8080/fruits-vegetables")
          .then((res) => setData(res.data));
        },[])
  return (
    <div> 
<Box marginBottom={"20px"}>
          <Box borderBottom={"1px solid #e8e8e8"} marginBottom="20px">
              <Text fontSize={"30px"} textAlign={"center"}>
              Best Sellers
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
    </div>
  )
}

export default Veg