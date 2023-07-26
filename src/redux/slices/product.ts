import { createSlice } from "@reduxjs/toolkit";
import { getProduct } from "../actions/product";
const initialState = {
  products: [],
  isLoading: false,
  err: "",
} as { products: any[]; isLoading: boolean; err: any };

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProduct.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    });
    builder.addCase(getProduct.rejected, (state, action) => {
      state.isLoading = false;
      state.err = action.payload;
    });
  },
});
export const productReducer = productSlice.reducer;
