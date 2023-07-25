import React, { createContext, useReducer, useState } from 'react'
import axios from "axios";
import { produce } from "immer";

export const ProductContext = createContext({})

const initialState = {
    products: [],
}
const productReducer = (state: any, action: any) => {
    console.log(action.payload);
    switch (action.type) {
        case "GET-PRODUCT":
            return state.products = action.payload;
        case "ADD-PRODUCT":
            return state.products.push(action.payload);
        case "DELETE-PRODUCT":
            const id = action.payload;
            return state.products = state.products.filter((item: any) => item.id !== id);
        case "EDIT-PRODUCT":
            const product = action.payload;
            return state.products = state.products.map((item: any) =>
                item.id === product.id ? product : item
            );
        default:
            return state
    }
}

const ProductProvider = ({ children }: any) => {
    const [state, dispatch] = useReducer(produce(productReducer), initialState);



    //

    return (
        <ProductContext.Provider value={{ state, dispatch }}>
            {children}
        </ProductContext.Provider>
    )
}


export default ProductProvider