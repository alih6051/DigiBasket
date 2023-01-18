import Carousels from "@/components/products/Carousels/Carousels";
import { Container } from "@chakra-ui/react";
import { eggsMeatsFish } from "@/assets/cl/eggs-meats-fish/eggsMeatsFish";
const EggsMeatFish = () => {
  return (
    <Container w={"7xl"} ml={"0px"} mr={"0"}>
      EggsMeatFish
      <Carousels cards={eggsMeatsFish} />
    </Container>
  );
};
export default EggsMeatFish;
