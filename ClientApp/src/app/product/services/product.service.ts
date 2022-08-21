import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { catchError, Observable, tap, throwError } from "rxjs";
import { Product } from "../models/product.interface";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.apiURL}/products`);
  }

  searchProducts(searchTerm: string): Observable<Product[]> {
    return this.http
      .get<Product[]>(
        `${environment.apiURL}/products/search?query=${searchTerm}`
      )
      .pipe(
        tap((data: Product[]) => data),
        catchError((err) => throwError(() => err))
      );
  }
}
