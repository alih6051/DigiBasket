import {
<<<<<<< HEAD
    Button,
    Flex,
    Heading,
    Link,
    Stack,
    Text,
    useColorModeValue as mode,
  } from '@chakra-ui/react'
  import * as React from 'react'
  import { FaArrowRight } from 'react-icons/fa'
import { useSelector } from 'react-redux'
  import { formatPrice } from './PriceTag'
  const OrderSummaryItem = (props) => {
    const { label, value, children } = props
    return (
      <Flex justify="space-between" fontSize="sm">
        <Text fontWeight="medium" color={mode('gray.600', 'gray.400')}>
          {label}
        </Text>
        {value ? <Text fontWeight="medium">{value}</Text> : children}
      </Flex>
    )
  }
  
  export const CartOrderSummary = () => {
    const [total, setTotal] = React.useState(0);
   
    const {data} = useSelector(state => state.cart)
     //console.log(data)

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
            <Link href="#" textDecor="underline">
              Calculate shipping
            </Link>
          </OrderSummaryItem>
          <OrderSummaryItem label="Coupon Code">
            <Link href="#" textDecor="underline">
              Add coupon code
            </Link>
          </OrderSummaryItem>
          <Flex justify="space-between">
            <Text fontSize="lg" fontWeight="semibold">
              Total
            </Text>
            <Text fontSize="xl" fontWeight="extrabold">
              {/* {formatPrice({total})} */}
              ₹ {total}
            </Text>
          </Flex>
        </Stack>
        <Button  bg={"#91c81f"} color="white" size="lg" fontSize="md" rightIcon={<FaArrowRight />}>
          Checkout
        </Button>
      </Stack>
    )
  }
=======
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import * as React from "react";
import { FaArrowRight } from "react-icons/fa";
import { useSelector } from "react-redux";
import { formatPrice } from "./PriceTag";
import Link from "next/link";

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
  //console.log(data)

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
      <Link href="/checkout">
        <Button
          w="100%"
          bg={"#91c81f"}
          color="white"
          size="lg"
          fontSize="md"
          rightIcon={<FaArrowRight />}
        >
          Checkout
        </Button>
      </Link>
    </Stack>
  );
};
>>>>>>> a04dcb0b9559f3df0f796feba96490d3c1c8e718
