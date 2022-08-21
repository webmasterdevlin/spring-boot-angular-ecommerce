import { createAction, props } from "@ngrx/store";
import { Product } from "../models/product.interface";

export const loadProducts = createAction("[Product] loadProducts");

export const loadProductsSuccess = createAction(
  "[Product] loadProductsSuccess",
  props<{ products: Product[] }>()
);

export const loadProductsFail = createAction(
  "[Product] loadProductsFail",
  props<{ error: string }>()
);

export const searchProducts = createAction(
  "[Product] searchProducts",
  props<{ query: string }>()
);

export const searchProductsSuccess = createAction(
  "[Product] searchProductsSuccess",
  props<{ products: Product[] }>()
);

export const searchProductsFail = createAction(
  "[Product] searchProductsFail",
  props<{ error: string }>()
);
