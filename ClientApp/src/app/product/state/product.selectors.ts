import { createSelector } from "@ngrx/store";
import { AppState } from "../../state/app.state";

export const selectProductsState = (state: AppState) => state.productState;

export const selectProductStore = createSelector(
  selectProductsState,
  (state) => state
);
