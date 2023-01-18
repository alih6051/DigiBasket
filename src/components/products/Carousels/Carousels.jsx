import {
  Box,
  createLocalStorageManager,
  IconButton,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";

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

const Carousel = ({ cards }) => {
  return (
    <Box width="100%" height={300}>
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
