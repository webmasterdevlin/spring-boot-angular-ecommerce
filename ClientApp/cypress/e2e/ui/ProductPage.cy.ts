/// <reference types="cypress"/>

import { Product } from "../../../src/app/product/models/product.interface";

describe("Load Products Page", () => {
  beforeEach(() => {
    cy.fixture<Product[]>("products").then((products) => {
      cy.getCommand("http://localhost:8080/api/v1/products", products);
    });
    cy.visit("/");
  });

  it("should render products", () => {
    cy.get("[data-cy=card]").should("have.length", 2);
  });

  it("should render cart", () => {
    cy.get("[data-cy=cart]").should("contain", "Cart's Subtotal");
  });

  it("should add a product to cart", () => {
    cy.get("[data-cy=add-to-cart-button]").eq(0).click();
    cy.get("[data-cy=item]").should("have.length", 1);
  });

  it("should empty cart", () => {
    cy.get("[data-cy=add-to-cart-button]").eq(0).click();
    cy.get("[data-cy=add-to-cart-button]").eq(1).click();
    cy.get("[data-cy=item]").should("have.length", 2);
    cy.get("[data-cy=empty-cart]").click();
    cy.get("[data-cy=item]").should("have.length", 0);
  });
});
