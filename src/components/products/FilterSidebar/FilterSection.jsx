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

 const FilterSection = ({products}) => {
//    // state to store selected filter options
//   const [filters, setFilters] = useState({});

//   // function to handle filter changes
//   const handleFilterChange = (e) => {
//     const { name, value } = e.target;
//     setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
//   };

//   // function to apply filters to products
//   const applyFilters = () => {
//     let filteredProducts = [...products];

//     for (const filter in filters) {
//       if (filters[filter]) {
//         filteredProducts = filteredProducts.filter(
//           (product) => product[filter] === filters[filter]
//         );
//       }
//     }

//     return filteredProducts;
//   };
// console.log(applyFilters());
  return (
    <Box>
      <Stack>
        <Stack spacing={2} p={2}>
          <Text as={"h1"} fontWeight={"600"}>
            Category
          </Text>
          <Divider borderColor={"#acb0b9"} />
          <Text>eggs-meat-fish</Text>
          <Text>foodgrains-oil-masala</Text>
          <Text>foodgrains-oil-masala</Text>
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
                  value="Fresho"
                  borderColor="#58595b"
                  colorScheme={"whatsapp"}
                >
                  Fresho
                </Checkbox>
                <Checkbox
                  borderColor="#58595b"
                  colorScheme={"whatsapp"}
                  value="Organic"
                >
                  Organic
                </Checkbox>
                <Checkbox
                  borderColor="#58595b"
                  colorScheme={"whatsapp"}
                  value="Gopalan Organic"
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
                >
                  Summer Fruits
                </Checkbox>
                <Checkbox
                  borderColor="#58595b"
                  colorScheme={"whatsapp"}
                  value="Summer Veggies"
                >
                  Summer Veggies
                </Checkbox>
                <Checkbox
                  borderColor="#58595b"
                  colorScheme={"whatsapp"}
                  value="Winter Fruits"
                >
                  Winter Fruits
                </Checkbox>
                <Checkbox
                  borderColor="#58595b"
                  colorScheme={"whatsapp"}
                  value="Winter Veggies"
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
                >
                  India
                </Checkbox>
                <Checkbox
                  borderColor="#58595b"
                  colorScheme={"whatsapp"}
                  value="USA"
                >
                  USA
                </Checkbox>
                <Checkbox
                  borderColor="#58595b"
                  colorScheme={"whatsapp"}
                  value="Australia"
                >
                  Australia
                </Checkbox>
                <Checkbox
                  borderColor="#58595b"
                  colorScheme={"whatsapp"}
                  value="Italy"
                >
                  Italy
                </Checkbox>
                <Checkbox
                  borderColor="#58595b"
                  colorScheme={"whatsapp"}
                  value="China"
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
                  value="Less than Rs 20 "
                  borderColor="#58595b"
                  colorScheme={"whatsapp"}
                >
                  Less than Rs 20
                </Checkbox>
                <Checkbox
                  borderColor="#58595b"
                  colorScheme={"whatsapp"}
                  value="Rs 21 to Rs 50"
                >
                  Rs 21 to Rs 50
                </Checkbox>
                <Checkbox
                  borderColor="#58595b"
                  colorScheme={"whatsapp"}
                  value="Rs 51 to Rs 100"
                >
                  Rs 51 to Rs 100
                </Checkbox>
                <Checkbox
                  borderColor="#58595b"
                  colorScheme={"whatsapp"}
                  value="Rs 101 to Rs 200"
                >
                  Rs 101 to Rs 200
                </Checkbox>
                <Checkbox
                  borderColor="#58595b"
                  colorScheme={"whatsapp"}
                  value="Rs 201 to Rs 500 "
                >
                  Rs 201 to Rs 500
                </Checkbox>
                <Checkbox
                  borderColor="#58595b"
                  colorScheme={"whatsapp"}
                  value="70 to 100 g (Bunch)"
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
                >
                  10% - 15%
                </Checkbox>
                <Checkbox
                  borderColor="#58595b"
                  colorScheme={"whatsapp"}
                  value="15% - 25%"
                >
                  15% - 25%
                </Checkbox>
                <Checkbox
                  borderColor="#58595b"
                  colorScheme={"whatsapp"}
                  value="More than 25%"
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
                >
                  100 - 125 g
                </Checkbox>
                <Checkbox
                  borderColor="#58595b"
                  colorScheme={"whatsapp"}
                  value="125 - 200 g"
                >
                  125 - 200 g
                </Checkbox>
                <Checkbox
                  borderColor="#58595b"
                  colorScheme={"whatsapp"}
                  value="150 - 200 g"
                >
                  150 - 200 g
                </Checkbox>
                <Checkbox
                  borderColor="#58595b"
                  colorScheme={"whatsapp"}
                  value="100 to 150 g"
                >
                  100 to 150 g
                </Checkbox>
                <Checkbox
                  borderColor="#58595b"
                  colorScheme={"whatsapp"}
                  value="40 cm"
                >
                  40 cm
                </Checkbox>
                <Checkbox
                  borderColor="#67686b"
                  colorScheme={"whatsapp"}
                  value="More than Rs 501 "
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
}
export default FilterSection




