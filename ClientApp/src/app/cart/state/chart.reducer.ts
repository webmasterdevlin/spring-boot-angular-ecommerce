import { createReducer, on } from "@ngrx/store";
import { Product } from "../../product/models/product.interface";
import * as ChartActions from "./chart.actions";

export interface ChartState {
  products: Product[];
  subtotal: number;
}

export const initialState: ChartState = {
  products: [],
  subtotal: 0,
};

export const chartReducer = createReducer(
  initialState,
  on(ChartActions.addProductToChart, (state, { product }) => {
    return {
      ...state,
      products: [...state.products, product],
      subtotal: state.subtotal + product.price,
    };
  }),
  on(ChartActions.removeProductFromChart, (state, { product, index }) => {
    const updatedProducts = [...state.products];
    updatedProducts.splice(index, 1);

    return {
      ...state,
      products: updatedProducts,
      subtotal: state.subtotal - product.price,
    };
  }),
  on(ChartActions.emptyChart, (state) => {
    return {
      ...state,
      products: [],
      subtotal: 0,
    };
  })
);
