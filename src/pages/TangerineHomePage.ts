/// <reference types="cypress" />

export class TangerineHomePage {
  visit() {
    cy.visit("/"); // Navigate to the base URL
    cy.acceptCookies(); // Handle the cookie banner using our custom command
  }

  getLogo() {
    // Checks for the Tangerine logo image
    return cy.get('img[alt="Tangerine"]');
  }

  clickLogin() {
    // Updated to match "Log In" (current) or "Log Me In" (legacy)
    cy.contains(/Log In|Log Me In/i).click();
  }
}