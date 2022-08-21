import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "../material/material.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { HttpClientModule } from "@angular/common/http";
import { productReducer } from "./state/product.reducers";
import { ProductEffects } from "./state/product.effects";
import { ProductRoutingModule } from "./product-routing.module";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { ProductCartComponent } from "./components/product-cart/product-cart.component";
import { ProductSearchComponent } from "./components/product-search/product-search.component";
import { MatListModule } from "@angular/material/list";

@NgModule({
  declarations: [
    ProductListComponent,
    ProductCartComponent,
    ProductSearchComponent,
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    StoreModule.forFeature("productState", productReducer),
    EffectsModule.forFeature([ProductEffects]),
    MatListModule,
  ],
  exports: [ProductListComponent, ProductCartComponent, ProductSearchComponent],
})
export class ProductModule {}
