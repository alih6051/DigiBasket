import { Button } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";

const ToastExample = ({}) => {
  const toast = useToast();
  return (
    <Button
      onClick={() =>
        toast({
          title: "Account created.",
          description: "We've created your account for you.",
          status: "success",
          duration: 3000,
          isClosable: true,
        })
      }
    >
      Show Toast
    </Button>
  );
};
export default ToastExample;
