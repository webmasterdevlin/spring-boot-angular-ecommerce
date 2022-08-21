import { createAction, props } from "@ngrx/store";
import { Product } from "../../product/models/product.interface";

export const addProductToChart = createAction(
  "[Chart] addProductToChart",
  props<{ product: Product }>()
);

export const removeProductFromChart = createAction(
  "[Chart] removeProductFromChart",
  props<{ product: Product; index: number }>()
);

export const emptyChart = createAction("[Chart] emptyChart");
