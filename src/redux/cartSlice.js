import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: false,
  data: [
    {
      id:1,
      discount: 23,
      image:
        "https://www.bigbasket.com/media/uploads/p/s/10000098_9-fresho-coriander-leaves.jpg",
      title: "Coriander Leaves",
      price: 50,
      quantity: 2   
   },
   {
    id:3,
    discount: 35,
    image:
      "https://www.bigbasket.com/media/uploads/p/l/10000071_14-fresho-carrot-orange.jpg",
    title: "Apple",
    price: 80,
    quantity: 1
 },
 {
  id:4,
  discount: 65,
  image:
    "https://www.bigbasket.com/media/uploads/p/s/40000291_9-tata-sampann-unpolished-toor-dalarhar-dal.jpg",
  title: "Masala",
  price: 200,
  quantity: 4
},
{
  id:5,
  discount: 45,
  image:
    "https://www.bigbasket.com/media/uploads/p/s/10000074_19-fresho-cauliflower.jpg",
  title: "Cauliflower",
  price: 29,
  quantity: 2
}
  ]
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
<<<<<<< HEAD
      state.data.push(action.payload);
      
=======
      let isAdded = false;
      state.data = state.data.map((el) => {
        if (el.id == action.payload.id) {
          isAdded = true;
          return { ...el, quantity: el.quantity + action.payload.quantity };
        } else {
          return el;
        }
      });
      if (!isAdded) {
        state.data.push(action.payload);
      }
>>>>>>> a04dcb0b9559f3df0f796feba96490d3c1c8e718
    },
    removeItem: (state, action) => {
      state.data = state.data.filter((el) => el.id != action.payload) ;
       
    },
<<<<<<< HEAD
    updateQuantity: (state, {payload}) => {
      state.data = state.data.map((el) => {
        if(el.id == payload.id) {
          return {...el, quantity: payload.quant}
        } else {
          return el
        }
      })
    },
  
=======
    removeItem: (state, action) => {
      state.data = state.data.filter((el) => el.id != action.payload);
    },
    updateQuantity: (state, { payload }) => {
      state.data = state.data.map((el) => {
        if (el.id == payload.id) {
          return { ...el, quantity: payload.quant };
        } else {
          return el;
        }
      });
    },
>>>>>>> a04dcb0b9559f3df0f796feba96490d3c1c8e718
  },
});

// Action creators are generated for each case reducer function
<<<<<<< HEAD
export const { addToCart, getData, removeItem, updateQuantity, updateTotal } = cartSlice.actions;
=======
export const { addToCart, getData, removeItem, updateQuantity } =
  cartSlice.actions;
>>>>>>> a04dcb0b9559f3df0f796feba96490d3c1c8e718

export default cartSlice.reducer;
