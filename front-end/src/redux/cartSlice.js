import { createSlice } from '@reduxjs/toolkit'


const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    total: 0,
    amount: 0,
    quantyti: 0,
  },
  reducers: {
    addTocart(state, action) {
      const data = action.payload 
      const cart = state?.cart.find((item) => item._id === data._id);
      if (cart) {
        cart.quantity++;
        state.total += data.productPrice
      } else{
        state.cart.push({ ...data, quantity: 1 });
        state.total +=  data.productPrice
        state.amount += 1 
      }
    },
    increase (state, action) {
      const data = action.payload
      const cart =  state?.cart.find((item) => item._id === data._id);
      if (cart) {
        cart.quantity++
        state.total += cart.productPrice
      }
    },
    decrease: (state, action) => {
      const data = action.payload
      const cart =  state?.cart.find((item) => item._id === data._id);
      console.log(cart)
      if (cart.quantity == 1) {
        if (window.confirm('Are you sure you want to')) {
          state.cart = state.cart.filter((item) => item._id !== data._id)
        }
      }else{
        cart.quantity--
        state.total -= cart.productPrice
      }
    }
  }
});

export const {addTocart,increase,decrease} = cartSlice.actions;
export default cartSlice.reducer