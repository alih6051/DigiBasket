import { createSlice } from "@reduxjs/toolkit";
// import axios from "axios";
const initialState = {
  loading: false,
  error: false,
  data: [],
};

// export const cartReducer = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case "CART_LOADING":{
//       return {
//         ...state,
//         loading:true,
//       }
//     }
//     case "CART_ERROR":{
//       return {
//         ...state,
//         loading:false,
//         error:true,
//       }
//     }
//     case "CART_GET_DATA": {
//       return {
//         ...state,
//         loading: false,
//         error: false,
//         data: [...state,payload],
//       };
//     }
//     default:{
//       return state;
//     }
//   }
// };

// export const getCartData = async (dispatch) =>{
//   dispatch({type:"CART_LOADING"})
//   try{
//     let resp = await axios.get("http://localhost:8080/cart");
//     dispatch({type:"CART_GET_DATA", payload:resp.data})

//   }
//   catch(err){
//     dispatch({type:"CART_ERROR"})
//   }
// }
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.data.push(action.payload);
    },
    getData: (state, action) => {
      state.data = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart,getData } = cartSlice.actions;

export default cartSlice.reducer;
