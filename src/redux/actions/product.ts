import axios from "axios";

export const fetchProducts = () => async (dispatch: any) => {
  dispatch({ type: "products/fetchProductRequest" });
  try {
    const { data }: any = await axios.get("http://localhost:3000/products");
    dispatch({ type: "products/fetchProductsSuccess", payload: data });
  } catch (error: any) {
    dispatch({ type: "products/fetchProductsError", payload: error.message });
  }
};

export const addProducts = (product: any) => async (dispatch: any) => {
  dispatch({ type: "products/addProductRequest" });
  try {
    const { data }: any = await axios.post(
      "http://localhost:3000/products",
      product
    );
    console.log(data);
    dispatch({ type: "products/addProductsSuccess", payload: data });
  } catch (error: any) {
    dispatch({ type: "products/addProductsError", payload: error.message });
  }
};

export const updateProducts = (product: any) => async (dispatch: any) => {
  dispatch({ type: "products/updateProductRequest" });
  try {
    const { data }: any = await axios.put(
      `http://localhost:3000/products/${product.id}`,
      product
    );
    console.log(data);
    dispatch({ type: "products/updateProductsSuccess", payload: data });
  } catch (error: any) {
    dispatch({ type: "products/updateProductsError", payload: error.message });
  }
};

export const removeProducts = (id: any) => async (dispatch: any) => {
  dispatch({ type: "products/deleteProductRequest" });
  try {
    await axios.delete(`http://localhost:3000/products/${id}`);
    dispatch({ type: "products/deleteProductsSuccess", payload: id });
  } catch (error: any) {
    dispatch({ type: "products/deleteProductsError", payload: error.message });
  }
};
