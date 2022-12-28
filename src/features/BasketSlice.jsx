import { createSlice } from '@reduxjs/toolkit'

const initialState = {
basket:localStorage.getItem("basket")
? JSON.parse(localStorage.getItem("basket"))
: [],
}

const BasketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addBasket:(state=initialState,{payload})=>{
        state.basket= [...(state.basket.filter((item)=>item.id !== payload.id)),payload]
    },
    removeBasket:(state,{payload})=>{
        state.basket=[...(state.basket.filter((item)=>item.id !== payload.id))]
        localStorage.setItem("basket",JSON.stringify(state.basket))
    }
  }
});

export const {addBasket,removeBasket} = BasketSlice.actions

export default BasketSlice.reducer