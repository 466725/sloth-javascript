/// <reference types="cypress" />

export class TangerineHomePage {
  visit() {
    cy.visit("/");
  }

  getLogo() {
    // Checks for the Tangerine logo image
    return cy.get('img[alt="Tangerine"]');
  }

  clickLogin() {
    cy.contains("Log Me In").click();
  }
}