import { Box, HStack, Center, Image } from "@chakra-ui/react";

import React from "react";

const Loader = () => {
  return (
    <HStack
      width={"30%"}
      mt={10}
      m="auto"
      display="flex"
      textAlign="center"
      bgColor="#e6e6e6"
      justifyContent="center"
    >
      <Image
        src="https://media3.giphy.com/media/xTk9ZvMnbIiIew7IpW/giphy.gif?cid=ecf05e47g8mqqa6q3z0wb5yj4farns9ef29x12b3vawxi1f7&rid=giphy.gif&ct=g"
        alt="loader"
      />
    </HStack>
  );
};

export default Loader;
