import { produce } from "immer";

const initialState = {
  products: [],
  isLoading: false,
  err: "",
} as { products: any[]; isLoading: boolean; err: string };

export const productReducer = (state = initialState, action: any) => {
  //   console.log(state.err);
  return produce(state, (draftState) => {
    switch (action.type) {
      case "products/fetchProductRequest":
        draftState.isLoading = true;
        break;
      case "products/fetchProductsSuccess":
        draftState.isLoading = false;
        draftState.products = action.payload;
        break;
      case "products/fetchProductsError":
        draftState.isLoading = false;
        draftState.err = action.payload;
        break;
      case "products/addProductRequest":
        draftState.isLoading = true;
        break;
      case "products/addProductsSuccess":
        draftState.products.push(action.payload);
        draftState.isLoading = false;
        break;
      case "products/addProductsError":
        draftState.isLoading = false;
        draftState.err = action.payload;
        break;
      case "products/updateProductRequest":
        draftState.isLoading = true;
        break;
      case "products/updateProductsSuccess":
        draftState.isLoading = false;
        const product = action.payload;
        draftState.products = draftState.products.map((item: any) =>
          item.id === product.id ? product : item
        );
        // draftState.products[action.payload.id] = action.payload;
        break;
      case "products/updateProductsError":
        draftState.isLoading = false;
        draftState.err = action.payload;
        break;
      case "products/deleteProductRequest":
        draftState.isLoading = true;
        break;
      case "products/deleteProductsSuccess":
        draftState.isLoading = false;
        const id = action.payload;
        draftState.products = draftState.products.filter(
          (item) => item.id !== id
        );
        break;
      case "products/deleteProductsError":
        draftState.isLoading = false;
        draftState.err = action.payload;
        break;
      default:
        return state;
    }
  });
};
