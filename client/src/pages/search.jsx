import React, { use, useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { Box, Container, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import Cards from "@/components/products/Cards/Cards";
import { CateIcons } from "@/assets/cl/eggs-meats-fish/eggsMeatsFish";

const Search = () => {
  // GETTING SEARCH QUERY
  const router = useRouter();
  let { q } = router.query;
  if (q == undefined) q = "";

  // SETTING SEARCH DATA
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    axios
      .get(
        `https://ill-puce-bunny-cape.cyclic.app/api/products/search?q=${q}&limit=12&page=${page}`
      )
      .then((res) => {
        setData(res.data.data);
        setTotalPages(res.data.totalPages);
        setTotalItems(res.data.totalItems);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container maxW="6xl" my={7}>
      <Flex>
        <Text fontSize={"2xl"} fontWeight="600">
          Results for {q} ({totalItems})
        </Text>
      </Flex>
      <Box py={5}>
        <hr />
      </Box>
      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
        rowGap={10}
        columnGap={3}
      >
        {data.map((item) => (
          <Cards key={item._id} data={item} cateicons={CateIcons} />
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Search;
