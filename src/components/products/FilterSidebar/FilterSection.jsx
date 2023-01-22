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

import React, { useState } from "react";

const FilterSection = ({
  handleFilterFunctionality,
  freshoRef,
  organicRef,
  gopalanRef,
}) => {
  const handleBrandChange = (e) => {
    handleFilterFunctionality(e.target.value, e.target.checked);
  };
  const handleSeasonalChange = (e) => {
    handleFilterFunctionality(e.target.value, e.target.checked);
  };

  const handleFilterCountry = (e) => {
    handleFilterFunctionality(e.target.value, e.target.checked);
  };
  const handleFilterWeight = (e) => {
    handleFilterFunctionality(e.target.value, e.target.checked);
  };
  const handleFilterDiscount = (e) => {
    handleFilterFunctionality(e.target.value, e.target.checked);
  };

  return (
    <Box>
      <Stack>
        <Stack spacing={2} p={2}>
          <Text as={"h1"} fontWeight={"600"}>
            Category
          </Text>
          <Divider borderColor={"#acb0b9"} />
          <Text cursor={"pointer"} _hover={{ color: "#84c225" }}>
            eggs-meat-fish
          </Text>
          <Text cursor={"pointer"} _hover={{ color: "#84c225" }}>
            foodgrains-oil-masala
          </Text>
          <Text cursor={"pointer"} _hover={{ color: "#84c225" }}>
            foodgrains-oil-masala
          </Text>
        </Stack>
        <Stack>
          <FormControl as="fieldset">
            <FormLabel as="legend" spacing="1">
              Brand
            </FormLabel>
            <Divider spacing="1" p={0} borderColor={"#acb0b9"} />
            <CheckboxGroup>
              <Stack spacing="1" p={2} fontWeight="350">
                <Checkbox
                  ref={freshoRef}
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
                  ref={organicRef}
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
                  ref={gopalanRef}
                  _hover={{ color: "#84c225" }}
                  onChange={handleBrandChange}
                >
                  Gopalan Organic
                </Checkbox>
              </Stack>
            </CheckboxGroup>
          </FormControl>
          <FormControl as="fieldset">
            <FormLabel as="legend">Seasonal</FormLabel>
            <Divider borderColor={"#acb0b9"} />
            <CheckboxGroup>
              <Stack spacing="1" p={2} fontWeight="350">
                <Checkbox
                  value="Summer Fruits"
                  borderColor="#58595b"
                  colorScheme={"whatsapp"}
                  _hover={{ color: "#84c225" }}
                  onChange={handleSeasonalChange}
                >
                  Summer Fruits
                </Checkbox>
                <Checkbox
                  borderColor="#58595b"
                  colorScheme={"whatsapp"}
                  value="Summer Veggies"
                  _hover={{ color: "#84c225" }}
                  onChange={handleSeasonalChange}
                >
                  Summer Veggies
                </Checkbox>
                <Checkbox
                  borderColor="#58595b"
                  colorScheme={"whatsapp"}
                  value="Winter Fruits"
                  _hover={{ color: "#84c225" }}
                  onChange={handleSeasonalChange}
                >
                  Winter Fruits
                </Checkbox>
                <Checkbox
                  borderColor="#58595b"
                  colorScheme={"whatsapp"}
                  value="Winter Veggies"
                  _hover={{ color: "#84c225" }}
                  onChange={handleSeasonalChange}
                >
                  Winter Veggies
                </Checkbox>
              </Stack>
            </CheckboxGroup>
          </FormControl>
          <FormControl as="fieldset">
            <FormLabel as="legend">Country</FormLabel>
            <Divider borderColor={"#acb0b9"} />
            <CheckboxGroup>
              <Stack spacing="1" p={2} fontWeight="350">
                <Checkbox
                  value="India"
                  borderColor="#58595b"
                  colorScheme={"whatsapp"}
                  _hover={{ color: "#84c225" }}
                  onChange={handleFilterCountry}
                >
                  India
                </Checkbox>
                <Checkbox
                  borderColor="#58595b"
                  colorScheme={"whatsapp"}
                  value="USA"
                  _hover={{ color: "#84c225" }}
                  onChange={handleFilterCountry}
                >
                  USA
                </Checkbox>
                <Checkbox
                  borderColor="#58595b"
                  colorScheme={"whatsapp"}
                  value="Australia"
                  _hover={{ color: "#84c225" }}
                  onChange={handleFilterCountry}
                >
                  Australia
                </Checkbox>
                <Checkbox
                  borderColor="#58595b"
                  colorScheme={"whatsapp"}
                  value="Italy"
                  _hover={{ color: "#84c225" }}
                  onChange={handleFilterCountry}
                >
                  Italy
                </Checkbox>
                <Checkbox
                  borderColor="#58595b"
                  colorScheme={"whatsapp"}
                  value="China"
                  _hover={{ color: "#84c225" }}
                  onChange={handleFilterCountry}
                >
                  China
                </Checkbox>
              </Stack>
            </CheckboxGroup>
          </FormControl>
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
                  onChange={handleFilterWeight}
                >
                  Less than Rs 20
                </Checkbox>
                <Checkbox
                  borderColor="#58595b"
                  colorScheme={"whatsapp"}
                  value="Rs 21 to Rs 50"
                  _hover={{ color: "#84c225" }}
                  onChange={handleFilterWeight}
                >
                  Rs 21 to Rs 50
                </Checkbox>
                <Checkbox
                  borderColor="#58595b"
                  colorScheme={"whatsapp"}
                  value="Rs 51 to Rs 100"
                  _hover={{ color: "#84c225" }}
                  onChange={handleFilterWeight}
                >
                  Rs 51 to Rs 100
                </Checkbox>
                <Checkbox
                  borderColor="#58595b"
                  colorScheme={"whatsapp"}
                  value="Rs 101 to Rs 200"
                  _hover={{ color: "#84c225" }}
                  onChange={handleFilterWeight}
                >
                  Rs 101 to Rs 200
                </Checkbox>
                <Checkbox
                  borderColor="#58595b"
                  colorScheme={"whatsapp"}
                  value="Rs 201 to Rs 500 "
                  _hover={{ color: "#84c225" }}
                  onChange={handleFilterWeight}
                >
                  Rs 201 to Rs 500
                </Checkbox>
                <Checkbox
                  borderColor="#58595b"
                  colorScheme={"whatsapp"}
                  value="70 to 100 g (Bunch)"
                  _hover={{ color: "#84c225" }}
                  onChange={handleFilterWeight}
                >
                  70 to 100 g (Bunch)
                </Checkbox>
              </Stack>
            </CheckboxGroup>
          </FormControl>
          <FormControl as="fieldset">
            <FormLabel as="legend">Discount</FormLabel>
            <Divider borderColor={"#acb0b9"} />
            <CheckboxGroup>
              <Stack spacing="1" p={2} fontWeight="350">
                <Checkbox
                  value="10% - 15% "
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
          <FormControl as="fieldset">
            <FormLabel as="legend">Pack Size</FormLabel>
            <Divider borderColor={"#acb0b9"} />
            <CheckboxGroup>
              <Stack spacing="1" p={2} fontWeight="350">
                <Checkbox
                  value="100 - 125 g"
                  borderColor="#58595b"
                  colorScheme={"whatsapp"}
                  _hover={{ color: "#84c225" }}
                >
                  100 - 125 g
                </Checkbox>
                <Checkbox
                  borderColor="#58595b"
                  colorScheme={"whatsapp"}
                  value="125 - 200 g"
                  _hover={{ color: "#84c225" }}
                >
                  125 - 200 g
                </Checkbox>
                <Checkbox
                  borderColor="#58595b"
                  colorScheme={"whatsapp"}
                  value="150 - 200 g"
                  _hover={{ color: "#84c225" }}
                >
                  150 - 200 g
                </Checkbox>
                <Checkbox
                  borderColor="#58595b"
                  colorScheme={"whatsapp"}
                  value="100 to 150 g"
                  _hover={{ color: "#84c225" }}
                >
                  100 to 150 g
                </Checkbox>
                <Checkbox
                  borderColor="#58595b"
                  colorScheme={"whatsapp"}
                  value="40 cm"
                  _hover={{ color: "#84c225" }}
                >
                  40 cm
                </Checkbox>
                <Checkbox
                  borderColor="#67686b"
                  colorScheme={"whatsapp"}
                  value="More than Rs 501 "
                  _hover={{ color: "#84c225" }}
                >
                  More than Rs 501
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
