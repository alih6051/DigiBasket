import { Avatar, Td, Tr } from "@chakra-ui/react";
import React from "react";
import EditModel from "./EditModel";

const ProductsRow = ({
  _id,
  image,
  title,
  brand,
  price,
  active,
  inventory,
  discount,
  category,
  setQuery,
  query,
}) => {
  return (
    <Tr>
      <Td>
        <Avatar size="sm" src={image} />
      </Td>
      <Td>{title}</Td>
      <Td>{price}</Td>
      <Td>{inventory}</Td>
      <Td>{active ? "Active" : "Inactive"}</Td>
      <Td>
        <EditModel
          query={query}
          setQuery={setQuery}
          item={{
            _id,
            image,
            title,
            brand,
            price,
            active,
            inventory,
            discount,
            category,
          }}
        />
      </Td>
    </Tr>
  );
};

export default ProductsRow;
