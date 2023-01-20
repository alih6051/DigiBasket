import React, { useRef, useState } from 'react'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper";
import { Image, Box, Button, Flex , Grid, GridItem, Show, Hide, Text, Center} from '@chakra-ui/react';
import Carousel from "@/components/products/Carousels/Carousels";
import { fruitsVegitables } from "@/assets/cl/fruits-vegetables/fruitsVegitables";


const HomeCom = () => {
  return (
    <div>
         <Box  w={"90%"} m={"auto"} border={"1px solid red"}>
       <Box marginBottom={"20px"}>
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        modules={[Autoplay ]}
        className="mySwiper"
      >
        <SwiperSlide>
            <Image w={"full"} src='https://www.bigbasket.com/media/uploads/banner_images/YXHP144_hp_fom_m_bbpl-staples_460_160123_Bangalore.jpg'/>
        </SwiperSlide>
        <SwiperSlide>
            <Image w={"full"} src='https://www.bigbasket.com/media/uploads/banner_images/HP_EMF_M_WeekdayBangalore-1600x460-160123.jpeg'/>
        </SwiperSlide>
        <SwiperSlide>
            <Image w={"full"} src='https://www.bigbasket.com/media/uploads/banner_images/hp_m_cmc_breakfast_460px-020122.jpg'/>
        </SwiperSlide>
        <SwiperSlide>
            <Image w={"full"} src='https://www.bigbasket.com/media/uploads/banner_images/hp_wedding-brida_EP_1600x460px-020122.jpg'/>
        </SwiperSlide>
        <SwiperSlide>
            <Image w={"full"} src='https://www.bigbasket.com/media/uploads/banner_images/hp_m_bcd_paneer_460px-020122.jpg'/>
        </SwiperSlide>
     
      </Swiper>
       </Box>


       <Box marginBottom="20px">
      <Hide below="md" >
<Box  marginBottom={"20px"}  w={"90%"} margin={"auto"}>
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
        <Button bg={"blue.300"} w={"100%"} h={"65px"} >
           <Center display="block">
            <Text>
            EGGS, MEAT
          </Text>
          <Text>
            AND FISH  
          </Text>
           </Center>
        
          </Button>
        </SwiperSlide>
        <SwiperSlide> 
        <Button bg={"blue.300"} w={"100%"} h={"65px"}>
          <Text>
            NEUPASS
          </Text>
          
          </Button>
        </SwiperSlide>
        <SwiperSlide> 
        <Button bg={"blue.300"} w={"100%"} h={"65px"}>
       
          <Text>
               AYURVEDA
          </Text>
          </Button>
        </SwiperSlide>
        <SwiperSlide>
        <Button bg={"blue.300"} w={"100%"} h={"65px"}>
           
           <Center display="block">
             <Text>
             BUY MORE
           </Text>
           <Text>
           SAVE MORE 
           </Text>
            </Center>
           </Button>
        </SwiperSlide>
        <SwiperSlide> 
        <Button bg={"blue.300"} w={"100%"} h={"65px"}>
         
          <Center display="block">
            <Text>
            DEALS
          </Text>
          <Text>
          OF THE WEEK
          </Text>
           </Center>
          
          </Button>
        </SwiperSlide>
        <SwiperSlide>
        <Button bg={"blue.300"} w={"100%"} h={"65px"}>
          
          <Text>
            COMBO STORE
          </Text>
          </Button>
        </SwiperSlide>
        
      </Swiper>
      </Box>
</Hide>
<Hide breakpoint='(min-width: 762px)'>
    <Show breakpoint='(min-width: 416px)' >
      <Box  marginBottom={"20px"} w={"96%"}  margin="auto">
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
        <Button bg={"blue.300"} w={"100%"} h={"65px"} >
           <Center display="block">
            <Text>
            EGGS, MEAT
          </Text>
          <Text>
            AND FISH  
          </Text>
           </Center>
          
         

          </Button>
        </SwiperSlide>
        <SwiperSlide> 
        <Button bg={"blue.300"} w={"100%"} h={"65px"}>
          <Text>
            NEUPASS
          </Text>
          
          </Button>
        </SwiperSlide>
        <SwiperSlide> 
        <Button bg={"blue.300"} w={"100%"} h={"65px"}>
       
          <Text>
               AYURVEDA
          </Text>
          </Button>
        </SwiperSlide>
        <SwiperSlide>
        <Button bg={"blue.300"} w={"100%"} h={"65px"}>
           
          <Center display="block">
            <Text>
            BUY MORE
          </Text>
          <Text>
          SAVE MORE 
          </Text>
           </Center>
          </Button>
        </SwiperSlide>
        <SwiperSlide> 
        <Button bg={"blue.300"} w={"100%"} h={"65px"}>
         
          <Center display="block">
            <Text>
            DEALS
          </Text>
          <Text>
          OF THE WEEK
          </Text>
           </Center>
          
          </Button>
        </SwiperSlide>
        <SwiperSlide>
        <Button bg={"blue.300"} w={"100%"} h={"65px"}>
          
          <Text>
            COMBO STORE
          </Text>
          </Button>
        </SwiperSlide>
        
      </Swiper>
      </Box>
     </Show>
</Hide>
   
     <Show breakpoint='(max-width: 415px)' >
      <Box marginBottom={"20px"} w={"90%"} margin={"auto"}>
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
        <Button bg={"blue.300"} w={"100%"} h={"65px"}>
        <Center display="block">
            <Text>
            EGGS, MEAT
          </Text>
          <Text>
            AND FISH  
          </Text>
           </Center>
          </Button>
        </SwiperSlide>
        <SwiperSlide> 
        <Button bg={"blue.300"} w={"100%"} h={"65px"}>
          <Text>
            NEUPASS
          </Text>
          
          </Button>
        </SwiperSlide>
        <SwiperSlide> 
        <Button bg={"blue.300"} w={"100%"} h={"65px"}>
       
          <Text>
               AYURVEDA
          </Text>
          </Button>
        </SwiperSlide>
        <SwiperSlide>
        <Button bg={"blue.300"} w={"100%"} h={"65px"}>
          
        <Center display="block">
            <Text>
            BUY MORE
          </Text>
          <Text>
          SAVE MORE 
          </Text>
           </Center>
          </Button>
        </SwiperSlide>
        <SwiperSlide> 
        <Button bg={"blue.300"} w={"100%"} h={"65px"}>
         
        <Center display="block">
            <Text>
            DEALS
          </Text>
          <Text>
          OF THE WEEK
          </Text>
           </Center>
          </Button>
        </SwiperSlide>
        <SwiperSlide>
        <Button bg={"blue.300"} w={"100%"} h={"65px"}>
          
          <Text>
            COMBO STORE
          </Text>
          </Button>
        </SwiperSlide>
        
      </Swiper>
      </Box>
     </Show>  
        </Box> 

      <Carousel cards={fruitsVegitables}/>
   
    </Box>
    </div>
  )
}

export default HomeCom