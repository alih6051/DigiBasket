import {
  Box,
  Button,
  Center,
  Flex,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "../search/Loader";
import Pagination from "../search/Pagination";
import AddModel from "./AddModel";
import Header from "./Header";
import ProductsRow from "./ProductsRow";

const Products = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [query, setQuery] = useState({ limit: 10 });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://ill-puce-bunny-cape.cyclic.app/api/products", {
        params: { ...query, page: page },
      })
      .then(({ data }) => {
        setData(data.data);
        setTotalPages(data.totalPages);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [page, query]);

  return (
    <Flex direction="column" gap={5}>
      {/* Heading */}
      <Flex justifyContent="space-between">
        <Header title="PRODUCTS" sub="List of Products" />
        <AddModel />
      </Flex>

      {/* Category Buttons */}
      <Flex gap={5}>
        <Button
          colorScheme="blue"
          variant="outline"
          size="sm"
          onClick={() => setQuery({ limit: 10 })}
        >
          ALL
        </Button>
        <Button
          colorScheme="blue"
          variant="outline"
          size="sm"
          onClick={() => setQuery({ limit: 10, category: "fruits-vegetables" })}
        >
          Fruits & Vegetables
        </Button>
        <Button
          colorScheme="blue"
          variant="outline"
          size="sm"
          onClick={() =>
            setQuery({ limit: 10, category: "foodgrains-oil-masala" })
          }
        >
          Foodgrains, Oil & Masala
        </Button>
        <Button
          colorScheme="blue"
          variant="outline"
          size="sm"
          onClick={() => setQuery({ limit: 10, category: "eggs-meat-fish" })}
        >
          Egg, Meat & Fish
        </Button>
      </Flex>

      {/* Table Container */}
      {loading ? (
        <Loader />
      ) : (
        <TableContainer bg="#fff" rounded={"lg"} w="100%">
          <Table variant="simple">
            <TableCaption py={3}>
              <Center>
                <Pagination
                  current={page}
                  total={totalPages}
                  handlePageChange={setPage}
                />
              </Center>
            </TableCaption>
            <Thead>
              <Tr>
                <Th>Image</Th>
                <Th>Title</Th>
                <Th>Price</Th>
                <Th>Inventory</Th>
                <Th>Status</Th>
                <Th>Edit</Th>
              </Tr>
            </Thead>

            <Tbody>
              {data?.map((item) => (
                <ProductsRow
                  key={item._id}
                  {...item}
                  query={query}
                  setQuery={setQuery}
                />
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      )}
    </Flex>
  );
};

export default Products;
