import {
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue as mode,
  useToast,
} from "@chakra-ui/react";
import * as React from "react";
import { FaArrowRight } from "react-icons/fa";
import { useSelector } from "react-redux";
import { formatPrice } from "./PriceTag";
import Link from "next/link";
import axios from "axios";

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
  const toast = useToast();

  // REDUX
  const { data } = useSelector((state) => state.cart);
  const { authState } = useSelector((state) => state.auth);

  const [loading, setLoading] = React.useState(false);

  const handleCheckout = () => {
    if (authState) {
      setLoading(true);
      axios
        .post(
          "https://ill-puce-bunny-cape.cyclic.app/api/stripe-create-checkout",
          data
        )
        .then((res) => {
          setLoading(false);
          window.location.href = res.data.url;
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    } else {
      toast({
        title: "Please Sign In first",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  React.useEffect(() => {
    let totalPrice = 0;
    data.forEach((item) => {
      totalPrice += item.price * item.quantity;
    });
    setTotal(totalPrice);
  }, [data]);

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
        onClick={handleCheckout}
        rightIcon={<FaArrowRight />}
        isLoading={loading}
        loadingText="Processing"
      >
        Checkout
      </Button>
    </Stack>
  );
};
