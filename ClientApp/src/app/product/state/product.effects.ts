import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as productActions from "./product.actions";
import { map, mergeMap } from "rxjs/operators";
import { ProductService } from "../services/product.service";
import { catchError, of } from "rxjs";

@Injectable()
export class ProductEffects {
  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) {}

  getProductList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(productActions.loadProducts),
      mergeMap(() =>
        this.productService.getProducts().pipe(
          map((products) =>
            productActions.loadProductsSuccess({
              products,
            })
          ),
          catchError((error) => {
            console.log(error);
            return of(productActions.loadProductsFail({ error }));
          })
        )
      )
    )
  );

  getSearchProductList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(productActions.searchProducts),
      map((action) => action.query),
      mergeMap((query) =>
        this.productService.searchProducts(query).pipe(
          map((products) =>
            productActions.searchProductsSuccess({
              products,
            })
          ),
          catchError((error) => {
            console.log(error);
            return of(productActions.searchProductsFail({ error }));
          })
        )
      )
    )
  );
}
