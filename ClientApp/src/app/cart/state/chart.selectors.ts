import { createSelector } from "@ngrx/store";
import { AppState } from "../../state/app.state";

export const selectChartState = (state: AppState) => state.chartState;

export const selectChartStore = createSelector(
  selectChartState,
  (state) => state
);
