<<<<<<< HEAD
import { Button, CloseButton, Flex, Input, Link, Select, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'
import { PriceTag } from './PriceTag'
import { CartProductMeta } from './CartProductMeta'
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from '@/redux/cartSlice';
import {useState} from "react"


export const CartItem = (props) => {
    const [quant, setQuant] = useState(props.quantity)
    const cartItems = useSelector(state => state.cart.data);
    const dispatch = useDispatch();



    const handleRemove  = (id) => {
        dispatch(removeItem(id));
    }

    const handleQuantityUpdate = (id, quant)=> {
        dispatch(updateQuantity({id, quant}))
    }
=======
import {
  Button,
  CloseButton,
  Flex,
  Input,
  Link,
  Select,
  useColorModeValue,
} from "@chakra-ui/react";
import * as React from "react";
import { PriceTag } from "./PriceTag";
import { CartProductMeta } from "./CartProductMeta";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "@/redux/cartSlice";
import { useState } from "react";

export const CartItem = (props) => {
  const [quant, setQuant] = useState(props.quantity);
  const cartItems = useSelector((state) => state.cart.data);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  const handleQuantityUpdate = (id, quant) => {
    dispatch(updateQuantity({ id, quant }));
  };
>>>>>>> a04dcb0b9559f3df0f796feba96490d3c1c8e718

  const {
    isGiftWrapping,
    title,
    id,
    description,
    quantity,
    image,
    currency,
    price,
<<<<<<< HEAD
  } = props
  console.log(quantity)
  return (
    <Flex
      direction={{
        base: 'column',
        md: 'row',
=======
  } = props;
  return (
    <Flex
      direction={{
        base: "column",
        md: "row",
>>>>>>> a04dcb0b9559f3df0f796feba96490d3c1c8e718
      }}
      justify="space-between"
      align="center"
    >
      <CartProductMeta
        name={title}
        description={description}
        image={image}
        isGiftWrapping={isGiftWrapping}
      />

      {/* Desktop */}
      <Flex
        width="full"
        justify="space-between"
        display={{
<<<<<<< HEAD
          base: 'none',
          md: 'flex',
        }}
      >
        <Select value={quant} placeholder='Qty' width={20} onChange={(e) => {
            setQuant(+e.target.value)
            handleQuantityUpdate(id, +e.target.value)
        }
        } >
            <option value='1'> 1</option>
            <option value='2'> 2</option>
            <option value='3'> 3</option>
            <option value='4'> 4</option>
            <option value='5'> 5</option>
            <option value='6'> 6</option>
            <option value='7'> 8</option>
            <option value='9'> 9</option>

        </Select>
        <PriceTag price={price}   />
        <CloseButton aria-label={`Delete ${title} from cart`} onClick={() => handleRemove(id)} />
=======
          base: "none",
          md: "flex",
        }}
      >
        <Select
          value={quant}
          placeholder="Qty"
          width={20}
          onChange={(e) => {
            setQuant(+e.target.value);
            handleQuantityUpdate(id, +e.target.value);
          }}
        >
          <option value="1"> 1</option>
          <option value="2"> 2</option>
          <option value="3"> 3</option>
          <option value="4"> 4</option>
          <option value="5"> 5</option>
          <option value="6"> 6</option>
          <option value="7"> 8</option>
          <option value="9"> 9</option>
        </Select>
        <PriceTag price={price} />
        <CloseButton
          aria-label={`Delete ${title} from cart`}
          onClick={() => handleRemove(id)}
        />
>>>>>>> a04dcb0b9559f3df0f796feba96490d3c1c8e718
      </Flex>

      {/* Mobile */}
      <Flex
        mt="4"
        align="center"
        width="full"
        justify="space-between"
        display={{
<<<<<<< HEAD
          base: 'flex',
          md: 'none',
        }}
      >
        <Button fontSize="sm" onClick={() => handleRemove(id)} >
          Delete
        </Button>
        <Select value={quant} placeholder='Qty' width={20} onChange={(e) => {
            setQuant(+e.target.value)
            handleQuantityUpdate(id, +e.target.value)
        }
        } >
            <option value='1'> 1</option>
            <option value='2'> 2</option>
            <option value='3'> 3</option>
            <option value='4'> 4</option>
            <option value='5'> 5</option>
            <option value='6'> 6</option>
            <option value='7'> 8</option>
            <option value='9'> 9</option>

=======
          base: "flex",
          md: "none",
        }}
      >
        <Button fontSize="sm" onClick={() => handleRemove(id)}>
          Delete
        </Button>
        <Select
          value={quant}
          placeholder="Qty"
          width={20}
          onChange={(e) => {
            setQuant(+e.target.value);
            handleQuantityUpdate(id, +e.target.value);
          }}
        >
          <option value="1"> 1</option>
          <option value="2"> 2</option>
          <option value="3"> 3</option>
          <option value="4"> 4</option>
          <option value="5"> 5</option>
          <option value="6"> 6</option>
          <option value="7"> 8</option>
          <option value="9"> 9</option>
>>>>>>> a04dcb0b9559f3df0f796feba96490d3c1c8e718
        </Select>
        {/* <QuantitySelect
          value={quantity}
          onChange={(e) => {
            onChangeQuantity?.(+e.currentTarget.value)
          }}
        /> */}
        <PriceTag price={price} currency={currency} />
      </Flex>
    </Flex>
<<<<<<< HEAD
  )
}
=======
  );
};
>>>>>>> a04dcb0b9559f3df0f796feba96490d3c1c8e718
