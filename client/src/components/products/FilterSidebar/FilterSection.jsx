import {
  Stack,
  Text,
  Divider,
  Checkbox,
  FormControl,
  FormLabel,
  CheckboxGroup,
  Box,
} from "@chakra-ui/react";
import Link from "next/link";

import React from "react";

const FilterSection = ({ handleFilterFunctionality }) => {
  
  // FILTER BY BRAND
  const handleBrandChange = (e) => {
    handleFilterFunctionality(e.target.value, e.target.checked);
  };
 //FILTER BY PRICE RANGE
  const handleFilterPriceRange = (e) => {
    handleFilterFunctionality(e.target.value, e.target.checked);
  };

 // FILTER BY DISCOUNT PERCENT 
  const handleFilterDiscount = (e) => {
    handleFilterFunctionality(e.target.value, e.target.checked);
  };

  return (
    <Box>
      <Stack>
        {/* DIFFERENT CATEGORY PAGE LINK */}
        <Stack spacing={2} p={2}>
          <Text as={"h1"} fontWeight={"600"}>
            Category
          </Text>
          <Divider borderColor={"#acb0b9"} />
          <Link href={"/cl/eggs-meat-fish"}>
            {" "}
            <Text cursor={"pointer"} _hover={{ color: "#84c225" }}>
              eggs-meat-fish
            </Text>
          </Link>
          <Link href={"/cl/foodgrains-oil-masala"}>
            {" "}
            <Text cursor={"pointer"} _hover={{ color: "#84c225" }}>
              foodgrains-oil-masala
            </Text>
          </Link>
          <Link href={"/cl/fruits-vegetables"}>
            {" "}
            <Text cursor={"pointer"} _hover={{ color: "#84c225" }}>
              fruits-vegetables
            </Text>
          </Link>
        </Stack>
        <Stack>
          {/* OPTINOS FOR FILTER BY BRAND  */}
          <FormControl as="fieldset">
            <FormLabel as="legend" spacing="1">
              Brand
            </FormLabel>
            <Divider spacing="1" p={0} borderColor={"#acb0b9"} />
            <CheckboxGroup>
              <Stack spacing="1" p={2} fontWeight="350">
                <Checkbox
                  // ref={freshoRef}
                  value="Fresho"
                  borderColor="#58595b"
                  colorScheme={"whatsapp"}
                  _hover={{ color: "#84c225" }}
                  onChange={handleBrandChange}
                >
                  Fresho
                </Checkbox>
                <Checkbox
                  borderColor="#58595b"
                  colorScheme={"whatsapp"}
                  // ref={organicRef}
                  value="Organic"
                  _hover={{ color: "#84c225" }}
                  onChange={handleBrandChange}
                >
                  Organic
                </Checkbox>
                <Checkbox
                  borderColor="#58595b"
                  colorScheme={"whatsapp"}
                  value="Gopalan Organic"
                  // ref={gopalanRef}
                  _hover={{ color: "#84c225" }}
                  onChange={handleBrandChange}
                >
                  Gopalan Organic
                </Checkbox>
              </Stack>
            </CheckboxGroup>
          </FormControl>

          {/* OPTINOS FOR FILTER BY PRICE  */}
          <FormControl as="fieldset">
            <FormLabel as="legend">Price</FormLabel>
            <Divider borderColor={"#acb0b9"} />
            <CheckboxGroup>
              <Stack spacing="1" p={2} fontWeight="350">
                <Checkbox
                  value="Less than Rs 20"
                  borderColor="#58595b"
                  colorScheme={"whatsapp"}
                  _hover={{ color: "#84c225" }}
                  onChange={handleFilterPriceRange}
                >
                  Less than Rs 20
                </Checkbox>
                <Checkbox
                  borderColor="#58595b"
                  colorScheme={"whatsapp"}
                  value="Rs 21 to Rs 50"
                  _hover={{ color: "#84c225" }}
                  onChange={handleFilterPriceRange}
                >
                  Rs 21 to Rs 50
                </Checkbox>
                <Checkbox
                  borderColor="#58595b"
                  colorScheme={"whatsapp"}
                  value="Rs 51 to Rs 100"
                  _hover={{ color: "#84c225" }}
                  onChange={handleFilterPriceRange}
                >
                  Rs 51 to Rs 100
                </Checkbox>
                <Checkbox
                  borderColor="#58595b"
                  colorScheme={"whatsapp"}
                  value="Rs 101 to Rs 200"
                  _hover={{ color: "#84c225" }}
                  onChange={handleFilterPriceRange}
                >
                  Rs 101 to Rs 200
                </Checkbox>
                <Checkbox
                  borderColor="#58595b"
                  colorScheme={"whatsapp"}
                  value="Rs 201 to Rs 500"
                  _hover={{ color: "#84c225" }}
                  onChange={handleFilterPriceRange}
                >
                  Rs 201 to Rs 500
                </Checkbox>
                <Checkbox
                  borderColor="#58595b"
                  colorScheme={"whatsapp"}
                  value="more than 500"
                  _hover={{ color: "#84c225" }}
                  onChange={handleFilterPriceRange}
                >
                  more than 500
                </Checkbox>
              </Stack>
            </CheckboxGroup>
          </FormControl>

          {/* OPTINOS FOR FILTER BY dISCOUNTS  */}
          <FormControl as="fieldset">
            <FormLabel as="legend">Discount</FormLabel>
            <Divider borderColor={"#acb0b9"} />
            <CheckboxGroup>
              <Stack spacing="1" p={2} fontWeight="350">
                <Checkbox
                  value="10% - 15%"
                  borderColor="#58595b"
                  colorScheme={"whatsapp"}
                  _hover={{ color: "#84c225" }}
                  onChange={handleFilterDiscount}
                >
                  10% - 15%
                </Checkbox>
                <Checkbox
                  borderColor="#58595b"
                  colorScheme={"whatsapp"}
                  value="15% - 25%"
                  _hover={{ color: "#84c225" }}
                  onChange={handleFilterDiscount}
                >
                  15% - 25%
                </Checkbox>
                <Checkbox
                  borderColor="#58595b"
                  colorScheme={"whatsapp"}
                  value="More than 25%"
                  _hover={{ color: "#84c225" }}
                  onChange={handleFilterDiscount}
                >
                  More than 25%
                </Checkbox>
              </Stack>
            </CheckboxGroup>
          </FormControl>
        </Stack>
      </Stack>
    </Box>
  );
};
export default FilterSection;
