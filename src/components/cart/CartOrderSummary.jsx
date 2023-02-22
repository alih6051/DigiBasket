import {
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  useToast,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import * as React from "react";
import { FaArrowRight } from "react-icons/fa";
import { useSelector } from "react-redux";
import { formatPrice } from "./PriceTag";
import Link from "next/link";
import { useRouter } from "next/router";

const OrderSummaryItem = (props) => {
  const { label, value, children } = props;
  return (
    <Flex justify="space-between" fontSize="sm">
      <Text fontWeight="medium" color={mode("gray.600", "gray.400")}>
        {label}
      </Text>
      {value ? <Text fontWeight="medium">{value}</Text> : children}
    </Flex>
  );
};

export const CartOrderSummary = () => {
  const [total, setTotal] = React.useState(0);

  const { data } = useSelector((state) => state.cart);
  const { authState } = useSelector((state) => state.auth);

  React.useEffect(() => {
    let totalPrice = 0;
    data.forEach((item) => {
      totalPrice += item.price * item.quantity;
    });
    setTotal(totalPrice);
  }, [data]);

  // Added

  const router = useRouter();

  const toast = useToast();

  const handleCheckout = () => {
    if (!authState) {
      toast({
        title: `Please Sign In first`,
        position: "bottom",
        status: "warning",
        isClosable: true,
      });
      return;
    }

    if (data.length === 0) {
      toast({
        title: `Cart is Empty`,
        position: "bottom",
        status: "warning",
        isClosable: true,
      });
      return;
    }

    router.push("/checkout");
  };

  return (
    <Stack spacing="8" borderWidth="1px" rounded="lg" padding="8" width="full">
      <Heading size="md">Order Summary</Heading>

      <Stack spacing="6">
        <OrderSummaryItem label="Subtotal" value={total} />
        <OrderSummaryItem label="Shipping + Tax">
          Calculate shipping
        </OrderSummaryItem>
        <OrderSummaryItem label="Coupon Code">Add coupon code</OrderSummaryItem>
        <Flex justify="space-between">
          <Text fontSize="lg" fontWeight="semibold">
            Total
          </Text>
          <Text fontSize="xl" fontWeight="extrabold">
            {/* {formatPrice({total})} */}₹ {total}
          </Text>
        </Flex>
      </Stack>
      <Button
        w="100%"
        bg={"#91c81f"}
        color="white"
        size="lg"
        fontSize="md"
        rightIcon={<FaArrowRight />}
        onClick={handleCheckout}
      >
        Checkout
      </Button>
    </Stack>
  );
};
