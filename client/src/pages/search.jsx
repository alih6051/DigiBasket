import React, { use, useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import {
  Box,
  Center,
  Container,
  Flex,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import Cards from "@/components/products/Cards/Cards";
import Loader from "@/components/search/Loader";
import Pagination from "@/components/search/Pagination";

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
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://ill-puce-bunny-cape.cyclic.app/api/products/search?q=${q}&limit=12&page=${page}`
      )
      .then((res) => {
        setData(res.data.data);
        setTotalPages(res.data.totalPages);
        setTotalItems(res.data.totalItems);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [q, page]);

  return loading ? (
    <Loader />
  ) : (
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
          <Cards key={item._id} data={item} />
        ))}
      </SimpleGrid>
      <Center my={5}>
        <Pagination
          total={totalPages}
          current={page}
          handlePageChange={setPage}
        />
      </Center>
    </Container>
  );
};

export default Search;
