import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const getProduct = createAsyncThunk("product/getProduct", async () => {
  try {
    const { data } = await axios.get("http://localhost:3000/products");
    return data;
  } catch (error: any) {
    return error.message;
  }
});
