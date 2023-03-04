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
import { AddIcon } from "@chakra-ui/icons";
import axios from "axios";

const AddModel = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [formData, setFormData] = useState({
    title: "",
    image: "",
    brand: "",
    price: "",
    active: "",
    inventory: "",
    discount: "",
    category: "",
  });
  const [loading, setLoading] = useState(false);

  const toast = useToast();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddProduct = () => {
    if (
      formData.title === "" ||
      formData.image === "" ||
      formData.brand === "" ||
      formData.price === "" ||
      formData.active === "" ||
      formData.inventory === "" ||
      formData.discount === "" ||
      formData.category === ""
    ) {
      toast({
        title: `Please fill all the details`,
        status: "error",
        isClosable: true,
        duration: 2000,
        position: "top",
      });
    } else {
      axios
        .post(
          "https://ill-puce-bunny-cape.cyclic.app/api/admin/create",
          formData
        )
        .then((res) => {
          toast({
            title: `Added Successfully`,
            status: "success",
            isClosable: true,
            duration: 2000,
            position: "top",
          });
          setLoading(false);
          onClose();
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
    }
  };
  return (
    <>
      <Button
        onClick={onOpen}
        variant="outline"
        colorScheme="blue"
        leftIcon={<AddIcon />}
      >
        Add Product
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Product</ModalHeader>
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
              mr={3}
              onClick={handleAddProduct}
              isLoading={loading}
              loadingText="Adding"
            >
              Add
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddModel;
