import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
productList:[],
loading:false,
error:false
}
export const getProduct=createAsyncThunk(
    "getProduct",
    async(thunkAPI,{rejectedWithValue})=>{
        const url = "https://fakestoreapi.com/products";
        try {
            const {data}= await axios(url);
            console.log(data);
            return data
                } catch (error) {
            return rejectedWithValue("someThing went Wrong")
        }
    }
)
const ProductSlice = createSlice({
  name: "Products",
  initialState,
  reducers: {
    clearProducts:(state)=>{
        state.productList=[]
    },
  },
  extraReducers:(builder)=>{
    builder
    .addCase(getProduct.pending,(state)=>{
        state.loading=true
    })
    .addCase(getProduct.fulfilled,(state,{payload})=>{
        state.loading=false
        state.productList=payload
    })
    .addCase(getProduct.rejected,(state,{payload})=>{
        state.error= true
        state.loading=false
    })
  }
});


export const {clearProducts} = ProductSlice.actions

export default ProductSlice.reducer