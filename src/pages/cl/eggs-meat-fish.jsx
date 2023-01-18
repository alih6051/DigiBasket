import Carousels from "@/components/products/Carousels/Carousels";
import { Box, Container } from "@chakra-ui/react";
import { eggsMeatsFish } from "@/assets/cl/eggs-meats-fish/eggsMeatsFish";
const EggsMeatFish = () => {
  return (
    <Box width="6xl" m={"auto"}>
      <Carousels cards={eggsMeatsFish} />
    </Box>
  );
};
export default EggsMeatFish;
