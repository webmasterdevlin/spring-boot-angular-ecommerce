import { Component, OnInit } from "@angular/core";
import { searchProducts } from "../../state/product.actions";
import { selectProductStore } from "../../state/product.selectors";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";
import { Store } from "@ngrx/store";
import { AppState } from "../../../state/app.state";

@UntilDestroy()
@Component({
  selector: "app-product-search",
  templateUrl: "./product-search.component.html",
  styleUrls: ["./product-search.component.scss"],
})
export class ProductSearchComponent implements OnInit {
  value = "";

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}

  fetchProducts() {
    this.store.dispatch(searchProducts({ query: this.value }));
    this.store
      .select(selectProductStore)
      .pipe(untilDestroyed(this))
      .subscribe();
  }
}
