import { createSlice } from "@reduxjs/toolkit";
import { fetchCart, fetchUser } from "../utils/fetchLocalStorageData";

const userInfo = fetchUser();
const cartInfo = fetchCart();
const initialState = {
  user: userInfo,
  foodItems: [],
  cartShow: false,
  cartItems: cartInfo,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setFoodItems: (state, action) => {
      state.foodItems = action.payload;
    },
    setCartShow: (state, action) => {
      state.cartShow = action.payload;
    },

    addToCart: (state, action) => {
      const item = state.cartItems.find((p) => p.id === action.payload.id);
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.cartItems.push({ ...action.payload });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    deleteItem: (state, action) => {
      state.cartItems = state.cartItems.filter((p) => p.id !== action.payload);
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    resetCart: (state) => {
      state.cartItems = [];
      localStorage.setItem("cartItems", JSON.stringify([]));
    },
    incrementQuantity: (state, action) => {
      const item = state.cartItems.find((p) => p.id === action.payload.id);
      if (item) {
        item.quantity++;
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    decrementQuantity: (state, action) => {
      const item = state.cartItems.find((p) => p.id === action.payload.id);
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    //=========== User Start Here ============
    addUser: (state, action) => {
      state.user = action.payload;
    },
    removeUser: (state) => {
      state.user = null;
    },
    //=========== User End Here ============
  },
});

export const {
  setFoodItems,
  setCartShow,
  addToCart,
  deleteItem,
  updateCartItems,
  resetCart,
  incrementQuantity,
  decrementQuantity,
  addUser,
  removeUser,
} = cartSlice.actions;
export default cartSlice.reducer;
