import {
  productReducer,
  ProductState,
} from "../product/state/product.reducers";
import { chartReducer, ChartState } from "../cart/state/chart.reducer";
import { ActionReducerMap } from "@ngrx/store";

export interface AppState {
  productState: ProductState;
  chartState: ChartState;
}
