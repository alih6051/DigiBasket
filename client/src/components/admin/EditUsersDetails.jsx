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
//item = {{_id:el._id, name:el.name, email:el.email, avatar_url:el.avatar_url}}


const EditUsersDetails = ({
  item: { _id, name, email, avatar_url },
  query,
  setQuery,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [formData, setFormData] = useState({
    name,
    email,
    avatar_url,
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
              <FormLabel>Avatar Url</FormLabel>
              <Input
                type="text"
                size="sm"
                value={formData.avatar_url}
                name="avatar_url"
                onChange={handleChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                onChange={handleChange}
                size="sm"
                value={formData.name}
                name="name"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                onChange={handleChange}
                size="sm"
                value={formData.email}
                name="email"
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

export default EditUsersDetails;
