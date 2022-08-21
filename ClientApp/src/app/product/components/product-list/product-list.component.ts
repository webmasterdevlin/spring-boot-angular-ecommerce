import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "../../../state/app.state";
import { Product } from "../../models/product.interface";

import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";
import { selectProductStore } from "../../state/product.selectors";
import { loadProducts } from "../../state/product.actions";
import { addProductToChart } from "../../../cart/state/chart.actions";

@UntilDestroy()
@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  addToCart(product: Product) {
    this.store.dispatch(addProductToChart({ product }));
  }

  private fetchProducts() {
    this.store.dispatch(loadProducts());
    this.store
      .select(selectProductStore)
      .pipe(untilDestroyed(this))
      .subscribe((productState) => {
        this.products = productState.products;
      });
  }
}
