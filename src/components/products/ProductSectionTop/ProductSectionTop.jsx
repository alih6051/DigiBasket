import { Box, Divider, Heading, HStack, Select, Spacer, Text } from "@chakra-ui/react"
import { FaCaretDown, FaTruckMoving } from "react-icons/fa";

const ProductSectionTop = ({props}) => {
  return (
    <Box>
      <HStack p={6}>
        <Heading as="h4" fontSize={"24px"} fontWeight={400}>
          {props}
        </Heading>
        <Spacer />

        <Select
          fontSize={"16px"}
          height={"30px"}
          width={"230px"}
          size="xs"
          bg={"whiteAlpha.400"}
          border="1px solid #8a8076"
          colorScheme={"#8a8076"}
          focusBorderColor={"#84c225"}
          icon={<FaCaretDown border="1px solid #84c225" />}
        >
          <option value="Popularity">Popularity</option>
          <option value="Low to High">Price-Low to High</option>
          <option value="High to Low">Price-High to Low</option>
          <option value="Alphabetical">Alphabetical</option>
          <option value="Rupee saving-Low to High">
            Rupee saving-Low to High
          </option>
          <option value="Rupee saving-High to Low">
            Rupee saving-High to Low
          </option>
          <option value="% Off">% Off-High to Low</option>
        </Select>
      </HStack>
      <HStack pl={6}>
        <FaTruckMoving w={"25px"} h={"30px"} fontSize={"30px"} />
        <Text as={"h2"} fontWeight={500}>
          ALL PRODUCTS
        </Text>
      </HStack>
      <Divider borderColor={"#acb0b9"}></Divider>
      <br />
    </Box>
  );
}
export default ProductSectionTop