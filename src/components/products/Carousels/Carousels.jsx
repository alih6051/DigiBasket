


// import React from "react";
 import { Box, createLocalStorageManager, IconButton,Image, useBreakpointValue } from "@chakra-ui/react";
// // Here we have used react-icons package for the icons
// import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// // And react-slick as our Carousel Lib
// import Slider from "react-slick";

// // Settings for the slider
// const settings = {
//   dots: true,
//   arrows: false,
//   fade: true,
//   infinite: true,
//   autoplay: true,
//   speed: 500,
//   autoplaySpeed: 5000,
//   slidesToShow: 1,
//   slidesToScroll: 1,
// };

// export default function Carousel({cards}) {
// console.log(cards)
// //   const cards = [
// //     "https://images.unsplash.com/photo-1612852098516-55d01c75769a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
// //     "https://images.unsplash.com/photo-1627875764093-315831ac12f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
// //     "https://images.unsplash.com/photo-1571432248690-7fd6980a1ae2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
// //   ];

//   return (
//     <Box
//       position={"relative"}
//       height={"200px"}
//       width={"6xl"}
//       overflow={"hidden"}
//     >
//       {/* CSS files for react-slick */}
//       <link
//         rel="stylesheet"
//         type="text/css"
//         charSet="UTF-8"
//         href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
//       />
//       <link
//         rel="stylesheet"
//         type="text/css"
//         href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
//       />

//       {/* Slider */}
//       <Slider {...settings}>
//         {cards.map((url, index) => (
//           <Image
//             alt=""
//             key={index}
//             width={900}
//             height={200}
//             position="relative"
           
//             src={url.src}
//             // backgroundImage={`url(${url.src})`}
//           />
//         ))}
//       </Slider>
//     </Box>
//   );
// }

import React from "react";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const slideImages = [
  {
    url: "images/slide_2.jpg",
    caption: "Slide 1",
  },
  {
    url: "images/slide_3.jpg",
    caption: "Slide 2",
  },
  {
    url: "images/slide_4.jpg",
    caption: "Slide 3",
  },
];

const Carousel = ({cards}) => {
    console.log(cards)
  return (
    <Box width="100%" height={300} >
      <Zoom scale={0.4}>
        {cards.map((slideImage, index) => (
          <Box className="each-slide" key={index} width="100%">
            <Image
              alt=""
              src={slideImage.url.src}
              height={"300"}
              width={"100%"}
            ></Image>
          </Box>
        ))}
      </Zoom>
    </Box>
  );
};

export default Carousel;