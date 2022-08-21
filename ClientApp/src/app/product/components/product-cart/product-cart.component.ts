import { Component, OnInit } from "@angular/core";
import { Product } from "../../models/product.interface";
import { Store } from "@ngrx/store";
import { AppState } from "../../../state/app.state";
import { selectChartStore } from "../../../cart/state/chart.selectors";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";
import {
  emptyChart,
  removeProductFromChart,
} from "../../../cart/state/chart.actions";

@UntilDestroy()
@Component({
  selector: "app-product-cart",
  templateUrl: "./product-cart.component.html",
  styleUrls: ["./product-cart.component.scss"],
})
export class ProductCartComponent implements OnInit {
  products: Product[] = [];
  subtotal = 0;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  removeProduct(product: Product, index: number) {
    this.store.dispatch(removeProductFromChart({ product, index }));
  }

  emptyChart() {
    this.store.dispatch(emptyChart());
  }

  info() {
    alert("Future feature");
  }

  private fetchProducts() {
    this.store
      .select(selectChartStore)
      .pipe(untilDestroyed(this))
      .subscribe((chartState) => {
        this.products = chartState.products;
        this.subtotal = chartState.subtotal;
      });
  }
}
