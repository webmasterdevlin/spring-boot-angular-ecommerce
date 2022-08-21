// @ts-check
///<reference path="../global.d.ts" />
/// <reference types="cypress"/>

Cypress.Commands.add("getCommand", (url: string, responseBody: Array<any>) => {
  cy.intercept("GET", url, {
    statusCode: 200,
    body: responseBody,
  });
});
