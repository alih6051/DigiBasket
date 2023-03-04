import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { EditIcon } from "@chakra-ui/icons";
import axios from "axios";

const EditModel = ({
  item: {
    _id,
    image,
    title,
    brand,
    price,
    active,
    inventory,
    discount,
    category,
  },
  query,
  setQuery,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [formData, setFormData] = useState({
    title,
    image,
    brand,
    price,
    active,
    inventory,
    discount,
    category,
  });
  const [loading, setLoading] = useState(false);

  const toast = useToast();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = () => {
    setLoading(true);
    axios
      .patch(
        `https://ill-puce-bunny-cape.cyclic.app/api/admin/update/${_id}`,
        formData
      )
      .then((res) => {
        setLoading(false);
        toast({
          title: `Updated Successfully`,
          status: "success",
          isClosable: true,
          duration: 2000,
          position: "top",
        });
        onClose();
        setQuery({ ...query });
      })
      .catch((err) => {
        toast({
          title: `Something went wrong`,
          status: "error",
          isClosable: true,
          duration: 2000,
          position: "top",
        });
        setLoading(false);
        console.log(err);
      });
  };

  return (
    <>
      <Button onClick={onOpen} variant="ghost">
        <EditIcon />
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input
                type="text"
                size="sm"
                value={formData.title}
                name="title"
                onChange={handleChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Image</FormLabel>
              <Input
                type="text"
                onChange={handleChange}
                size="sm"
                value={formData.image}
                name="image"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Price</FormLabel>
              <Input
                type="number"
                onChange={handleChange}
                size="sm"
                value={formData.price}
                name="price"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Brand</FormLabel>
              <Input
                type="text"
                onChange={handleChange}
                size="sm"
                value={formData.brand}
                name="brand"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Active</FormLabel>
              <Input
                type="text"
                onChange={handleChange}
                size="sm"
                value={formData.active}
                name="active"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Discount</FormLabel>
              <Input
                type="number"
                onChange={handleChange}
                size="sm"
                value={formData.discount}
                name="discount"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Category</FormLabel>
              <Input
                type="text"
                onChange={handleChange}
                size="sm"
                value={formData.category}
                name="category"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Inventory</FormLabel>
              <Input
                type="number"
                onChange={handleChange}
                size="sm"
                value={formData.inventory}
                name="inventory"
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              w={"100%"}
              onClick={handleUpdate}
              isLoading={loading}
              loadingText="Updating"
            >
              Update
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EditModel;
