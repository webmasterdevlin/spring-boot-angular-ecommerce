import { createReducer, on } from "@ngrx/store";
import * as ProductActions from "./product.actions";
import { Product } from "../models/product.interface";

export interface ProductState {
  products: Product[];
}

export const initialState: ProductState = {
  products: [],
};

export const productReducer = createReducer(
  initialState,
  on(ProductActions.loadProductsSuccess, (state, { products }) => {
    return {
      ...state,
      products,
    };
  }),
  on(ProductActions.searchProductsSuccess, (state, { products }) => {
    return {
      ...state,
      products,
    };
  })
);
